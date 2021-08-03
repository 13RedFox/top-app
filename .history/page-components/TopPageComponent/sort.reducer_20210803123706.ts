import { SortEnum } from '../../components/Sort/Sort';
import { ProductModel } from '../../interfaces/product.interface';

export type SOrtActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action)
