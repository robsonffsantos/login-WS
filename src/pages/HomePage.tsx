import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div>
      <h2>Home</h2>
      <p>Login realizado com sucesso!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage
