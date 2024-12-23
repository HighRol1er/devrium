import { validateUser } from '@/app/lib/authSession';
import ButtonGroup from '../components/ButtonGroup';

export async function fetchUser(userId: string) {
  const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

export default async function ProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const session = await validateUser();

  // Next에서 이렇게 써도 되는이유 즉, useEffect를 안써도 되는 이유 뭔지 다시 찾아보기.
  const user = await fetchUser(params.userId);
  console.log('User:', user);
  // const session = await fetchSession();

  return (
    <>
      <div className="flex min-h-screen justify-center gap-4 border-r">
        <div className="w-full border-x bg-muted/40 p-6 shadow-md">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={session?.user?.image as string}
              alt="profile image"
              className="w-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
              <p className="text-sm">@{session?.user.tagName}</p>
            </div>
          </div>
          <div className="ml-4 flex gap-2 text-sm font-semibold opacity-50">
            <div>Follwers 10k</div>
            <div>Follwing 10k</div>
          </div>

          <div className="mb-6 rounded-lg border-b p-4">
            {/**NOTE:여기 컴포넌트로 빼자  */}
            <h2 className="mb-4 text-xl font-semibold">Overview</h2>
            <div className="flex gap-4">
              <ButtonGroup />
            </div>
          </div>
        </div>
        {/* <ProfileSidebar /> */}
      </div>
    </>
  );
}
