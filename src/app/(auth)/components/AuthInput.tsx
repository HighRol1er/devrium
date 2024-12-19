import { Input } from '@/components/ui/input';

export default function AuthInput({
  label,
  type,
  id,
  placeholder,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}) {
  return (
    <>
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="email"
      >
        {label}
      </label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 mt-1 text-gray-100 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </>
  );
}
