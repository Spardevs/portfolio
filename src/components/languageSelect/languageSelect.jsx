import React from 'react';
import Flag from 'react-flagkit';
import Select from 'react-select';
import './languageSelect.css';

const I18N_STORAGE_KEY = 'i18nextLng';

const options = [
  {
    value: 'pt-BR',
    label: 'PT',
    flag: <Flag country="BR" />,
  },
  {
    value: 'en-US',
    label: 'EN',
    flag: <Flag country="US" />,
  },
];

const LanguageSelect = () => {
  const [language, setLanguage] = React.useState(window.localStorage.getItem(I18N_STORAGE_KEY));

  const handleLanguageChange = (selectedOption) => {
    window.localStorage.setItem(I18N_STORAGE_KEY, selectedOption.value);
    setLanguage(selectedOption.value);
    window.location.reload();
  };

  return (
    <Select
      className="mt-5 text-black shadow-2xl"
      value={options.find(option => option.value === language)}
      onChange={handleLanguageChange}
      options={options}
      getOptionLabel={(option) => (
        <div className="flex items-center w-auto">
          {option.flag}
          <span className="ml-2">{option.label}</span>
        </div>
      )}
      getOptionValue={(option) => option.value}
      formatOptionLabel={(option, { context }) =>
        context === 'value' ? (
          option.flag
        ) : (
          <div className="flex items-center w-full">
            {option.flag}
            <span className="ml-2">{option.label}</span>
          </div>
        )
      }
    />
  );
};

export default LanguageSelect;
