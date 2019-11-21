import { GA_TRACKING_ID } from '../config/config';

declare global {
  interface Window { gtag: any }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    page_location: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export interface GaEventI {
  action: string;
  category: string;
  label: string;
  value: object;
}

export const event = ({
  action, category, label, value,
}: GaEventI): void => {
  window.gtag('event', action, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    event_category: category,
    // eslint-disable-next-line @typescript-eslint/camelcase
    event_label: label,
    value,
  });
};
