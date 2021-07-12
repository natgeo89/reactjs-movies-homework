export const getCurrentLang = (): string => {
  const isLSEmpty = !localStorage.getItem('lang');
  if (isLSEmpty) {
    setLangToLS('en');
  }
  const currLang = localStorage.getItem('lang');

  return (typeof currLang === 'string') ? currLang : '';
}

export const setLangToLS = (lang: string): void => {  
  localStorage.setItem('lang', lang)
}