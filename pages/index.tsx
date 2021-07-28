import React from 'react';
import { Button, Title } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Title tag="h1">Some title</Title>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
    </div>
  );
}
