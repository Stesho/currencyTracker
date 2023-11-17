import { useLayoutEffect, useState } from 'react';

import { colorThemeKey, colorThemes } from '@/constants/colorTheme/colorTheme';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem(colorThemeKey) || colorThemes.dark,
  );

  const toggleTheme = (isChecked: boolean) => {
    const newTheme = isChecked ? colorThemes.dark : colorThemes.light;
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
