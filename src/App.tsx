import { DefaultPage } from 'componentes/DefaultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
