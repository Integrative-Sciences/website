import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from './analytics';

// Hook to track page views automatically
export const usePageTracking = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname || '/';
    trackPageView(url);
  }, [pathname, searchParams]);
};

// Hook for tracking component mount/unmount
export const useComponentTracking = (componentName: string): void => {
  useEffect(() => {
    // Track when component mounts
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'component_view', {
        event_category: 'engagement',
        event_label: componentName,
      });
    }
  }, [componentName]);
};