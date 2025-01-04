'use client'

import React from 'react';

export const useColorScheme = (): boolean => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getColorScheme = () => {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("change", getColorScheme);
      getColorScheme();
      return () => window.removeEventListener("change", getColorScheme);
    }
  }, []);

  return isDarkMode;
};
