import { type FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { useTranslatedPath } from '../i18n/utils'

type languagePickerProps = {
  lang: 'cn' | 'en'
  onClick?: () => void
}

const LanguagePicker: FunctionComponent<languagePickerProps> = ({
  lang,
  onClick
}) => {
  const [path, setPath] = useState('')
  const [currentLang, setCurrentLang] = useState(lang)
  const translatePath = useTranslatedPath(lang)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('/en/')) {
      setPath(path.substring(3))
    } else {
      setPath(path)
    }
  }, [])

  useEffect(() => {
    if (shouldRedirect) {
      const translatedUrl = translatePath(path, currentLang)
      window.location.href = translatedUrl
    }
    setShouldRedirect(false)
  }, [shouldRedirect, currentLang, path, translatePath])

  const handleClick = () => {
    const newLang = currentLang === 'cn' ? 'en' : 'cn'
    setCurrentLang(newLang)
    setShouldRedirect(true)
    onClick?.()
  }

  return (
    <div>
      <button
        className='relative grid grid-cols-2 grid-rows-2 w-12'
        onClick={handleClick}
      >
        <span
          className={`inline-block z-10 rounded ${
            currentLang === `cn`
              ? `bg-emerald-500 text-slate-100 text-xl font-extrabold`
              : `bg-slate-50`
          }`}
        >
          中
        </span>
        <span
          className={`inline-block  z-10 rounded row-start-2 col-start-2 ${
            currentLang === `en`
              ? `bg-emerald-500 text-slate-100 text-xl font-extrabold`
              : `bg-slate-50`
          }`}
        >
          A
        </span>
        <span class='absolute block border-2 rounded inset-3'></span>
      </button>
    </div>
  )
}

export default LanguagePicker
