import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Ptag, Rating, Tag, Title } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Title tag="h1">Some title</Title>
      <Button appearance="primary" arrow="right">
        Primary
      </Button>
      <Button appearance="ghost" arrow="down">
        Ghost
      </Button>
      <Ptag size="s">Large</Ptag>
      <Ptag>Large</Ptag>
      <Ptag size="l">Large</Ptag>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="m" color="primary">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find');
  return {
    props: {},
  };
};
