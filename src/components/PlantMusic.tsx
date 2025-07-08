import React, { useState } from 'react';
import { Music, Play, Pause, Volume2, Leaf, Brain, Waves, Users } from 'lucide-react';

export const PlantMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const musicTracks = [
    {
      id: 1,
      title: 'Fréquences de Croissance',
      artist: 'Dr. Plant Research',
      duration: '15:32',
      frequency: '528 Hz',
      description: 'Fréquence de guérison et de croissance, parfaite pour stimuler la photosynthèse'
    },
    {
      id: 2,
      title: 'Symphonie Verte',
      artist: 'Nature Sounds Collective',
      duration: '22:15',
      frequency: '432 Hz',
      description: 'Musique harmonique basée sur la fréquence naturelle de la Terre'
    },
    {
      id: 3,
      title: 'Chant des Chlorophylles',
      artist: 'Botanical Harmonics',
      duration: '18:45',
      frequency: '396 Hz',
      description: 'Fréquence libératrice favorisant la détoxification des plantes'
    },
    {
      id: 4,
      title: 'Résonance Racinaire',
      artist: 'Underground Vibrations',
      duration: '25:20',
      frequency: '174 Hz',
      description: 'Basses fréquences pour stimuler le développement racinaire'
    }
  ];

  const studies = [
    {
      title: 'Université de Corée du Sud (2015)',
      finding: 'Augmentation de 20% de la croissance avec de la musique classique',
      detail: 'Les plantes exposées à Mozart et Vivaldi ont montré une croissance significativement plus rapide'
    },
    {
      title: 'Royal Horticultural Society (2009)',
      finding: 'Les plantes "préfèrent" les voix féminines',
      detail: 'Étude sur 10 ans montrant une meilleure réponse aux fréquences plus hautes'
    },
    {
      title: 'Université de Californie (2018)',
      finding: 'Les fréquences 1000-6000 Hz stimulent la photosynthèse',
      detail: 'Recherche sur l\'impact des vibrations sonores sur l\'activité chlorophyllienne'
    }
  ];

  const tips = [
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: 'Musique classique',
      description: 'Mozart, Bach et Vivaldi sont particulièrement efficaces pour la croissance'
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-500" />,
      title: 'Fréquences spécifiques',
      description: 'Les fréquences entre 1000-6000 Hz semblent optimales pour la photosynthèse'
    },
    {
      icon: <Volume2 className="w-8 h-8 text-green-500" />,
      title: 'Volume modéré',
      description: 'Un volume de 70-80 dB est recommandé, évitez les sons trop forts'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Interaction humaine',
      description: 'Parler à vos plantes peut aussi avoir un effet positif grâce aux vibrations'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          La Musique des Plantes 🎵
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez comment les sons et la musique peuvent influencer la croissance de vos plantes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">
              🌱 Les plantes ont-elles une oreille musicale ?
            </h2>
            <p className="text-purple-100 mb-6">
              Des études scientifiques récentes suggèrent que certaines fréquences sonores peuvent stimuler 
              la croissance des plantes, améliorer leur photosynthèse et renforcer leur système immunitaire.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Commencer l'expérience
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <Music className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Playlist spécialisée pour plantes
        </h3>
        
        <div className="space-y-4">
          {musicTracks.map((track, index) => (
            <div 
              key={track.id} 
              className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                currentTrack === index 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setCurrentTrack(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      currentTrack === index && isPlaying
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white'
                    }`}
                  >
                    {currentTrack === index && isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">{track.title}</h4>
                    <p className="text-sm text-gray-600">{track.artist}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-purple-600">{track.frequency}</div>
                  <div className="text-sm text-gray-500">{track.duration}</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-2 pl-16">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scientific Studies */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Recherches scientifiques
          </h3>
        </div>
        
        <div className="space-y-4">
          {studies.map((study, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-1">{study.title}</h4>
              <p className="text-blue-700 mb-2">{study.finding}</p>
              <p className="text-sm text-gray-600">{study.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex justify-center mb-4">
              {tip.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
            <p className="text-sm text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-semibold text-green-900 mb-6 text-center">
          Comment ça marche ?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-medium text-green-900 mb-2">Vibrations sonores</h4>
            <p className="text-sm text-green-700">
              Les ondes sonores créent des vibrations qui stimulent les stomates des feuilles
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-medium text-green-900 mb-2">Photosynthèse</h4>
            <p className="text-sm text-green-700">
              L'augmentation de l'activité des stomates améliore l'absorption de CO2
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-medium text-green-900 mb-2">Croissance</h4>
            <p className="text-sm text-green-700">
              Une meilleure photosynthèse favorise une croissance plus rapide et plus saine
            </p>
          </div>
        </div>
      </div>

      {/* Experiment Guide */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Expérimentez chez vous !
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Matériel nécessaire</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2 plantes identiques (même espèce, même âge)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Haut-parleur ou enceinte Bluetooth</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Playlist de musique classique</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Appareil photo pour documenter</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Protocole</h4>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">1</span>
                <span>Placez les plantes dans des conditions identiques</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">2</span>
                <span>Exposez une plante à 3h de musique classique par jour</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">3</span>
                <span>Gardez l'autre plante comme témoin (sans musique)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">4</span>
                <span>Observez et photographiez l'évolution sur 30 jours</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Astuce :</strong> Partagez vos résultats avec la communauté GreenThumb ! 
            Vos observations contribuent à l'avancement de nos connaissances sur l\'influence de la musique sur les plantes.
          </p>
        </div>
      </div>
    </div>
  );
};