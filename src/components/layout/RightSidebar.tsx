export default function RightSidebar() {
  return (
    <div className="hidden h-[300px] max-h-screen border-b border-l bg-muted/40 md:block">
      <div className="mt-3 border-b px-2 lg:px-4">
        {/* Right Sidebar 메뉴 또는 콘텐츠 추가 */}
        <p>NPM trends</p>
      </div>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
      </ul>
    </div>
  );
}
