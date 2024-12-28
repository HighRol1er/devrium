import { LeftSidebarMenu } from './LeftSidebarMenu';

export default function LeftSidebar() {
  return (
    <div className="hidden h-full max-h-screen border-r bg-muted/40 md:block">
      <div className="mt-3 border-b px-2 lg:px-4">
        <LeftSidebarMenu />
      </div>
    </div>
  );
}
