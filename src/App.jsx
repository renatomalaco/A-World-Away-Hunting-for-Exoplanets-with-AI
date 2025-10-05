// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout'; // Importe o novo layout
import LandingPage from './pages/LandingPage';
import Sobre from './pages/Sobre';
import Analise from './pages/Analise';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} /> {/* Corrigido: Removido aspas extras */}
        <Route path="/analise" element={<Analise />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default App;