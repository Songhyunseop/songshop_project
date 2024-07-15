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

export const countOptionState = atom({
  key: 'countOptionState',
  default: Array.from({ length: 3 }, () => deepCopy([countOptions])[0]),
});

export const stocksState = atom({
  key: 'stocksState',
  default: [],
});
