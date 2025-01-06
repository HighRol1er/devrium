import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CategorySelectTrigger() {
  return (
    <>
      <div className="mb-2 flex justify-end">
        {/**NOTE: component 시키기 */}
        <Select
        // value={selectCategory}
        // onValueChange={(value) => setSelectCategory(value)}
        >
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
      </div>
    </>
  );
}
