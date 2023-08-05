import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import IconMoon from '~icons/tabler/moon';
import IconSun from '~icons/tabler/sun-high';
const ThemeToggle: FunctionComponent = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  return (
    <div className="flex gap-4">
      <IconSun style={{ fontSize: '2rem' }} />
      <IconMoon style={{ fontSize: '2rem' }} />
    </div>
  );
};

export default ThemeToggle;
