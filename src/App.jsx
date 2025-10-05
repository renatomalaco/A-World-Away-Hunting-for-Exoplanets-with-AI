import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Arquivos from './pages/Arquivos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/arquivos" element={<Arquivos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default App;