import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';

export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return <div></div>;
};
