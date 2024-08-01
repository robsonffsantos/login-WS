import { createContext, useState, useEffect, ReactNode, useContext } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (userData: UserData) => void
  logout: () => void
}

interface UserData {
  name: string
  email: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const { expiry } = JSON.parse(userData)
      if (new Date().getTime() < expiry) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('user')
      }
    }
  }, [])

  const login = (userData: UserData) => {
    const expiry = new Date().getTime() + 86400000
    localStorage.setItem('user', JSON.stringify({ ...userData, expiry }))
    setIsAuthenticated(true)
  };

  const logout = () => {
    localStorage.removeItem('user')
    setIsAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
