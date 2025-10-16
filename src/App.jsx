import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_page'; 
import CapsulaTimpului from './pages/capsula_timpului';
import Pareri from './pages/pareri';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/capsula-timpului" element={<CapsulaTimpului />} />
      <Route path="/pareri" element={<Pareri/>} />
    </Routes>
  );
}

export default App;
