import { SunHigh, Moon } from 'tabler-icons-react';
import { useThemeContext } from '../context';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  const isDarkMode = theme === 'dark';

  return (
    <button className='flex space-x-2 items-center' onClick={toggleTheme}>
      {isDarkMode ? <Moon color='icon' /> : <SunHigh color='icon' />}
      <span className='text-slate-700'>
        {isDarkMode ? 'Dark' : 'Light'} mode
      </span>
    </button>
  );
}
