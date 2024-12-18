import Link from 'next/link';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';

export default function Signup() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-white">
        Create an account
      </h2>
      <form className="mt-4 space-y-2">
        <AuthInput
          label="Full name"
          type="FullName"
          id="FullName"
          placeholder="Enter your Full name"
        />
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
      <p className="text-sm text-center text-gray-400 ">
        Already have an account?
        <Link href="/login" className="text-purple-400 hover:underline pl-2">
          Sign in
        </Link>
      </p>
    </>
  );
}
