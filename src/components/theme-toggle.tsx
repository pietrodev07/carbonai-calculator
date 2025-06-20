"use client";

import { useCallback } from "react";
import { ToasterProps } from "sonner";
import { useTheme } from "next-themes";
import { Toaster } from "./atoms/sonner";
import { ThemeIcon } from "./icons/theme-icon";
import { Button } from "#/components/atoms/button";

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleTheme}
        className="fixed bottom-4 right-4"
      >
        <ThemeIcon />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Toaster
        richColors
        closeButton
        theme={resolvedTheme as ToasterProps["theme"]}
      />
    </>
  );
};
