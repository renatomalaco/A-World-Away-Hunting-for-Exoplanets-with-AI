// src/pages/Sobre.jsx
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

function Sobre() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Sobre os Sistemas de Descoberta de Exoplanetas da NASA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-base md:text-lg">
          <p>
            A busca por planetas fora do nosso sistema solar, conhecidos como exoplanetas, é uma das fronteiras mais excitantes da astronomia moderna. A NASA lidera essa exploração com missões espaciais dedicadas, que utilizam tecnologias avançadas para detectar e caracterizar mundos distantes.
          </p>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Telescópio Espacial Kepler</h3>
            <p>
              Lançado em 2009, o Kepler foi pioneiro na caça a exoplanetas usando o método de trânsito. Ele monitorou continuamente o brilho de mais de 150.000 estrelas, procurando por pequenas quedas de luminosidade causadas pela passagem de um planeta em frente à sua estrela. A missão Kepler revolucionou nosso entendimento, revelando que os planetas são mais comuns do que estrelas na nossa galáxia e descobrindo milhares de exoplanetas, incluindo muitos rochosos e de tamanho semelhante à Terra em zonas habitáveis (NASA, 2018).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Transiting Exoplanet Survey Satellite (TESS)</h3>
            <p>
              O TESS, lançado em 2018, é o sucessor do Kepler. Enquanto Kepler focava em uma pequena porção do céu, o TESS escaneia quase todo o céu, observando as estrelas mais brilhantes e próximas da Terra. O objetivo principal do TESS é encontrar exoplanetas que orbitam estrelas próximas, tornando-os alvos ideais para estudos de acompanhamento com telescópios como o James Webb Space Telescope (JWST). Esses estudos podem analisar as atmosferas dos planetas em busca de sinais de vida (Ricker et al., 2015).
            </p>
          </div>
          <p>
            Essas missões fornecem dados cruciais, como o período orbital, raio planetário e duração do trânsito, que são a base para determinar a temperatura, massa e potencial de habitabilidade de novos mundos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sobre;