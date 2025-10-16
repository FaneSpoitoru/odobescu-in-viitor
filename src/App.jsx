import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_page'; 
import Pareri from "./componente/Pareri";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/pareri" element={<Pareri />} />
    </Routes>
  );
}

export default App;
