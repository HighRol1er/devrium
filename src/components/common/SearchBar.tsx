import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <>
      <div className="relative flex">
        <Input placeholder="Search" className="pl-10" />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
      </div>
    </>
  );
}
