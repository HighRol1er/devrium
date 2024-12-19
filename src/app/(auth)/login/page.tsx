import Link from 'next/link';
import AuthButton from '../components/AuthButton';
import AuthInput from '../components/AuthInput';

export default function LoginPage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-white">
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
        <div className="flex justify-end mt-1">
          <Link href="#" className="text-sm text-purple-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <AuthButton text="Sign in" />
      </form>
      <p className="text-sm text-center text-gray-400">
        Don't have an account?
        <Link href="/signup" className="text-purple-400 hover:underline pl-2">
          Create an account
        </Link>
      </p>
    </>
  );
}
