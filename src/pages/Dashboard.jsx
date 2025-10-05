import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simula uma chamada de API
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData({
        periodoOrbital: '11.86 anos',
        duracaoTransito: '12 horas',
        profundidadeTransito: '1%',
        raioPlanetario: '69,911 km',
        temperaturaEquilibrio: '125 K',
        fluxoInsolacao: '5.05 W/m²',
      });
      setLoading(false);
    }, 1500); // Atraso de 1.5s para simular o loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
        <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
        <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Dados Orbitais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <CardDescription>Período Orbital</CardDescription>
            <p className="text-2xl font-bold">{data.periodoOrbital}</p>
          </div>
          <div>
            <CardDescription>Duração do Trânsito</CardDescription>
            <p className="text-2xl font-bold">{data.duracaoTransito}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Propriedades Físicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <CardDescription>Raio Planetário</CardDescription>
            <p className="text-2xl font-bold">{data.raioPlanetario}</p>
          </div>
          <div>
            <CardDescription>Profundidade do Trânsito</CardDescription>
            <p className="text-2xl font-bold">{data.profundidadeTransito}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Condições Estelares</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <CardDescription>Temperatura de Equilíbrio</CardDescription>
            <p className="text-2xl font-bold">{data.temperaturaEquilibrio}</p>
          </div>
          <div>
            <CardDescription>Fluxo de Insolação</CardDescription>
            <p className="text-2xl font-bold">{data.fluxoInsolacao}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;