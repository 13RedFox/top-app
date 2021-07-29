import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Ptag.module.css';
import cn from 'classnames';

export interface PtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}

export const Ptag = ({ children, size = 'm', ...props }: PtagProps): JSX.Element => {
  return (
    <>
      <p
        className={cn(styles.text, {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.l]: size === 'l',
        })}
        {...props}>
        {children}
      </p>
    </>
  );
};

export default Ptag;
