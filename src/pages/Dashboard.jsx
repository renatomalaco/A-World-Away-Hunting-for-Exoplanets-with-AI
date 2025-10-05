import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simula uma chamada de API para buscar os dados
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData({
        // Dados existentes
        periodoOrbital: '11.86 anos',
        duracaoTransito: '12 horas',
        profundidadeTransito: '1%',
        raioPlanetario: '69,911 km',
        temperaturaEquilibrio: '125 K',
        fluxoInsolacao: '5.05 W/m²',
        // Novos dados para os resultados do modelo ML
        mlResults: {
          confirmado: 8,
          candidato: 15,
          falsoPositivo: 2,
        },
      });
      setLoading(false);
    }, 1500); // Atraso de 1.5s para simular o loading

    return () => clearTimeout(timer);
  }, []);

  // Renderiza o estado de carregamento com skeletons
  if (loading) {
    return (
      <div className="space-y-6">
        {/* Skeletons para os cards existentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
        </div>

        {/* Skeleton para o card do gráfico */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-2/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>

        {/* Skeletons para os novos cards de resultado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-10 w-full" /></CardContent></Card>
        </div>
      </div>
    );
  }

  // Renderiza os dados quando o carregamento estiver completo
  return (
    <div className="space-y-6">
      {/* Cards de dados existentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dados Orbitais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
          <CardContent className="space-y-4">
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
          <CardContent className="space-y-4">
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

      {/* Card para o Gráfico de Acurácia */}
      <Card>
        <CardHeader>
          <CardTitle>Acurácia do Modelo</CardTitle>
          <CardDescription>
            Gráfico gerado pelo Matplotlib representando a curva de luz e a validação do trânsito.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* O ideal é que a imagem do gráfico seja carregada aqui */}
          <div className="flex justify-center items-center h-80 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground">
              [Espaço reservado para o gráfico do Matplotlib]
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cards de Resultados do Modelo ML */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Confirmado</CardTitle>
            <CardDescription>Planetas com alta probabilidade de serem reais.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{data.mlResults.confirmado}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Candidato</CardTitle>
            <CardDescription>Sinais que necessitam de mais análise.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{data.mlResults.candidato}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Falso Positivo</CardTitle>
            <CardDescription>Sinais que foram identificados como não planetários.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{data.mlResults.falsoPositivo}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;

