import { NextRequest, NextResponse } from 'next/server';

interface CloudflareRecord {
  id: string;
  type: string;
  name: string;
  content: string;
  proxied: boolean;
  ttl: number;
}

const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
const CLOUDFLARE_RECORD_NAME = process.env.CLOUDFLARE_RECORD_NAME || 'integrative.science';

async function getExternalIP(): Promise<string> {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json() as { ip: string };
  return data.ip;
}

async function getCloudflareRecord(): Promise<CloudflareRecord | null> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records?name=${CLOUDFLARE_RECORD_NAME}&type=A`,
    {
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json() as { success: boolean; result: CloudflareRecord[] };
  
  if (!data.success || !data.result || data.result.length === 0) {
    return null;
  }

  return data.result[0];
}

async function updateCloudflareRecord(recordId: string, newIP: string): Promise<boolean> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records/${recordId}`,
    {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: newIP,
      }),
    }
  );

  const data = await response.json() as { success: boolean };
  return data.success;
}

export async function checkAndUpdateIP() {
  if (!CLOUDFLARE_API_TOKEN || !CLOUDFLARE_ZONE_ID) {
    return {
      success: false,
      error: 'Missing Cloudflare credentials',
      timestamp: new Date().toISOString(),
    };
  }

  try {
    const externalIP = await getExternalIP();
    const record = await getCloudflareRecord();
    
    if (!record) {
      return {
        success: false,
        error: `No A record found for ${CLOUDFLARE_RECORD_NAME}`,
        externalIP,
        timestamp: new Date().toISOString(),
      };
    }
    
    const cloudflareIP = record.content;
    
    if (externalIP === cloudflareIP) {
      return {
        success: true,
        updated: false,
        message: 'IP addresses match - no update needed',
        externalIP,
        cloudflareIP,
        timestamp: new Date().toISOString(),
      };
    }
    
    const success = await updateCloudflareRecord(record.id, externalIP);
    
    if (success) {
      return {
        success: true,
        updated: true,
        message: `Successfully updated ${CLOUDFLARE_RECORD_NAME}`,
        externalIP,
        oldIP: cloudflareIP,
        timestamp: new Date().toISOString(),
      };
    } else {
      return {
        success: false,
        error: 'Failed to update DNS record',
        externalIP,
        cloudflareIP,
        timestamp: new Date().toISOString(),
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    };
  }
}

export async function GET(_request: NextRequest) {
  const result = await checkAndUpdateIP();
  return NextResponse.json(result);
}
