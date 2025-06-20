import { j } from "./jstack";
import { routers } from "./routers";

const api = j
  .router()
  .basePath("/api")
  .use(j.defaults.cors)
  .onError(j.defaults.errorHandler);

export const appRouter = j.mergeRouters(api, routers);
export type AppRouter = typeof appRouter;
