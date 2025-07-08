import React, { useState } from 'react';
import { Search, Filter, Leaf, Sun, Droplets, Thermometer, AlertTriangle } from 'lucide-react';

export const PlantLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const plants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      category: 'Plante verte',
      image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Facile',
      light: 'Lumière indirecte',
      watering: '1 fois par semaine',
      temperature: '18-26°C',
      humidity: '40-50%',
      toxic: false,
      description: 'Plante tropicale aux feuilles spectaculaires avec des fenestrations naturelles.'
    },
    {
      id: 2,
      name: 'Basilic',
      category: 'Herbe aromatique',
      image: 'https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Facile',
      light: 'Plein soleil',
      watering: '2-3 fois par semaine',
      temperature: '20-25°C',
      humidity: '30-40%',
      toxic: false,
      description: 'Herbe aromatique indispensable en cuisine méditerranéenne.'
    },
    {
      id: 3,
      name: 'Echeveria',
      category: 'Plante grasse',
      image: 'https://images.pexels.com/photos/459059/pexels-photo-459059.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Très facile',
      light: 'Lumière directe',
      watering: '1 fois toutes les 2 semaines',
      temperature: '15-25°C',
      humidity: '20-30%',
      toxic: false,
      description: 'Succulente aux rosettes parfaites, idéale pour les débutants.'
    },
    {
      id: 4,
      name: 'Ficus Lyrata',
      category: 'Plante verte',
      image: 'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Modérée',
      light: 'Lumière indirecte vive',
      watering: '1 fois par semaine',
      temperature: '18-24°C',
      humidity: '45-55%',
      toxic: true,
      description: 'Arbre d\'intérieur aux grandes feuilles en forme de violon.'
    },
    {
      id: 5,
      name: 'Tomate Cerise',
      category: 'Légume',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Modérée',
      light: 'Plein soleil',
      watering: 'Tous les 2 jours',
      temperature: '18-25°C',
      humidity: '50-60%',
      toxic: false,
      description: 'Variété de tomate produisant de petits fruits savoureux.'
    },
    {
      id: 6,
      name: 'Orchidée Phalaenopsis',
      category: 'Fleur',
      image: 'https://images.pexels.com/photos/1458318/pexels-photo-1458318.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Difficile',
      light: 'Lumière indirecte',
      watering: '1 fois par semaine (bain)',
      temperature: '20-25°C',
      humidity: '60-70%',
      toxic: false,
      description: 'Orchidée élégante aux fleurs durables et spectaculaires.'
    }
  ];

  const categories = ['all', 'Plante verte', 'Herbe aromatique', 'Plante grasse', 'Légume', 'Fleur'];

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Très facile':
        return 'bg-green-100 text-green-800';
      case 'Facile':
        return 'bg-blue-100 text-blue-800';
      case 'Modérée':
        return 'bg-yellow-100 text-yellow-800';
      case 'Difficile':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bibliothèque des Plantes
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez tout ce qu'il faut savoir sur vos plantes préférées
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une plante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Toutes les catégories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
                {plant.toxic && (
                  <div className="flex items-center text-red-600" title="Toxique">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{plant.category}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
                  {plant.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {plant.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-600">{plant.light}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600">{plant.watering}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Thermometer className="w-4 h-4 text-red-500" />
                  <span className="text-gray-600">{plant.temperature}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Voir les détails
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune plante trouvée
          </h3>
          <p className="text-gray-600">
            Essayez de modifier votre recherche ou vos filtres
          </p>
        </div>
      )}

      {/* Statistics */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Statistiques de la bibliothèque
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{plants.length}</div>
            <div className="text-sm text-green-700">Plantes référencées</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {categories.length - 1}
            </div>
            <div className="text-sm text-blue-700">Catégories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {plants.filter(p => p.difficulty === 'Facile' || p.difficulty === 'Très facile').length}
            </div>
            <div className="text-sm text-yellow-700">Plantes faciles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {plants.filter(p => p.toxic).length}
            </div>
            <div className="text-sm text-red-700">Plantes toxiques</div>
          </div>
        </div>
      </div>
    </div>
  );
};