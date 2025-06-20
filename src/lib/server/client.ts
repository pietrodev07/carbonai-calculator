import { env } from "../env";
import { AppRouter } from "#/server";
import { createClient } from "jstack";

export const client = createClient<AppRouter>({
  baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
});
