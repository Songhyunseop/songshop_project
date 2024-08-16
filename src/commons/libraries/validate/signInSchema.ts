import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  name: yup
    .string()
    .max(5, '이름은 5자 미만으로 입력해주세요')
    .matches(/^[a-zA-Z0-9ㄱ-힣]*$/, '올바르지 않은 형식입니다')
    .required('해당 칸 입력은 필수입니다'),
  nickName: yup
    .string()
    .max(10, '닉네임은 10자 미만으로 입력해주세요')
    .matches(/^[a-zA-Z0-9ㄱ-힣]*$/, '올바르지 않은 형식입니다')
    .required('해당 칸 입력은 필수입니다'),
  email: yup
    .string()
    .matches(
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      '올바르지 않은 이메일 형식입니다'
    )
    .required('해당 칸 입력은 필수입니다'),

  password: yup
    .string()
    .min(8, '최소 8자리 이상 입력해주세요')
    .max(15, '15자리 이하로 입력해주세요')
    .required('해당 칸 입력은 필수입니다')
    .matches(
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
      '비밀번호는 특수문자를 포함해야 합니다'
    ),

  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('해당 칸 입력은 필수입니다'),

  phone: yup
    .array()
    .of(
      yup.object().shape({ num: yup.string().required('번호를 입력하세요') })
    ),

  address: yup.string().required('주소 입력은 필수입니다'),
});

export const uploadProductSchema = yup.object().shape({
  itemName: yup.string().required('상품명을 입력하세요'),
  itemPrice: yup.string().required('가격을 입력하세요'),
  itemDetail: yup.string().required('내용을 입력하세요'),
  previewImages: yup.array().min(1, '이미지는 필수입니다.'),
  category: yup.string().required('카테고리를 입력하세요'),
  subCategory: yup.string().required('카테고리를 입력하세요'),
  stocks: yup
    .array()
    .of(
      yup.object().shape({
        size: yup.string().required('세부정보를 입력하세요'),
        count: yup.string().required('세부정보를 입력하세요'),
        selectColor: yup.array().min(1, '색상을 선택하세요').default([]),
      })
    )
    .test('check-StockLength', '재고를 추가하세요', (val) => {
      return val && val.length > 0;
    }),
});
