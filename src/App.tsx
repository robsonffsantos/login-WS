import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home">
          {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  )
}

export default App
