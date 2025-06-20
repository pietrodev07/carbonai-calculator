import { appRouter } from "#/server";
import { handle as vercelHandle } from "hono/vercel";

export const GET = vercelHandle(appRouter.handler);
export const POST = vercelHandle(appRouter.handler);
