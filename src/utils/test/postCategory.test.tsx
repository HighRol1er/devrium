import { describe, it, expect } from 'vitest';
import { getCategoryById, getCategoryByName } from '../postCategoryUtil';
import { POST_CATEGORY } from '@/shared/constant/postCategory';

describe('getCategoryById', () => {
  it('Id를 넣으면 해당 카테고리의 ID + 카테고리 Name을 가진 객체 반환', () => {
    const category = getCategoryById(1);
    expect(category).toEqual(POST_CATEGORY.CODERIUM);
  });

  it('에러케이스는 undefined 반환', () => {
    const category = getCategoryById(999);
    expect(category).toBeUndefined();
  });
});

describe('getCategoryByName', () => {
  it('Name을 넣으면 해당 카테고리 Id + 카테고리 Name을 가진 객체 반환'),
    () => {
      const category = getCategoryByName('coderium');
      expect(category).toEqual(POST_CATEGORY.CODERIUM);
    };
  it('에러케이스는 undefined 반환'),
    () => {
      const category = getCategoryByName('something');
      expect(category).toBeUndefined();
    };
});
