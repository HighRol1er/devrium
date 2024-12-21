import Link from 'next/link';
import AuthButton from '../components/AuthButton';
import AuthInput from '../components/AuthInput';

export default function LoginPage() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-white">
        Sign in to your account
      </h2>
      <form className="mt-4 space-y-2">
        <AuthInput
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <AuthInput
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <div className="mt-1 flex justify-end">
          <Link href="#" className="text-sm text-purple-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <AuthButton text="Sign in" />
      </form>
      <p className="text-center text-sm text-gray-400">
        Don't have an account?
        <Link href="/signup" className="pl-2 text-purple-400 hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
