import { Metadata } from "next";

const METADATA_OG_IMAGE_URL = "/og-image.png";
const METADATA_SITE_URL = "https://carbonai-calculator.vercel.app";
const METADATA_TITLE = "CarbonAI - Ai Carbon Calculator";
const METADATA_DESCRIPTION =
  "Estimate CO2 emissions that you are producing with your AI usage";

export const layoutMetadata: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  metadataBase: new URL(METADATA_SITE_URL),
  openGraph: {
    title: METADATA_TITLE,
    url: METADATA_SITE_URL,
    description: METADATA_DESCRIPTION,
    images: [{ url: METADATA_OG_IMAGE_URL }],
  },
  twitter: {
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
    images: [{ url: METADATA_OG_IMAGE_URL }],
  },
  keywords: [
    "ai",
    "carbon",
    "carbon emissions",
    "carbon footprint",
    "co2",
    "co2 emissions",
    "co2 footprint",
    "co2 impact",
    "co2 reduction",
    "co2 reduction tool",
    "co2 reduction tools",
  ],
};
