import { z } from "zod";

export const trackInputSchema = z.object({
  pathname: z.string().min(1),
});

export type TrackInput = z.infer<typeof trackInputSchema>;
