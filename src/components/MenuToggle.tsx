import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import IconMenu from '~icons/tabler/menu-2';
import IconClose from '~icons/tabler/x';

import ThemeToggle from './ThemeToggle';
import LanguagePicker from './LanguagePicker';

import { useTranslatedPath, useTranslations } from '../i18n/utils';

type menuToggleProps = {
  lang: 'cn' | 'en';
  currentPath: string;
};

const MenuToggle: FunctionComponent<menuToggleProps> = ({
  lang,
  currentPath,
}) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

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

      <div
        className={`transition ${
          menuType === 'toClose' ? `translate-x-0` : `translate-x-[100%]`
        } fixed w-72 duration-300 h-full bg-white right-0 top-0 z-50 `}
      >
        <div className="w-full flex justify-end my-5 ">
          <IconClose
            style={{ fontSize: '2rem' }}
            className="mr-2 mt-2"
            onClick={handleClick}
          />
        </div>

        <nav>
          <ul className="flex flex-col flex-wrap content-center  gap-8">
            <li>
              <a
                href={translatePath('/')}
                onClick={handleClick}
                className={`font-bold text-xl tracking-widest text-fuchsia-900 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-300 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                  currentPath === '/' ? `before:scale-x-100` : ``
                }`}
              >
                <span className="relative">{t('nav.home')}</span>
              </a>
            </li>
            <li>
              <a
                href={translatePath('/about')}
                onClick={handleClick}
                className={`font-bold text-xl tracking-widest text-fuchsia-900 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-300 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                  currentPath === '/about' ? `before:scale-x-100` : ``
                }`}
              >
                <span className="relative">{t('nav.about')}</span>
              </a>
            </li>
            <li>
              <a
                href={translatePath('/podcast')}
                onClick={handleClick}
                className={`font-bold text-xl tracking-widest text-fuchsia-900 relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-blue-300 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                  currentPath === '/podcast' ? `before:scale-x-100` : ``
                }`}
              >
                <span className="relative">{t('nav.podcast')}</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-full flex flex-col items-center mt-10">
          <LanguagePicker />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
