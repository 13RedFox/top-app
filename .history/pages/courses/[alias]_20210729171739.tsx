import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';

function Courses({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return <></>;
}

export default withLayout(Courses);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
