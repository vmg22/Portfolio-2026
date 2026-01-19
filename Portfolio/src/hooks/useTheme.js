import { useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';

export function useTheme() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    // Update the DOM attribute whenever the theme changes
    document.documentElement.setAttribute('data-theme', theme);
    
    // Also toggle the class for generic Tailwind dark mode if configured
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
}
