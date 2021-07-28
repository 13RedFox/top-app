import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className={cn(styles.button, {
          [styles.primary]: appearance === 'primary',
          [styles.ghost]: appearance === 'ghost',
        })}
        {...props}>
        {children}
      </button>
    </>
  );
};
