import React from 'react'

const I18N_STORAGE_KEY = 'i18nextLng'
const LanguageSelect = () => {
  const [language, setLanguage] = React.useState(window.localStorage.getItem(I18N_STORAGE_KEY))
  const handleLanguageChange = (event) => {
    window.localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
    setLanguage(event.target.value)
    window.location.reload()
  }

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="pt-BR">PT</option>
      <option value="en-US">EN</option>
    </select>
  )
}

export default LanguageSelect
