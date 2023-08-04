import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import IconMenu from '~icons/tabler/menu-2';
import IconClose from '~icons/tabler/x';

const MenuToggle: FunctionComponent = () => {
  const [menuType, setMenuType] = useState(
    localStorage.getItem('menu') ?? 'toOpen'
  );
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setMenuType(() => (menuType === 'toOpen' ? 'toClose' : 'toOpen'));
  };
  console.log(menuType);

  useEffect(() => {
    if (menuType === 'toClose') {
      console.log('to close');
    } else {
      console.log('to open');
    }
    localStorage.setItem('menu', menuType);
  }, [menuType]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={handleClick}>
      {menuType === 'toOpen' && <IconMenu />}
      {menuType === 'toClose' && <IconClose />}
    </button>
  );
};

export default MenuToggle;
