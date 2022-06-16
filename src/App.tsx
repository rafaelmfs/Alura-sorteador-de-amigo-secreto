import { DefaultPage } from 'componentes/DefaultPage';
import { ConfigPage } from 'Pages/ConfigPage';
import { SortitionPage } from 'Pages/SortitionPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<ConfigPage />} />
            <Route path="/sortition" element={<SortitionPage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
