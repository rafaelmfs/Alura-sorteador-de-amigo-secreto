import { Header } from 'componentes/Header';
import { ConfigPage } from 'Pages/ConfigPage';
// import { Outlet } from 'react-router-dom';

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <ConfigPage />
    </>
  );
};
