'use client';

import { useState, useEffect, FormEvent } from 'react';

const fetchCreatePost = async (
  title: string,
  content: string,
  categoryId: number
) => {
  const response = await fetch('http://localhost:3000/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`, // 토큰이 필요한 경우 헤더에 포함시킬 수 있습니다.
    },
    body: JSON.stringify({
      title,
      content,
      categoryId,
    }),
  });
  const data = await response.json();
  console.log(data);
};

export default function QuestionPage() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const categoryId = 1;
  console.log(title, content);

  const onSubmitCreatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetchCreatePost(title, content, categoryId);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitCreatePost}>
        <input
          className="bg-red-100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="bg-green-100"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </>
  );
}
