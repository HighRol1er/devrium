import { POST_CATEGORY } from '@/shared/constant/postCategory';

// 특정 카테고리 찾기 (필요하면 쓰자)
export function getCategoryById(id: number) {
  return Object.values(POST_CATEGORY).find((category) => category.id === id);
}

export function getCategoryByName(name: string) {
  return Object.values(POST_CATEGORY).find(
    (category) => category.name === name
  );
}

// Ex_
// const category = getCategoryById(1);
// console.log(category); // { id: 1, name: 'coderium' }

// const category = getCategoryByName('coderium');
// console.log(category); // { id: 1, name: 'coderium' }
