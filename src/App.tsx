import { DefaultPage } from 'componentes/DefaultPage';
import { ConfigPage } from 'Pages/ConfigPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<ConfigPage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
