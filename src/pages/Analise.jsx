// src/pages/Analise.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, AlertCircle, CheckCircle, BarChart2 } from 'lucide-react';

const Analise = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setPrediction(null);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Por favor, selecione um arquivo CSV.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);
    setError('');
    setPrediction(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Ocorreu um erro ao processar o arquivo.');
      } else {
        setError('Não foi possível conectar ao servidor da API. Verifique se ele está em execução.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const countPredictions = (predictions) => {
    return predictions.reduce((acc, pred) => {
      acc[pred] = (acc[pred] || 0) + 1;
      return acc;
    }, {});
  };

  const predictionCounts = prediction ? countPredictions(prediction.prediction) : {};

  return (
    <div className="flex flex-col items-center gap-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-6 w-6" /> Envie seu Arquivo para Análise
          </CardTitle>
          <CardDescription>
            Selecione um arquivo .csv contendo dados de candidatos a exoplanetas para obter a classificação do modelo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="file" onChange={handleFileChange} accept=".csv" />
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Analisando...' : 'Fazer Predição'}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Card className="w-full max-w-2xl bg-destructive/10 border-destructive">
            <CardHeader className="flex flex-row items-center gap-2 text-destructive">
                <AlertCircle className="h-5 w-5" />
                <CardTitle>Erro na Análise</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{error}</p>
            </CardContent>
        </Card>
      )}

      {prediction && (
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-6 w-6" /> Resultados da Predição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-base"> {/* Texto aumentado aqui */}
              O arquivo foi processado com sucesso. Abaixo está o resumo das classificações encontradas:
            </p>
            <div className="space-y-2">
                {Object.entries(predictionCounts).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 rounded-md bg-muted text-base"> {/* E aqui */}
                        <span className="font-semibold">{key}</span>
                        <span className="font-mono bg-primary/10 text-primary px-2 py-1 rounded-md">{value} ocorrências</span>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Analise;