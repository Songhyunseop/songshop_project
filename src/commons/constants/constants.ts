// signIn Button options
export const loginOption = {
  bgColor: '#e2c2b3',
  fontColor: '#F7F3F5',
  content: '로그인',
  icon: 'none',
  maxHeight: '70px',
};

export const googleLoginOption = {
  bgColor: '#f7f3f5',
  fontColor: '#000000',
  content: 'Google로 로그인',
  icon: 'google',
};

export const naverLoginOption = {
  bgColor: '#2DB400',
  fontColor: '#ffffff',
  content: 'Naver로 로그인',
  icon: 'naver',
};

// select Options

export const sizeOptions = [
  {
    value: 'S',
    label: 'SMALL',
    item: '',
    count: 1,
    isdisabled: false,
    isPickerOpen: false,
  },
  {
    value: 'M',
    label: 'MEDIUM',
    item: '',
    count: 1,
    isdisabled: false,
    isPickerOpen: false,
  },
  {
    value: 'L',
    label: 'LARGE',
    item: '',
    count: 1,
    isdisabled: false,
    isPickerOpen: false,
  },
];

export const countOptions = [
  { label: '1개', value: 1, isdisabled: false },
  { label: '2개', value: 2, isdisabled: false },
  { label: '3개', value: 3, isdisabled: false },
  { label: '4개', value: 4, isdisabled: false },
  { label: '5개', value: 5, isdisabled: false },
  { label: '6개', value: 6, isdisabled: false },
  { label: '7개', value: 7, isdisabled: false },
  { label: '8개', value: 8, isdisabled: false },
  { label: '9개', value: 9, isdisabled: false },
  { label: '10개', value: 10, isdisabled: false },
];

export const CategoryOptions = [
  {
    label: 'OUTERWEAR',
    value: 'OUTERWEAR',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'OUTERWEAR',
        label: 'COAT',
        value: 'COAT',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'OUTERWEAR',
        label: 'JACKET',
        value: 'JACKET',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'OUTERWEAR',
        label: 'JUMPER',
        value: 'JUMPER',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'OUTERWEAR',
        label: 'BLAZER',
        value: 'BLAZER',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
  {
    label: 'TOP',
    value: 'TOP',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'TOP',
        label: 'SHIRT',
        value: 'SHIRT',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'TOP',
        label: 'HOODIE',
        value: 'HOODIE',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
  {
    label: 'BOTTOM',
    value: 'BOTTOM',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'BOTTOM',
        label: 'SHORTS',
        value: 'SHORTS',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'BOTTOM',
        label: 'JEANS',
        value: 'JEANS',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'BOTTOM',
        label: 'SLACKS',
        value: 'SLACKS',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
  {
    label: 'SHOES',
    value: 'SHOES',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'SHOES',
        label: 'SLIPPER',
        value: 'SLIPPER',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'SHOES',
        label: 'SNEAKERS',
        value: 'SNEAKERS',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'SHOES',
        label: 'DRESSSHOES',
        value: 'DRESSSHOES',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
  {
    label: 'BAG',
    value: 'BAG',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'BAG',
        label: 'HANDBAG',
        value: 'HANDBAG',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'BAG',
        label: 'BAGPACK',
        value: 'BAGPACK',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
  {
    label: 'ACC',
    value: 'ACC',
    isdisabled: false,
    name: 'mainCategory',
    subCategory: [
      {
        main: 'ACC',
        label: 'GLASSES',
        value: 'GLASSES',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'ACC',
        label: 'HAT',
        value: 'HAT',
        name: 'subCategory',
        isdisabled: false,
      },
      {
        main: 'ACC',
        label: 'RING',
        value: 'RING',
        name: 'subCategory',
        isdisabled: false,
      },
    ],
  },
];
