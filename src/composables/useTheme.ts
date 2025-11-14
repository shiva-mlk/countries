import { ref, watchEffect } from 'vue';

export function useTheme() {
  const theme = ref(localStorage.getItem('theme') || 'light');

  watchEffect(() => {
    const root = window.document.documentElement;
    if (theme.value === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme.value);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  return { theme, toggleTheme };
}
