import { Button } from '@/components/ui/button';
interface AvatarProps {
  imageUrl: string;
}
export default function Avatar({ imageUrl }: AvatarProps) {
  return (
    <Button variant="secondary" size="icon" className="rounded-full">
      <img
        src={imageUrl}
        alt="Profile"
        width={20}
        height={20}
        className="h-full w-full rounded-full"
      />
    </Button>
  );
}
