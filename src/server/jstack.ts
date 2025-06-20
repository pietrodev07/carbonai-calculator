import { jstack } from "jstack";
import { redis } from "./redis-upstash/client";

export const j = jstack.init();

const redisMiddleware = j.middleware(async ({ next }) => {
  return await next({ redis });
});

export const publicProcedure = j.procedure.use(redisMiddleware);
