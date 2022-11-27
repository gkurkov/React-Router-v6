import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoggedInSelector } from '../store/authSlice'

function ProtectedRoute({ redirectTo = '/auth/login', element }) {
  const isLoggedIn = useSelector(isLoggedInSelector())
  const location = useLocation()

  if (!isLoggedIn)
    return <Navigate to={redirectTo} state={{ referrer: location }} />
  return element
}
export default ProtectedRoute
