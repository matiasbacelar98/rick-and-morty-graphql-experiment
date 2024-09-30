import { SunHigh, Moon } from 'tabler-icons-react';
import Show from './Show';
import { useThemeContext } from '../context';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  const isDarkMode = theme === 'dark';

  return (
    <button className='flex space-x-2 items-center' onClick={toggleTheme}>
      <Show when={isDarkMode} fallback={<SunHigh color='icon' />}>
        <Moon color='icon' />
      </Show>
      <span>{isDarkMode ? 'Dark' : 'Light'} mode</span>
    </button>
  );
}
