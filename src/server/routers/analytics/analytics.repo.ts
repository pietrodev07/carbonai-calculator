import { Redis } from "@upstash/redis";
import { TrackInput } from "./analytics.schema";

export const trackPageView = async (redis: Redis, input: TrackInput) => {
  const hashMapName = "carbonai_analytics_page_views";
  await redis.hincrby(hashMapName, input.pathname, 1);
};
