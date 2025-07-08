import React, { useState } from 'react';
import { Camera, Upload, Search, AlertCircle, CheckCircle, Leaf, Bug } from 'lucide-react';

export const PlantScanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    if (!selectedImage) return;
    
    setIsScanning(true);
    
    // Simulation d'un scan IA
    setTimeout(() => {
      setScanResult({
        plantName: 'Monstera Deliciosa',
        commonName: 'Plante du fromager',
        confidence: 94,
        care: {
          watering: 'Une fois par semaine',
          light: 'Lumière indirecte',
          humidity: '40-50%',
          temperature: '18-26°C'
        },
        problems: [
          {
            type: 'Carence en nutriments',
            severity: 'Modérée',
            solution: 'Fertiliser avec un engrais équilibré'
          }
        ]
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Scanner de Plantes IA
        </h1>
        <p className="text-lg text-gray-600">
          Identifiez vos plantes et diagnostiquez leurs problèmes en quelques secondes
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          {/* Upload Section */}
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
              {selectedImage ? (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Plante à scanner"
                    className="max-w-xs mx-auto rounded-lg shadow-md"
                  />
                  <div className="flex justify-center space-x-4">
                    <label className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                      <Upload className="w-4 h-4 inline mr-2" />
                      Changer d'image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={handleScan}
                      disabled={isScanning}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isScanning ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Analyse en cours...
                        </div>
                      ) : (
                        <>
                          <Search className="w-4 h-4 inline mr-2" />
                          Analyser la plante
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Camera className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Téléchargez une photo de votre plante
                    </p>
                    <p className="text-gray-600 mb-4">
                      Formats acceptés: JPG, PNG, WEBP (max 10MB)
                    </p>
                    <label className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer inline-flex items-center">
                      <Upload className="w-5 h-5 mr-2" />
                      Choisir une image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          {scanResult && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-900">
                    Identification réussie ({scanResult.confidence}% de confiance)
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Informations</h4>
                    <ul className="space-y-1 text-green-800">
                      <li><strong>Nom scientifique:</strong> {scanResult.plantName}</li>
                      <li><strong>Nom commun:</strong> {scanResult.commonName}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Soins requis</h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li><strong>Arrosage:</strong> {scanResult.care.watering}</li>
                      <li><strong>Lumière:</strong> {scanResult.care.light}</li>
                      <li><strong>Humidité:</strong> {scanResult.care.humidity}</li>
                      <li><strong>Température:</strong> {scanResult.care.temperature}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {scanResult.problems.length > 0 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-orange-900">
                      Problèmes détectés
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {scanResult.problems.map((problem: any, index: number) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-orange-200">
                        <div className="flex items-start space-x-3">
                          <Bug className="w-5 h-5 text-orange-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-orange-900">{problem.type}</h4>
                            <p className="text-sm text-orange-700 mb-2">
                              Sévérité: {problem.severity}
                            </p>
                            <p className="text-sm text-orange-800">
                              <strong>Solution:</strong> {problem.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Conseils pour de meilleurs résultats
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-900">Photo claire</h4>
              <p className="text-sm text-green-700">
                Prenez la photo en pleine lumière naturelle
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Camera className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-900">Angle optimal</h4>
              <p className="text-sm text-green-700">
                Cadrez bien les feuilles et évitez les reflets
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Search className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-900">Détails visibles</h4>
              <p className="text-sm text-green-700">
                Incluez les détails caractéristiques de la plante
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};