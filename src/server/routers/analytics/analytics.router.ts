import * as repo from "./analytics.repo";
import * as schema from "./analytics.schema";
import { j, publicProcedure } from "#/server/jstack";

export const analyticsRouter = j.router({
  track: publicProcedure
    .input(schema.trackInputSchema)
    .query(async ({ c, ctx, input }) => {
      await repo.trackPageView(ctx.redis, input);
      return c.json({ success: true });
    }),
});
