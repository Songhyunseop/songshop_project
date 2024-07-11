import { atom } from 'recoil';
import {
  CategoryOptions,
  countOptions,
  sizeOptions,
} from '@/commons/constants/constants';

const OptionsData = { sizeOptions, countOptions, CategoryOptions };

export const optionDataState = atom({
  key: 'optionDataState',
  default: OptionsData,
});

export const stocksState = atom({
  key: 'stocksState',
  default: [],
});
