// src/pages/Register.tsx
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const { login } = useAuth();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .matches(/[a-z]/, 'Must contain a lowercase letter')
          .matches(/[A-Z]/, 'Must contain an uppercase letter')
          .matches(/[0-9]/, 'Must contain a number')
          .required('Required'),
      })}
      onSubmit={(values) => {
        login({ name: values.name, email: values.email })
        history.push('/login')
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register
