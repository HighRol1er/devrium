import { useEffect, useRef } from 'react';

interface ObserverParams {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const useObserver = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: ObserverParams) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = (node: HTMLElement | null) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    return () => observer.current?.disconnect(); // cleanup
  }, []);

  return { lastElementRef };
};
