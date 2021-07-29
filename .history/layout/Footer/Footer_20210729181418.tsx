import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};

export default Footer;
