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
// 이미지 Storage에 업로드 API
// const uploadImgFileToStorage = (file) => {
//   console.log(file);
//   const newId = uuidv4();

//   const { data, error } = supabaseClient.storage
//     .from('images')
//     .upload(`product/${newId}`, file);

//   return { data };
// };

// export const useThis = () => useMutation(uploadImgFileToStorage);
