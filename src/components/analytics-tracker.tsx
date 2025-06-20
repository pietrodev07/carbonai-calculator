"use client";

import { useEffect } from "react";
import { client } from "#/lib/server/client";
import { usePathname } from "next/navigation";

const validPathnames = ["/"];

const VIEW_INTERVAL_MS = 1000 * 60 * 5; // 5 minutes

export const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (validPathnames.includes(pathname)) {
      const lastViewKey = `lastPageView_${pathname}`;
      const lastView = localStorage.getItem(lastViewKey);
      const now = Date.now();

      if (!lastView || now - parseInt(lastView, 10) > VIEW_INTERVAL_MS) {
        client.analytics.track.$get({ pathname });
        localStorage.setItem(lastViewKey, now.toString());
      }
    }
  }, [pathname]);

  return null;
};
