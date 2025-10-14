import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_page'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
