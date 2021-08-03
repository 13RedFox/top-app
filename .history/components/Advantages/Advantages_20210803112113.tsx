import { TopPageAdvantage } from '../../interfaces/page.interface';
import styles from './Advantages.module.css';

export interface AdvantagesProps {
  advantages: TopPageAdvantage[];
}

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}></div>
      ))}
    </>
  );
};
