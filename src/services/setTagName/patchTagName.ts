import { BASE_URL } from '@/shared/constant/baseUrl';
import { HttpMethod, requestOptions } from '../fetch/requestOption';

export const patchTagName = async (userId: string, tagName: string) => {
  const url = `${BASE_URL}/api/user/${userId}/tagname`;

  const response = await fetch(
    url,
    requestOptions(HttpMethod.PATCH, { tagName })
  );

  if (!response.ok) {
    console.error('Failed to set tag name');
  }

  return response.json();
};
