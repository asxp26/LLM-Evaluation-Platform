import SignUpForm from '@/components/sign-up-form'

export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <SignUpForm />
    </div>
  )
}
