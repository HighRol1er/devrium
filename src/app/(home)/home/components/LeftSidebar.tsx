import { LeftSidebarMenu } from './LeftSidebarMenu';

export default function LeftSidebar() {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div>
            <nav className="mt-3 grid items-start px-2 lg:px-4">
              <LeftSidebarMenu />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
