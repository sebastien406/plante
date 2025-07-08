import React, { useState } from 'react';
import { Search, Heart, Clock, User, ChevronRight, Star } from 'lucide-react';

export const GrandmasTips: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tips = [
    {
      id: 1,
      title: 'Anti-pucerons naturel au savon noir',
      category: 'Nuisibles',
      difficulty: 'Facile',
      time: '5 minutes',
      author: 'Mamie Rose',
      rating: 4.8,
      votes: 245,
      image: 'https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Recette ancestrale pour éliminer les pucerons sans produits chimiques',
      ingredients: ['1 L d\'eau tiède', '2 cuillères à soupe de savon noir', '1 cuillère à café d\'huile d\'olive'],
      instructions: [
        'Mélanger le savon noir dans l\'eau tiède',
        'Ajouter l\'huile d\'olive et bien mélanger',
        'Pulvériser le mélange sur les plantes affectées',
        'Répéter tous les 3 jours jusqu\'à disparition des pucerons'
      ]
    },
    {
      id: 2,
      title: 'Engrais maison aux peaux de banane',
      category: 'Fertilisation',
      difficulty: 'Très facile',
      time: '10 minutes',
      author: 'Grand-père Henri',
      rating: 4.6,
      votes: 189,
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Transformez vos déchets de cuisine en engrais naturel riche en potassium',
      ingredients: ['Peaux de banane', 'Eau', 'Bocal en verre'],
      instructions: [
        'Couper les peaux de banane en petits morceaux',
        'Les faire tremper dans l\'eau pendant 48h',
        'Filtrer le liquide obtenu',
        'Diluer à 50% avec de l\'eau avant utilisation'
      ]
    },
    {
      id: 3,
      title: 'Calendrier lunaire pour les semis',
      category: 'Semis',
      difficulty: 'Modérée',
      time: '15 minutes',
      author: 'Mamie Louise',
      rating: 4.9,
      votes: 312,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Suivez les phases lunaires pour optimiser vos semis selon la tradition',
      ingredients: ['Calendrier lunaire', 'Graines', 'Patience'],
      instructions: [
        'Semer les légumes-feuilles en lune croissante',
        'Privilégier la lune décroissante pour les légumes-racines',
        'Éviter les jours de nœuds lunaires',
        'Noter les résultats pour améliorer les prochaines saisons'
      ]
    },
    {
      id: 4,
      title: 'Compost express en 3 semaines',
      category: 'Compost',
      difficulty: 'Facile',
      time: '30 minutes',
      author: 'Papa Jean',
      rating: 4.7,
      votes: 156,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Méthode accélérée pour obtenir un compost riche rapidement',
      ingredients: ['Déchets verts', 'Déchets bruns', 'Activateur naturel'],
      instructions: [
        'Alterner couches de déchets verts et bruns',
        'Ajouter l\'activateur (ortie ou consoude)',
        'Retourner tous les 3 jours',
        'Maintenir l\'humidité sans excès'
      ]
    },
    {
      id: 5,
      title: 'Répulsif naturel contre les limaces',
      category: 'Nuisibles',
      difficulty: 'Très facile',
      time: '5 minutes',
      author: 'Mamie Berthe',
      rating: 4.4,
      votes: 203,
      image: 'https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Barrière naturelle efficace contre les limaces et escargots',
      ingredients: ['Marc de café', 'Coquilles d\'œufs', 'Cendre de bois'],
      instructions: [
        'Sécher le marc de café au soleil',
        'Écraser finement les coquilles d\'œufs',
        'Mélanger avec la cendre de bois',
        'Saupoudrer autour des plants sensibles'
      ]
    },
    {
      id: 6,
      title: 'Terreau maison pour semis',
      category: 'Préparation',
      difficulty: 'Modérée',
      time: '20 minutes',
      author: 'Grand-mère Odette',
      rating: 4.8,
      votes: 178,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mélange parfait pour des semis vigoureux et en bonne santé',
      ingredients: ['Compost mûr', 'Sable de rivière', 'Terre de jardin', 'Perlite'],
      instructions: [
        'Tamiser le compost pour éliminer les gros morceaux',
        'Mélanger 40% compost, 30% terre, 20% sable, 10% perlite',
        'Stériliser au four à 80°C pendant 1h',
        'Laisser refroidir avant utilisation'
      ]
    }
  ];

  const categories = ['all', 'Nuisibles', 'Fertilisation', 'Semis', 'Compost', 'Préparation'];

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Trucs et Astuces de Grand-mère 👵
        </h1>
        <p className="text-lg text-gray-600">
          Redécouvrez les secrets du jardinage traditionnel transmis de génération en génération
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
                placeholder="Rechercher une astuce..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div>
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

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{tip.category}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                  {tip.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {tip.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tip.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{tip.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">{tip.rating}</span>
                  <span className="text-xs text-gray-500">({tip.votes})</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ingrédients:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tip.ingredients.slice(0, 3).map((ingredient, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Voir la recette complète</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-red-500 hover:text-red-600 transition-colors flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Ajouter aux favoris</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">👵</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune astuce trouvée
          </h3>
          <p className="text-gray-600">
            Essayez de modifier votre recherche ou vos filtres
          </p>
        </div>
      )}

      {/* Quote Section */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">🌱</div>
        <blockquote className="text-lg text-green-800 italic mb-4">
          "Un jardin, c'est comme une recette : il faut de l'amour, de la patience et les bons ingrédients. 
          Nos grands-mères le savaient déjà !"
        </blockquote>
        <p className="text-green-700 font-medium">- Sagesse populaire</p>
      </div>
    </div>
  );
};