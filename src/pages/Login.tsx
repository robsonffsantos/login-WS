// src/pages/Login.tsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Recuperar os dados do usuário do local storage
      const user = localStorage.getItem('user');
      if (user) {
        const storedUser = JSON.parse(user);
        // Verificar se os dados fornecidos correspondem aos dados armazenados
        if (
          values.email === storedUser.email &&
          values.password === storedUser.password
        ) {
          // Redirecionar para a página inicial após o login
          navigate('/home');
        } else {
          setError('Invalid email or password');
        }
      } else {
        setError('No user found. Please register.');
      }
    },
  });

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
      <button onClick={handleRegisterRedirect}>Create an account</button>
    </div>
  );
};

export default LoginPage;

