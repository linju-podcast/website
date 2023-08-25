import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { language } from '../i18n/ui';
import { useTranslatedPath } from '../i18n/utils';

type languagePickerProps = {
  lang: 'cn' | 'en';
};

const LanguagePicker: FunctionComponent<languagePickerProps> = ({ lang }) => {
  const translatePath = useTranslatedPath(lang);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <ul class="relative grid grid-cols-2 grid-rows-2 w-12">
      {Object.entries(language).map(([lang, label]) => (
        <li
          class={`bg-slate-50 z-10 rounded ${
            lang === 'en' && `row-start-2 col-start-2`
          }`}
        >
          <a href={translatePath(currentPath, lang)}>
            <span class="flex justify-center hover:text-emerald-500">
              {label}
            </span>
          </a>
        </li>
      ))}
      <span class="absolute block border-2 rounded inset-3"></span>
    </ul>
  );
};

export default LanguagePicker;
