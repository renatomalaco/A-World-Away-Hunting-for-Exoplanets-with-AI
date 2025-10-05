import { Outlet, Link, useLocation } from 'react-router-dom';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarTrigger, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './ui/sidebar';
import { LayoutDashboard, FileUp, Info } from 'lucide-react';

function Layout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h1 className="text-xl font-semibold p-2">Exoplanetas</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={location.pathname === '/'}>
                <Link to="/">
                  <LayoutDashboard />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={location.pathname === '/arquivos'}>
                <Link to="/arquivos">
                  <FileUp />
                  Arquivos
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={location.pathname === '/sobre'}>
                <Link to="/sobre">
                  <Info />
                  Sobre
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-4 border-b p-4">
          <SidebarTrigger />
          <h2 className="text-lg font-semibold">
            {getPageTitle(location.pathname)}
          </h2>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

function getPageTitle(pathname) {
  switch (pathname) {
    case '/arquivos':
      return 'Arquivos';
    case '/sobre':
      return 'Sobre';
    default:
      return 'Dashboard';
  }
}

export default Layout;