import { Header } from 'componentes/Header';
import { Card } from 'componentes/Card';
// import { ConfigPage } from 'Pages/ConfigPage';
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
