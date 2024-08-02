// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        onClick={() => handleLanguageChange('pt')}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        PT-BR
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        EN-US
      </button>
    </div>
  );
};

export default LanguageSelector;

