import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// Cabeçalhos fixos do modelo NASA
const HEADERS = [
  'Not Transit-Like Flag',
  'Stellar Eclipse Flag',
  'Centroid Offset Flag',
  'Ephemeris Match Indicates Contamination Flag',
  'Orbital Period (days)',
  'Transit Duration (hours)',
  'Transit Depth (parts per million)',
  'Planetary Radius (Earth radii)',
  'Equilibrium Temperature (Kelvin)',
  'Insolation Flux [Earth flux]',
  'Transit Signal-to-Noise',
  'Disposition Score'
];

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function Arquivos() {
  const downloadCSV = () => {
    const headerLine = HEADERS.join(',') + '\n';
    downloadBlob(headerLine, 'exoplanetas_modelo.csv', 'text/csv;charset=utf-8;');
  };

  // const downloadExcel = async () => {
  //   try {
  //     const XLSX = await import('xlsx');
  //     const ws = XLSX.utils.aoa_to_sheet([HEADERS]);
  //     const wb = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(wb, ws, 'Dados');
  //     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  //     downloadBlob(
  //       wbout,
  //       'exoplanetas_modelo.xlsx',
  //       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  //     );
  //   } catch (e) {
  //     alert('Para baixar Excel, instale a lib "xlsx": npm i xlsx');
  //   }
  // };

  return (
    <div className="flex justify-center items-start">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Exoplanetas</CardTitle>
          <CardDescription>
            As colunas obrigatórias são:
          </CardDescription>

          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_disposition</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_fpflag_nt</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_fpflag_ss</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_fpflag_co</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_fpflag_ec</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_period</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_duration</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_depth</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_prad</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_teq</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_insol</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_model_snr</span>
            <span className="px-2 py-1 rounded bg-muted text-foreground font-mono">koi_score</span>
          </div>
        </CardHeader>


        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline" onClick={downloadCSV}>
              Baixar CSV
            </Button>
            <div className="relative group">
              <a
                href="/assets/exoplanetas_exemplo.csv" 
                download="exoplanetas_exemplo.csv"
                className="w-8 h-8 flex items-center justify-center rounded-full border text-base font-bold hover:bg-muted transition-colors"
              >
                ?
              </a>
              <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                Caso tenha dúvida de como é o modelo, clique aqui
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="file-upload" className="text-sm font-medium">
              Enviar planilha preenchida (.xlsx ou .csv)
            </label>
            <Input id="file-upload" type="file" />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Processar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Arquivos;
