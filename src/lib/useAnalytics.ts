import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

// Hook to track page views automatically
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname + location.search);
  }, [location]);
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