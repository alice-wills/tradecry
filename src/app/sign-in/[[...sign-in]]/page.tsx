
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-3">
            <SignIn/>        
            
        </main>
  );
};

export default LoginPage;
