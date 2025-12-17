"use client";

import React from 'react';
import { WipProvider } from "@/components/ui/WipContext";
import WipModal from "@/components/ui/WipModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WipProvider>
      {children}
      <WipModal />
    </WipProvider>
  );
}
