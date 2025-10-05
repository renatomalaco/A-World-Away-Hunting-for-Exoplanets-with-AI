// src/components/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Verifique se o caminho está correto

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="container p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;