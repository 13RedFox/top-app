import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.css';
import cn from 'classnames';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ ...props }) => {
  return <div {...props}>Header</div>;
};

export default Header;
