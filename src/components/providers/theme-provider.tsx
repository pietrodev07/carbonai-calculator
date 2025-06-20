import { ThemeProvider, ThemeProviderProps } from "next-themes";

export const ThemesProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      {...props}
      enableSystem
      attribute="class"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
};
