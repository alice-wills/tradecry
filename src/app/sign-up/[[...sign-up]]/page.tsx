

import HeadSection from '@/components/register/HeadSection'
import FooterSection from '@/components/service/FooterSection'
import React from 'react'
import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-3">
        <SignUp  className="mt-5"/>        
        {/* <FooterSection/> */}
    </main>
  )
}

export default RegisterPage