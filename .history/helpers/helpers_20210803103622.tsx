import CoursesIcon from './icon/courses.svg';
import ServicesIcon from './icon/services.svg';
import BooksIcon from './icon/book.svg';
import ProductsIcon from './icon/product.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number) => priceRu.toString().replace(/\B(?=(\d{3})+(?!\d))/g);
