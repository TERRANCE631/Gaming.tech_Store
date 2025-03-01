import { Navigate } from 'react-router-dom'

export function SecuredRoute({children}) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    
  return token ? children : < Navigate to="/Login" />
}
