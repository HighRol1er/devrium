import Link from 'next/link';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';

import { useMutation } from '@tanstack/react-query';

// export const useRegisterUser = (0 => {
//   const
// })

export default function Signup() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-white">
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
        <div className="mt-1 flex justify-end">
          <Link href="#" className="text-sm text-purple-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <AuthButton text="Sign in" />
      </form>
      <p className="text-center text-sm text-gray-400">
        Already have an account?
        <Link href="/login" className="pl-2 text-purple-400 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
