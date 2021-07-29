import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({ ...props }) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
