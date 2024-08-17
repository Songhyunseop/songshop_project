import { atom } from 'recoil';
import {
  CategoryOptions,
  countOptions,
  sizeOptions,
} from '@/commons/constants/constants';
import { deepCopy } from '@/commons/utils/deepcopy';

const OptionsData = {
  sizeOptions,
  CategoryOptions,
};

export const optionDataState = atom({
  key: 'optionDataState',
  default: OptionsData,
});

// Count Option
export const countOptionState = atom({
  key: 'countOptionState',
  default: Array.from({ length: 3 }, () => deepCopy([countOptions])[0]),
});

// Stocks
export const stocksState = atom({
  key: 'stocksState',
  default: [],
});

// image, files

export const imageUrlState = atom({
  key: 'imageUrlState',
  default: [],
});

export const fileListState = atom({
  key: 'fileListState',
  default: [],
});

//user Info

type UserMetadata = {
  [key: string]: string;
  user_type: string;
};

interface IUser {
  [x: string]: SetStateAction<null>;
  user_metadata: UserMetadata;
}

type atomUser = IUser | null;

export const UserState = atom<atomUser>({
  key: 'userInfoState',
  default: null,
});
