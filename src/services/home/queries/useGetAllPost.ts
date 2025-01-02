import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllPosts } from '../getAllPosts';

export const useGetAllPost = () => {
  return useInfiniteQuery({
    queryKey: ['posts'], //키값을 동적 으로 카테고리 별로
    queryFn: getAllPosts, // 해당 카테고리에 맞는 애들만.
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalCount } = lastPage;
      return currentPage < totalCount ? currentPage + 1 : undefined;
    },
  });
};

// ["questionsPosts"]
// ["coderiumPosts"]
// ["ReferencePosts"]

// 게시물 등록 -> invalidate -> 쿼리 키로

/**
 * 내가 하려는건 게시물을 전체 조회한다. -완료
 * 카테고리라는 필터를 넣고싶다.
 * api 생각해봤을 때 내가 어떤 카테고리를 조회할건데?
 * api에 어떤 카테고리를 넘겨줄지 정해줘야해
 * useGetAllPost에 매개변수(카테고리를 )넘겨준다.
 *
 */
