import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}

export const Tag = ({
  children,
  size = 'm',
  color = 'ghost',
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <>
      <div
        className={cn(styles.tag, {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.red]: color === 'red',
          [styles.grey]: color === 'grey',
          [styles.ghost]: color === 'ghost',
          [styles.green]: color === 'green',
          [styles.primary]: color === 'primary',
        })}
        {...props}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </div>
    </>
  );
};

export default Tag;
