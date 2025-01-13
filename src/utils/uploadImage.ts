import { supabase } from '@/lib/supabase';

export const uploadImage = async (file: File) => {
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

  return publicUrlData?.publicUrl || null;
};

export const deleteImage = async (imageUrl: string) => {
  if (imageUrl) {
    const fileName = imageUrl.split('/').pop();

    const { data, error } = await supabase.storage
      .from('post')
      .remove([fileName!]);
    console.log(data);
    if (error) throw error;
    return data;
  }
};
