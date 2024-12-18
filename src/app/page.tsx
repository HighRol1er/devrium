import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-gray-900 to-purple-800 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sharpen your thinking.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Obsidian is the private and flexible writing app <br />
            that adapts to the way you think.
          </p>
          <div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full">
              Get Obsidian for Windows
            </button>
            <a
              href="#"
              className="block mt-4 text-purple-300 hover:text-purple-400"
            >
              More platforms
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
