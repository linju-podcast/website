import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import IconMenu from '~icons/tabler/menu-2';
import IconClose from '~icons/tabler/x';

import navData from '../data/navData';
import ThemeToggle from './ThemeToggle';

const MenuToggle: FunctionComponent = () => {
  const [menuType, setMenuType] = useState(
    localStorage.getItem('menu') ?? 'toOpen'
  );
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setMenuType(() => (menuType === 'toOpen' ? 'toClose' : 'toOpen'));
  };

  useEffect(() => {
    if (menuType === 'toClose') {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
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
    <div>
      <button onClick={handleClick} className="md:hidden">
        <IconMenu style={{ fontSize: '2rem' }} />
      </button>

      {menuType === 'toClose' && (
        <div className="fixed inset-0 w-full h-full md:hidden">
          <div className="absolute inset-0 w-full h-full bg-blue opacity-50"></div>
          <div className="absolute w-72 h-full bg-white right-0 top-0 z-50">
            <div className="w-full flex justify-end ">
              <IconClose
                style={{ fontSize: '2rem' }}
                className="mr-2 mt-2"
                onClick={handleClick}
              />
            </div>

            <nav>
              <ul className="flex flex-col flex-wrap  content-center  gap-8">
                {navData.map((item) => (
                  <li>
                    <a href={item.path} onClick={handleClick}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full flex justify-center mt-10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
