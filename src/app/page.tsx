import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-purple-800 text-white">
        <div className="px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Sharpen your thinking.
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Obsidian is the private and flexible writing app <br />
            that adapts to the way you think.
          </p>
          <div>
            <button className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
              Get Obsidian for Windows
            </button>
            <a
              href="#"
              className="mt-4 block text-purple-300 hover:text-purple-400"
            >
              More platforms
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
