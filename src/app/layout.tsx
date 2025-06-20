import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { MuseoModerno } from "next/font/google";
import { layoutMetadata } from "#/lib/metadata";
import { AppProviders } from "#/components/providers";
import { ModeToggle } from "#/components/theme-toggle";
import { AnalyticsTracker } from "#/components/analytics-tracker";

const appFont = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = layoutMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={appFont.className}>
        <AppProviders>
          <AnalyticsTracker />
          {children}
          <ModeToggle />
        </AppProviders>
      </body>
    </html>
  );
}
