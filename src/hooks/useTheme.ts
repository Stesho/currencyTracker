import { useLayoutEffect, useState } from 'react';

import { colorThemeKey, colorThemes } from '@/constants/colorTheme/colorTheme';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem(colorThemeKey);
    if (!currentTheme) {
      localStorage.setItem(colorThemeKey, colorThemes.dark);
    }
    return localStorage.getItem(colorThemeKey);
  });

  const toggleTheme = (isChecked: boolean) => {
    const newTheme = isChecked ? colorThemes.light : colorThemes.dark;
    setTheme(newTheme);
    localStorage.setItem(colorThemeKey, newTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      colorThemeKey,
      theme || colorThemeKey,
    );
  }, [theme]);

  return { theme, toggleTheme };
};
