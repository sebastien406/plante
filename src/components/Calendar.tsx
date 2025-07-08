import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Sprout, Droplets, Scissors, Sun, Moon } from 'lucide-react';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const monthlyTasks = {
    0: { // Janvier
      semis: ['Radis sous abri', 'Épinards', 'Laitue d\'hiver'],
      plantations: ['Arbres fruitiers', 'Rosiers'],
      entretien: ['Taille des arbres', 'Protection du froid', 'Planification du jardin'],
      recolte: ['Poireaux', 'Choux', 'Épinards d\'hiver'],
      lunaireAdvice: 'Privilégier les travaux de taille en lune décroissante'
    },
    1: { // Février
      semis: ['Tomates en intérieur', 'Aubergines', 'Poivrons'],
      plantations: ['Échalotes', 'Ail', 'Petits pois'],
      entretien: ['Préparation du sol', 'Nettoyage des outils', 'Taille des rosiers'],
      recolte: ['Endives', 'Mâche', 'Épinards'],
      lunaireAdvice: 'Semer les légumes-feuilles en lune croissante'
    },
    2: { // Mars
      semis: ['Radis', 'Carottes', 'Betteraves', 'Persil'],
      plantations: ['Pommes de terre', 'Oignons', 'Fraisiers'],
      entretien: ['Bêchage', 'Compostage', 'Préparation des planches'],
      recolte: ['Poireaux', 'Derniers légumes d\'hiver'],
      lunaireAdvice: 'Planter les légumes-racines en lune décroissante'
    },
    3: { // Avril
      semis: ['Laitue', 'Épinards', 'Haricots verts'],
      plantations: ['Tomates sous abri', 'Courgettes', 'Concombres'],
      entretien: ['Arrosage régulier', 'Désherbage', 'Paillage'],
      recolte: ['Radis', 'Première laitue', 'Épinards'],
      lunaireAdvice: 'Transplanter les jeunes plants en lune croissante'
    },
    4: { // Mai
      semis: ['Basilic', 'Courges', 'Haricots', 'Tournesols'],
      plantations: ['Tomates en plein air', 'Courgettes', 'Aubergines'],
      entretien: ['Tuteurage', 'Binatge', 'Arrosage copieux'],
      recolte: ['Radis', 'Laitue', 'Épinards', 'Petits pois'],
      lunaireAdvice: 'Planter les légumes-fruits en lune croissante'
    },
    5: { // Juin
      semis: ['Haricots verts', 'Radis', 'Laitue d\'été'],
      plantations: ['Dernières tomates', 'Poireaux'],
      entretien: ['Arrosage quotidien', 'Paillage', 'Traitement bio'],
      recolte: ['Fraises', 'Petits pois', 'Fèves', 'Premières courgettes'],
      lunaireAdvice: 'Récolter les fruits en lune croissante pour une meilleure conservation'
    },
    6: { // Juillet
      semis: ['Radis', 'Mâche', 'Épinards d\'automne'],
      plantations: ['Poireaux', 'Choux d\'hiver'],
      entretien: ['Arrosage le soir', 'Ombrage', 'Récolte continue'],
      recolte: ['Tomates', 'Courgettes', 'Concombres', 'Aubergines'],
      lunaireAdvice: 'Arroser le soir, surtout en lune décroissante'
    },
    7: { // Août
      semis: ['Laitue d\'automne', 'Radis', 'Épinards'],
      plantations: ['Fraisiers', 'Poireaux'],
      entretien: ['Arrosage intensif', 'Récolte et conservation', 'Prévention maladies'],
      recolte: ['Tomates', 'Courgettes', 'Haricots', 'Melons'],
      lunaireAdvice: 'Récolter et conserver en lune décroissante'
    },
    8: { // Septembre
      semis: ['Épinards', 'Mâche', 'Radis d\'hiver'],
      plantations: ['Fraisiers', 'Bulbes de printemps'],
      entretien: ['Nettoyage des parcelles', 'Compostage', 'Préparation d\'hiver'],
      recolte: ['Tomates', 'Courgettes', 'Potirons', 'Haricots'],
      lunaireAdvice: 'Planter les bulbes en lune décroissante'
    },
    9: { // Octobre
      semis: ['Fèves', 'Petits pois d\'hiver'],
      plantations: ['Ail', 'Échalotes', 'Tulipes'],
      entretien: ['Récolte des graines', 'Protection du froid', 'Taille légère'],
      recolte: ['Potirons', 'Courges', 'Choux', 'Poireaux'],
      lunaireAdvice: 'Semer les légumes d\'hiver en lune décroissante'
    },
    10: { // Novembre
      semis: ['Fèves', 'Épinards d\'hiver'],
      plantations: ['Arbres fruitiers', 'Rosiers'],
      entretien: ['Protection hivernale', 'Compostage', 'Nettoyage des outils'],
      recolte: ['Choux', 'Poireaux', 'Épinards', 'Mâche'],
      lunaireAdvice: 'Planter les arbres en lune décroissante'
    },
    11: { // Décembre
      semis: ['Radis sous abri'],
      plantations: ['Arbres à racines nues'],
      entretien: ['Planification', 'Réparation des structures', 'Préparation du printemps'],
      recolte: ['Poireaux', 'Choux', 'Épinards', 'Endives'],
      lunaireAdvice: 'Période de repos, planifier les projets futurs'
    }
  };

  const lunarPhases = [
    { name: 'Nouvelle lune', icon: <div className="w-4 h-4 bg-gray-800 rounded-full"></div>, description: 'Période de repos, idéale pour la planification' },
    { name: 'Premier croissant', icon: <Moon className="w-4 h-4 text-gray-300" />, description: 'Début de croissance, bon pour les semis' },
    { name: 'Pleine lune', icon: <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>, description: 'Énergie maximale, idéale pour la récolte' },
    { name: 'Dernier croissant', icon: <Moon className="w-4 h-4 text-gray-400 rotate-180" />, description: 'Décroissance, bon pour les légumes-racines' }
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const tasks = monthlyTasks[currentMonth as keyof typeof monthlyTasks];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setCurrentDate(newDate);
  };

  const getTaskIcon = (taskType: string) => {
    switch (taskType) {
      case 'semis':
        return <Sprout className="w-5 h-5 text-green-600" />;
      case 'plantations':
        return <div className="w-5 h-5 bg-green-600 rounded-full"></div>;
      case 'entretien':
        return <Scissors className="w-5 h-5 text-blue-600" />;
      case 'recolte':
        return <Sun className="w-5 h-5 text-orange-600" />;
      default:
        return <CalendarIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTaskColor = (taskType: string) => {
    switch (taskType) {
      case 'semis':
        return 'bg-green-50 border-green-200';
      case 'plantations':
        return 'bg-emerald-50 border-emerald-200';
      case 'entretien':
        return 'bg-blue-50 border-blue-200';
      case 'recolte':
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Calendrier de Jardinage 📅
        </h1>
        <p className="text-lg text-gray-600">
          Planifiez vos activités de jardinage selon les saisons et les phases lunaires
        </p>
      </div>

      {/* Month Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900">
            {months[currentMonth]} {currentYear}
          </h2>
          
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tasks for Current Month */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {Object.entries(tasks).map(([taskType, taskList]) => {
          if (taskType === 'lunaireAdvice') return null;
          
          return (
            <div key={taskType} className={`bg-white rounded-xl shadow-sm border ${getTaskColor(taskType)} p-6`}>
              <div className="flex items-center space-x-3 mb-4">
                {getTaskIcon(taskType)}
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                  {taskType === 'semis' ? 'Semis' : 
                   taskType === 'plantations' ? 'Plantations' :
                   taskType === 'entretien' ? 'Entretien' :
                   taskType === 'recolte' ? 'Récolte' : taskType}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {(taskList as string[]).map((task, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Lunar Advice */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Moon className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-purple-900">
            Conseil lunaire du mois
          </h3>
        </div>
        <p className="text-purple-800">{tasks.lunaireAdvice}</p>
      </div>

      {/* Lunar Calendar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Phases lunaires et jardinage
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lunarPhases.map((phase, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-2">
                {phase.icon}
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{phase.name}</h4>
              <p className="text-sm text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Tips */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Conseils régionaux
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Région Nord</h4>
            <p className="text-sm text-blue-800">
              Retarder les semis d'1-2 semaines. Protéger davantage du froid.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Région Centre</h4>
            <p className="text-sm text-green-800">
              Calendrier standard. Adapter selon les microclimats locaux.
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-900 mb-2">Région Sud</h4>
            <p className="text-sm text-orange-800">
              Avancer les semis de 2-3 semaines. Attention aux fortes chaleurs.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-green-900 mb-4">
          Actions rapides
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <CalendarIcon className="w-6 h-6 text-green-600" />
              <span className="font-medium text-green-900">Ajouter un rappel</span>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <Droplets className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-900">Météo locale</span>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-lg shadow-sm border border-orange-200 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <Sun className="w-6 h-6 text-orange-600" />
              <span className="font-medium text-orange-900">Prévisions saisonnières</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};