// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Usando o novo Layout
import LandingPage from './pages/LandingPage'; 
import Sobre from './pages/Sobre';
import Analise from './pages/Analise';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default App;
