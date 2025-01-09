import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CategorySelectTriggerProps {
  value: string;
  onValueChange: (value: string) => void;
}

const CategorySelectTrigger: React.FC<CategorySelectTriggerProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Coderium</SelectItem>
          <SelectItem value="2">Question</SelectItem>
          <SelectItem value="3">Crew</SelectItem>
          <SelectItem value="4">Reference</SelectItem>
          <SelectItem value="5">Meme</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelectTrigger;
