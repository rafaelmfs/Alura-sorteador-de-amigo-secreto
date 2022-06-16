import { Card } from 'componentes/Card';
import { Header } from 'componentes/Header';
import { Outlet } from 'react-router-dom';

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <Card>
        <Outlet />
      </Card>
    </>
  );
};
