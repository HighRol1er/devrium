'use client';
import { useState } from 'react';
import MarkdownPage from './components/MarkdownPage';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function CreatePostPage() {
  const [title, setTitle] = useState();
  const [markdown, setMarkdown] = useState<string>('');
  return (
    <div className="flex h-full w-full p-8">
      {/* Left section */}
      <div className="w-1/2 pr-8">
        <h2 className="mb-4 text-2xl font-semibold">Title</h2>
        <Input
          placeholder="Write your title"
          className="mb-4 w-full border border-gray-300 p-3 focus:outline-none focus:ring-0"
          style={{ outline: 'none', boxShadow: 'none' }}
        />
        <Textarea
          className="mb-4 h-[50vh] w-full rounded-md border border-gray-300 p-3"
          placeholder="Write your 💡 here."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={{ outline: 'none', boxShadow: 'none' }}
        />
        <Button className="w-full rounded-md bg-primary/80 px-4 py-2 font-semibold text-white transition duration-150 hover:bg-primary focus:outline-none">
          Creativity
        </Button>
      </div>

      {/* Right section */}
      <div className="w-1/2 rounded-md border p-5 pl-8 shadow-lg">
        <MarkdownPage markdown={markdown} />
      </div>
    </div>
  );
}
