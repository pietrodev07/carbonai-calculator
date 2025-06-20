import { PropsWithChildren } from "react";
import { ThemesProvider } from "./theme-provider";
import { JstackProvider } from "./jstack-provider";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <JstackProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </JstackProvider>
  );
};
