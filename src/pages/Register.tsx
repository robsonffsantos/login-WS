import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('name_required')),
      email: Yup.string().email(t('email_invalid')).required(t('email_required')),
      password: Yup.string()
        .min(8, t('password_min_length'))
        .matches(/[A-Z]/, t('password_uppercase'))
        .matches(/[a-z]/, t('password_lowercase'))
        .matches(/\d/, t('password_number'))
        .required(t('password_required')),
    }),
    onSubmit: (values) => {
      localStorage.setItem('user', JSON.stringify(values));
      navigate('/login')
    },
  })

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <LanguageSelector />
      <div className="w-full max-w-md m-8 p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">{t('register')}</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t('name')}
            </label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-sm text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('email')}
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps('password')}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('register')}
          </button>
        </form>
        <button
          onClick={() => navigate('/login')}
          className="w-full px-4 py-2 mt-4 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('back_to_login')}
        </button>
      </div>
    </div>
  )
}

export default RegisterPage
