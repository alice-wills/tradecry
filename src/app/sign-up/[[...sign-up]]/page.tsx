

import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-3">
        <SignUp  />        
        
    </main>
  )
}

export default RegisterPage