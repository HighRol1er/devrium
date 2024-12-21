import { Input } from '@/components/ui/input';

export default function ProfileInput({
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
      <label className="block text-sm font-medium" htmlFor="email">
        {label}
      </label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="mt-1 w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </>
  );
}
