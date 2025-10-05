// src/pages/Sobre.jsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Sobre() {
  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/80 backdrop-blur-sm border-border/40 shadow-2xl">
      {/* Header */}
      <CardHeader className="text-center bg-white/5 p-8 border-b border-border/40">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-wider">
          Exoplanet Explorer 🔭
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto pt-2">
          Desvendando os segredos do universo com Inteligência Artificial e paixão pela descoberta.
        </p>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-8 sm:p-12 space-y-10 text-muted-foreground">
        {/* Sobre o Projeto */}
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-4 border-b border-border/40 pb-3">
            Sobre o Projeto: <span className="text-primary">Exoplanet Explorer</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Bem-vindo ao nosso projeto para o <strong className="text-card-foreground">NASA Space Apps Challenge 2025</strong>! Somos um grupo de estudantes de Ciência da Computação e Desenvolvimento de Sistemas, apaixonados pela vastidão do cosmos e pelo poder da tecnologia.
            </p>
            <p>
              Nosso projeto utiliza <strong className="text-card-foreground">Inteligência Artificial</strong> para automatizar e aprimorar a identificação de novos mundos orbitando estrelas distantes.
            </p>
          </div>
        </div>

        {/* Desafio */}
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-4 border-b border-border/40 pb-3">
            O Desafio: Encontrando Agulhas no Palheiro Cósmico
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Telescópios como o Kepler e o TESS geram uma quantidade colossal de dados ao observar o brilho de centenas de milhares de estrelas simultaneamente (método de trânsito).
            </p>
            <p>
              Esses sinais são sutis e podem confundir com ruído/efeitos estelares. Analisar tudo manualmente é inviável — precisamos acelerar sem perder precisão.
            </p>
          </div>
        </div>

        {/* Solução */}
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-4 border-b border-border/40 pb-3">
            Nossa Solução: IA Treinada para Caçar Planetas
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Desenvolvemos um pipeline de Machine Learning para classificar sinais como candidato/confirmado/falso positivo.
            </p>
            <p>Fluxo resumido:</p>
            <ul className="list-disc list-inside space-y-6 pl-4">
              <li>
                <strong className="text-primary">Preparação de Dados:</strong> <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">pandas</code>, <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">StandardScaler</code>, <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">LabelEncoder</code>.
              </li>
              <li>
                <strong className="text-primary">Modelo:</strong> <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">VotingClassifier</code> combinando
                <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-base">
                  <li><code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">LogisticRegression</code></li>
                  <li><code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">KNeighborsClassifier</code></li>
                  <li><code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">RandomForestClassifier</code></li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Validação:</strong> <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">accuracy_score</code>, <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">classification_report</code>, export com <code className="font-mono bg-muted/70 text-muted-foreground px-2 py-1 rounded-md">joblib</code>.
              </li>
            </ul>
          </div>
        </div>

        {/* Quem Somos */}
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-4 border-b border-border/40 pb-3">
            Quem Somos
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Equipe de estudantes curiosos, focados em aplicar IA em problemas reais — e cósmicos.
          </p>
        </div>
      </CardContent>

      {/* Footer */}
      <footer className="text-center p-6 bg-white/5 border-t border-border/40 text-muted-foreground text-sm">
        <p>&copy; 2025 Equipe Exoplanet Explorer - NASA Space Apps Challenge</p>
      </footer>
    </Card>
  )
}
