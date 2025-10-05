import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

function Arquivos() {
  return (
    <div className="flex justify-center items-start">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Exoplanetas</CardTitle>
          <CardDescription>
            Baixe o modelo, preencha e envie para processar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline">Baixar CSV</Button>
            <Button variant="outline">Baixar Excel</Button>
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