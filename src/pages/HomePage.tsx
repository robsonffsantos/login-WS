import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector'

const Home: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <LanguageSelector />
      <div className="w-full max-w-md m-8 p-8 space-y-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold">
          {t('welcome', { name: user?.name })}
        </h1>
        <p className="text-gray-700">{t('thank_you')}</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('logout')}
        </button>
      </div>
    </div>
  )
}

export default Home
