import React from 'react'
// Librares
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
// elements
import Card from '../components/Card'
// Store
import { isLoggedInSelector } from '../store/authSlice'
import { Navigate } from 'react-router-dom'

const AuthLayout = () => {
  // let { path } = useRouteMatch();
  const isLoggedIn = useSelector(isLoggedInSelector())

  if (isLoggedIn) {
      return <Navigate to='/' />;
  }

  return (
    <div className='flex grow flex-col justify-center items-center  dark:text-slate-200 '>
      <Card>
        <Outlet />
      </Card>
    </div>
  )
}

export default AuthLayout
