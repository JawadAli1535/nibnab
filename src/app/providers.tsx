'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
  });
}

export const CSPostHogProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <PostHogProvider client={posthog}>{children}</PostHogProvider>
  );
};

