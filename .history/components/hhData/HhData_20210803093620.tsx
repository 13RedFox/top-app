import React from 'react';
import { hhData } from '../../interfaces/page.interface';
import Card from '../Card/Card';
import styles from './hhData.module.css';

export interface HhDataProps extends hhData {}

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <>
      <div className={styles.hh}>
        <Card className={styles.count}>
          <div className={styles.title}>Всего вакансий</div>
          <div className={styles.countValue}>{count}</div>
        </Card>
        <Card className={styles.salary}>
          <div className={styles.title}>Всего вакансий</div>
          <div className={styles.salaryValue}>{count}</div>
          <div className={styles.salaryRating}>{count}</div>
        </Card>
      </div>
    </>
  );
};
