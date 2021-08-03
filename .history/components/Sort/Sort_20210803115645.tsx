import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
}

export enum SortEnum {
  Rating,
  Price,
}
export const Sort = ({}: SortProps): JSX.Element => {
  return <></>;
};
