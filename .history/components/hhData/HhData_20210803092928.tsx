import { hhData } from '../../interfaces/page.interface';

export interface HhDataProps extends hhData {}

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <>
      <div className={styles.hh}>
        <Card className={styles.count}>
          <div className={styles.title}>Всего вакансий</div>
          <div className={styles.countCalue}>{count}</div>
        </Card>
      </div>
    </>
  );
};
