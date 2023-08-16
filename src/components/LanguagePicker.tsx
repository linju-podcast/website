import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const LanguagePicker: FunctionComponent = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') ?? 'chinese'
  );
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative grid grid-cols-2 grid-rows-2 w-12 ">
      <button className="bg-white z-10 rounded">中</button>
      <button className="row-start-2 col-start-2 bg-white z-10 rounded">
        A
      </button>
      <span className="absolute block border-2 rounded inset-3"></span>
    </div>
  );
};

export default LanguagePicker;
