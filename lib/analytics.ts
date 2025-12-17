// Google Analytics utility functions for React

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics tracking ID
export const GA_TRACKING_ID = 'G-3C36DHZYC5';

// Check if gtag is available (for development vs production)
export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (url: string): void => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (isGtagAvailable()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific events for the journal website
export const trackEditorProfileView = (editorName: string): void => {
  trackEvent('view_editor_profile', 'engagement', editorName);
};

export const trackModalOpen = (modalType: string): void => {
  trackEvent('modal_open', 'engagement', modalType);
};

export const trackModalClose = (modalType: string): void => {
  trackEvent('modal_close', 'engagement', modalType);
};

export const trackSectionView = (sectionName: string): void => {
  trackEvent('section_view', 'engagement', sectionName);
};

export const trackExternalLinkClick = (url: string): void => {
  trackEvent('external_link_click', 'outbound', url);
};