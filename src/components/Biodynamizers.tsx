import React, { useState } from 'react';
import { Zap, Compass, Waves, Moon, Sun, Star, Info, ShoppingCart } from 'lucide-react';

export const Biodynamizers: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const biodynamizers = [
    {
      id: 1,
      name: 'Spirale de Cuivre Simple',
      price: '15-25€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spirale basique en cuivre pur pour harmoniser l\'énergie tellurique',
      benefits: [
        'Améliore la structure du sol',
        'Favorise l\'enracinement',
        'Renforce la vitalité des plantes'
      ],
      usage: 'Enterrer à 20-30cm près des racines',
      material: 'Cuivre pur 99.9%'
    },
    {
      id: 2,
      name: 'Antenne de Lecher',
      price: '80-120€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Outil de détection des énergies subtiles pour optimiser l\'emplacement',
      benefits: [
        'Détecte les veines d\'eau',
        'Localise les nœuds géobiologiques',
        'Optimise l\'implantation des cultures'
      ],
      usage: 'Prospection et analyse énergétique du terrain',
      material: 'Laiton et cuivre'
    },
    {
      id: 3,
      name: 'Dynamiseur Vortex',
      price: '200-400€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Appareil pour dynamiser l\'eau d\'arrosage selon les principes de Viktor Schauberger',
      benefits: [
        'Restructure l\'eau',
        'Améliore l\'absorption nutritive',
        'Augmente la vitalité des plantes'
      ],
      usage: 'Traitement de l\'eau avant arrosage',
      material: 'Cuivre et verre borosilicaté'
    },
    {
      id: 4,
      name: 'Pyramide Énergétique',
      price: '50-100€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pyramide aux proportions de Khéops pour concentrer l\'énergie cosmique',
      benefits: [
        'Concentre l\'énergie cosmique',
        'Accélère la germination',
        'Protège des influences négatives'
      ],
      usage: 'Placement au centre du jardin ou de la serre',
      material: 'Cuivre ou laiton'
    },
    {
      id: 5,
      name: 'Oscillateur à Ondes de Forme',
      price: '30-60€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Émetteur d\'ondes de forme pour harmoniser l\'environnement',
      benefits: [
        'Harmonise les énergies',
        'Réduit le stress des plantes',
        'Améliore la qualité du sol'
      ],
      usage: 'Installation fixe dans le jardin',
      material: 'Métal et cristaux'
    },
    {
      id: 6,
      name: 'Électrode Tellurique',
      price: '40-80€',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Électrode pour capter et diffuser les énergies telluriques',
      benefits: [
        'Capte l\'énergie tellurique',
        'Revitalise les sols fatigués',
        'Stimule la croissance racinaire'
      ],
      usage: 'Enfouissement profond dans le sol',
      material: 'Acier inoxydable et cuivre'
    }
  ];

  const principles = [
    {
      icon: <Compass className="w-8 h-8 text-blue-500" />,
      title: 'Géobiologie',
      description: 'Étude des influences du sous-sol sur le vivant, veines d\'eau, réseaux telluriques'
    },
    {
      icon: <Waves className="w-8 h-8 text-green-500" />,
      title: 'Ondes de forme',
      description: 'Émission d\'énergies subtiles par les formes géométriques spécifiques'
    },
    {
      icon: <Moon className="w-8 h-8 text-purple-500" />,
      title: 'Influences cosmiques',
      description: 'Prise en compte des cycles lunaires et planétaires sur la croissance'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Énergies subtiles',
      description: 'Utilisation des énergies non mesurables par la science conventionnelle'
    }
  ];

  const testimonials = [
    {
      name: 'Pierre M.',
      location: 'Provence',
      text: 'Depuis que j\'ai installé des spirales de cuivre dans mon potager, mes tomates sont plus résistantes aux maladies.',
      rating: 5
    },
    {
      name: 'Marie L.',
      location: 'Bretagne',
      text: 'Le dynamiseur vortex a vraiment amélioré la qualité de mes légumes. Mes clients le remarquent !',
      rating: 4
    },
    {
      name: 'Jean-Claude R.',
      location: 'Alsace',
      text: 'J\'étais sceptique au début, mais les résultats sur ma vigne sont impressionnants depuis 3 ans.',
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Les Biodynamiseurs ⚡
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez les outils de l'agriculture biodynamique pour harmoniser votre jardin
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">
              ⚡ Qu'est-ce que la biodynamie ?
            </h2>
            <p className="text-blue-100 mb-6">
              La biodynamie est une approche holistique de l'agriculture qui considère la ferme comme un 
              organisme vivant en interaction avec les forces cosmiques et telluriques. Les biodynamiseurs 
              sont des outils conçus pour capter, harmoniser et diffuser ces énergies subtiles.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Découvrir les principes
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {principles.map((principle, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex justify-center mb-4">
              {principle.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
            <p className="text-sm text-gray-600">{principle.description}</p>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Catalogue des Biodynamiseurs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biodynamizers.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Bienfaits :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                      className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                    >
                      <Info className="w-4 h-4" />
                      <span className="text-sm">Détails</span>
                    </button>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">Commander</span>
                    </button>
                  </div>
                </div>
                
                {selectedProduct === product.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Utilisation :</h4>
                      <p className="text-sm text-gray-600">{product.usage}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Matériau :</h4>
                      <p className="text-sm text-gray-600">{product.material}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Tous les bienfaits :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIY Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Fabriquer ses propres biodynamiseurs
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Spirale de cuivre simple</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Matériel :</strong> Fil de cuivre pur 2mm, pince</p>
              <p><strong>Étapes :</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Couper 1 mètre de fil de cuivre</li>
                <li>Former une spirale de 10cm de diamètre</li>
                <li>Laisser 20cm de fil droit pour l'enfouissement</li>
                <li>Enterrer à 30cm près des racines</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Antenne énergétique</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Matériel :</strong> Tige de cuivre, cristal de quartz</p>
              <p><strong>Étapes :</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Fixer le cristal au sommet de la tige</li>
                <li>Orienter vers le nord magnétique</li>
                <li>Planter au centre du jardin</li>
                <li>Laisser dépasser de 50cm du sol</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Attention :</strong> Ces techniques relèvent de l'expérimentation personnelle. 
            Les résultats peuvent varier selon les conditions et les individus.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-semibold text-green-900 mb-6 text-center">
          Témoignages d'utilisateurs
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sm">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scientific Perspective */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Perspective scientifique
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Arguments en faveur</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Certaines études montrent des améliorations mesurables</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Témoignages d'agriculteurs sur plusieurs générations</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Effets possibles sur la structure du sol</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Limites et controverses</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Manque de preuves scientifiques reproductibles</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Difficultés de mesure des "énergies subtiles"</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Risque d'effet placebo chez l'utilisateur</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Notre position :</strong> GreenThumb présente ces outils à titre informatif. 
            Nous encourageons l'expérimentation personnelle tout en gardant un esprit critique et 
            en privilégiant les pratiques agricoles éprouvées.
          </p>
        </div>
      </div>
    </div>
  );
};