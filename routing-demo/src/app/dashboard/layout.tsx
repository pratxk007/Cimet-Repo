//import { log } from 'console'
import React from 'react'
import Login from './@login/page'
// import Login from './@login/page'

function DashboardLayout({children, users, revenue, notifications, login}:{
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode,
}) {
    const isLoggedIn =false
  return isLoggedIn ? (
    <>
    <div>{children}</div>
    <div className='flex'>
        <div className='flex-col flex'>
            <div>{users}</div> 
            <div>{revenue}</div>
        </div>
        <div className='flex-1'>{notifications}</div>
    </div>
    </>
  ) :(
    login
  )
}

export default DashboardLayout