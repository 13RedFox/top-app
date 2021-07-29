export interface Advantage {
  _id: string;
  title: string;
  description: string;
}

export interface hhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
}
