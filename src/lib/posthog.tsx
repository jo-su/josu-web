'use client';
 
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
 
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://josu.garralda.eus/ingest',
    ui_host: 'https://eu.posthog.com',
    capture_pageview: true,
  });
}
 
const PHProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
 
export default PHProvider;