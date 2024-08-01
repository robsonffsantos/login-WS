import { createContext, useState, useContext, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
}

interface UserData {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const login = (userData: UserData) => {
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData))
  };

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
