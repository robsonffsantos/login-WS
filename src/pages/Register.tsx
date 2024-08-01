import { useFormik } from 'formik'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const RegisterPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .matches(/[a-z]/, 'Must contain a lowercase letter')
        .matches(/[A-Z]/, 'Must contain an uppercase letter')
        .matches(/[0-9]/, 'Must contain a number')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // Registrar o usuário e logar
      login({ name: values.name, email: values.email })
      navigate('/login');
    },
  })

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage