import { Card, Tag, Title } from '../../components';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import styles from './TopPageComponent.module.css';

interface TopPageComponentsProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && (
          <Tag color="grey" size="s">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <Title tag="h2">Вакансии - {page.category}</Title>

        <Tag color="red" size="s">
          hh.ru
        </Tag>
      </div>
      <div className={styles.hh}>
        <Card className={styles.hhCount}>
          <div className={styles.hhStatTitle}>Всего вакансий</div>
          <div className={styles.hhStatCount}>{page.hh.count}</div>
        </Card>
      </div>
    </div>
  );
};
