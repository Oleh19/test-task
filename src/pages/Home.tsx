import { FC } from 'react';
import { Header } from '../components/Header';
import { ItemsBlock } from '../components/ItemsBlock/ItemsBlock';

export const Home: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <ItemsBlock/>
      </div>
    </div>
  );
};
