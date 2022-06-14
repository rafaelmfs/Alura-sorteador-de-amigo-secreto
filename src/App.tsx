import { Form } from 'componentes/Form';
import { Header } from 'componentes/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
