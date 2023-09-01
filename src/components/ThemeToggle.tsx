import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import IconMoon from '~icons/tabler/moon-filled';
import IconSun from '~icons/tabler/sun-filled';

const ThemeToggle: FunctionComponent = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(() => (theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex  bg-[#111] p-1 relative rounded-3xl">
      <IconSun style={{ fontSize: '2rem', color: '#f39c12' }} />
      <IconMoon style={{ fontSize: '2rem', color: '#f1c40f' }} />
      <button
        className={`absolute w-8 h-8 bg-[#fff] rounded-full ${
          theme === 'light' ? `translate-x-0` : `translate-x-[100%]`
        } transition duration-300`}
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default ThemeToggle;
