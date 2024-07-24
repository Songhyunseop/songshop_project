import supabase from '@/commons/utils/supabase/client';
import { useMutation } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

const supabaseClient = supabase();

// 상품 정보 조회 API
export const getDataList = async () => {
  const { data: productData, error } = await supabaseClient
    .from('product')
    .select('*, users(id,*)');

  return { productData, error };
};
//
//
//
//
//

// 이미지 Storage에 업로드 API
const uploadImgFileToStorage = async (file: File) => {
  const newId = uuidv4();
  const { data, error } = await supabaseClient.storage
    .from('images')
    .upload(`product/${newId}`, file);

  if (error) throw error;

  const { path } = data;

  return { path };
};

// 이미지 업로드 후 storage에서 PublicUrl 반환
const getPublicUrl = async ({ path }) => {
  const { data } = await supabaseClient.storage
    .from('images')
    .getPublicUrl(path);

  const url = data.publicUrl;

  return { url };
};

export const useUploadToStorage = () =>
  useMutation({
    mutationFn: uploadImgFileToStorage,
  });

export const useGetPublicUrl = () => useMutation({ mutationFn: getPublicUrl });
