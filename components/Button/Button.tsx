import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.css';
import Arrow from './arrow.svg';
import cn from 'classnames';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className={cn(styles.button, {
          [styles.primary]: appearance === 'primary',
          [styles.ghost]: appearance === 'ghost',
        })}
        {...props}>
        {children}
        {arrow !== 'none' && (
          <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
            <Arrow />
          </span>
        )}
      </button>
    </>
  );
};
