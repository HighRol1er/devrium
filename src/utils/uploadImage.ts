import { supabase } from '@/lib/supabase';

// 이미지 업로드 함수 (Supabase 사용)
const uploadImage = async (file: File) => {
  const filePath = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from('post') // 이미지 버킷
    .upload(filePath, file);

  if (error) {
    console.error('업로드 실패:', error.message);
    return null;
  }
  // Public URL 생성
  const { data: publicUrlData } = supabase.storage
    .from('post')
    .getPublicUrl(filePath);

  if (publicUrlData.publicUrl) {
    return publicUrlData.publicUrl;
  } else {
    console.error('Public URL 생성 실패');
    return null;
  }
};

// 이미지를 마크다운 형식으로 추가하는 함수
// const insertImageUrl = (url) => {
//   setMarkdown((prev) => prev + `\n![image](${url})`);
//   setPreview(url); // 이미지 URL을 미리보기로 설정
// };

// 드래그 앤 드롭 이벤트 처리
export const handleFileDrop = async (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  console.log(file);
  if (file && file.type.startsWith('image/')) {
    // 파일을 Supabase에 업로드하고 URL을 받아오기
    const uploadedUrl = await uploadImage(file);
    // if (uploadedUrl) {
    //   insertImageUrl(uploadedUrl); // Supabase에서 반환된 이미지 URL 삽입
    // }
    return uploadedUrl;
  }
};
