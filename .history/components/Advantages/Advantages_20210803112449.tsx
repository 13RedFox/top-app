import { TopPageAdvantage } from '../../interfaces/page.interface';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export interface AdvantagesProps {
  advantages: TopPageAdvantage[];
}

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <div>
            <hr className={styles.vline} />
          </div>
        </div>
      ))}
    </>
  );
};
