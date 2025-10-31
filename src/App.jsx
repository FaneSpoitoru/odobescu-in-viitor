import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_page'; 
import CapsulaTimpului from './pages/capsula_timpului';
import Pareri from './pages/pareri';
import LiceulInTimp from './pages/liceulintimp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/capsula-timpului" element={<CapsulaTimpului />} />
      <Route path="/pareri" element={<Pareri/>} />
      <Route path="/liceul-de-a-lungul-timpului" element={<LiceulInTimp />} />
    </Routes>
  );
}

export default App;
