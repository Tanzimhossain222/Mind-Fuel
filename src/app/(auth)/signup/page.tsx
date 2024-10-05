import React from 'react'
import RegisterLeftSide from './_components/RegisterLeftSide'
import RegisterRightSide from './_components/RegisterRightSide'

const SignUpPage = () => {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-start">
     <RegisterLeftSide />
     <RegisterRightSide />
    </div>
    </>
  )
}

export default SignUpPage