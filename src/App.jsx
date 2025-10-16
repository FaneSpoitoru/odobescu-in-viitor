import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_page'; 
import CapsulaTimpului from './pages/capsula_timpului';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/capsula-timpului" element={<CapsulaTimpului />} />
    </Routes>
  );
}

export default App;
