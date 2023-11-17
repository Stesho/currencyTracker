import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('color-theme') || 'dark',
  );

  const toggleTheme = (isChecked: boolean) => {
    const newTheme = isChecked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('color-theme', theme || 'dark');
  }, [theme]);

  return { theme, toggleTheme };
};
