// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Orbit, BarChart } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <section
        className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat rounded-lg flex flex-col justify-center items-center text-white relative"
        style={{ backgroundImage: `url('/image_bdf04c.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-lg" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Caça a Exoplanetas com Inteligência Artificial
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
            Utilize um modelo de Machine Learning para classificar candidatos a exoplanetas a partir de dados da NASA.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/analise">Começar a Análise <Rocket className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-3xl font-bold tracking-tight">O que são Exoplanetas?</h2>
        <p className="mt-4 text-muted-foreground">
          Exoplanetas são planetas que orbitam estrelas fora do nosso Sistema Solar. A busca por eles nos ajuda a entender a formação de sistemas planetários e a procurar por sinais de vida no universo. Este projeto aplica técnicas de IA para automatizar e otimizar essa busca.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Detecção por Trânsito</CardTitle>
              <Orbit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {/* --- ALTERAÇÃO AQUI --- */}
              <p className="text-sm text-muted-foreground">
                Mede a diminuição do brilho de uma estrela quando um planeta passa à sua frente, a principal técnica usada nos dados do Kepler.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Modelo Preditivo</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {/* --- ALTERAÇÃO AQUI --- */}
              <p className="text-sm text-muted-foreground">
                Nosso sistema usa um classificador treinado para distinguir entre "Candidato", "Confirmado" e "Falso Positivo".
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Flask</CardTitle>
              <Rocket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {/* --- ALTERAÇÃO AQUI --- */}
              <p className="text-sm text-muted-foreground">
                A interface se comunica com um backend Python (Flask) que executa o modelo de IA e retorna as predições em tempo real.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;