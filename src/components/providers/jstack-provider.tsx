"use client";

import { toast } from "sonner";
import * as TQ from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export const JstackProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new TQ.QueryClient({
        mutationCache: new TQ.MutationCache({
          onError: () => {
            toast.error("Something went wrong!");
          },
        }),
      }),
  );

  return (
    <TQ.QueryClientProvider client={queryClient}>{children}</TQ.QueryClientProvider>
  );
};
