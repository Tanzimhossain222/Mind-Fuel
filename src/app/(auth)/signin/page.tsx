import React from 'react'
import LoginLeftSide from './_componnets/LoginLeftSide'
import LoginRightSide from './_componnets/LoginRightSide'

const LoginPage = () => {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-start">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
    </>
  )
}

export default LoginPage