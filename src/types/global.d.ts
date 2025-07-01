// Global type definitions for Google Analytics
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent',
      targetId: string | 'update',
      config?: {
        [key: string]: any;
        analytics_storage?: 'granted' | 'denied';
        ad_storage?: 'granted' | 'denied';
      }
    ) => void;
  }
}

export {};