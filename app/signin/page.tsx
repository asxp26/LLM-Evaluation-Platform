import SignInForm from '@/components/sign-in-form'

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <SignInForm />
    </div>
  )
}

