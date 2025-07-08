import React, { useState } from 'react';
import { MessageCircle, Plus, Heart, Reply, Search, Filter, User, Clock, Pin } from 'lucide-react';
import { User as UserType } from '../App';

interface CommunityProps {
  user: UserType | null;
}

export const Community: React.FC<CommunityProps> = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const categories = [
    { id: 'all', name: 'Toutes les discussions' },
    { id: 'indoor', name: 'Jardinage intérieur' },
    { id: 'outdoor', name: 'Jardinage extérieur' },
    { id: 'vegetables', name: 'Potager' },
    { id: 'flowers', name: 'Fleurs' },
    { id: 'problems', name: 'Problèmes & solutions' },
    { id: 'exchange', name: 'Échanges & dons' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Mes tomates cerises ont des taches noires, que faire ?',
      author: 'Marie_jardin',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'problems',
      time: '2 heures',
      replies: 12,
      likes: 8,
      pinned: false,
      excerpt: 'Bonjour à tous ! J\'ai remarqué des taches noires sur mes tomates cerises. Elles apparaissent d\'abord sur les feuilles puis...',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Échange de graines de tournesol contre graines de courge',
      author: 'PaulGreen',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'exchange',
      time: '4 heures',
      replies: 6,
      likes: 15,
      pinned: false,
      excerpt: 'J\'ai récupéré beaucoup de graines de tournesol cette année et je cherche des graines de courge butternut...'
    },
    {
      id: 3,
      title: 'Guide complet pour débuter un potager sur balcon',
      author: 'JardinierUrbain',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'indoor',
      time: '1 jour',
      replies: 24,
      likes: 42,
      pinned: true,
      excerpt: 'Voici un guide complet pour tous ceux qui veulent commencer un potager sur leur balcon. Même avec peu d\'espace...',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Mes orchidées ne fleurissent plus depuis 6 mois',
      author: 'FleurPassion',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'flowers',
      time: '2 jours',
      replies: 18,
      likes: 11,
      pinned: false,
      excerpt: 'J\'ai trois orchidées phalaenopsis qui ne fleurissent plus. Elles ont l\'air en bonne santé mais...'
    },
    {
      id: 5,
      title: 'Conseils pour un compost réussi en appartement',
      author: 'EcoLover',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'indoor',
      time: '3 jours',
      replies: 31,
      likes: 28,
      pinned: false,
      excerpt: 'Salut tout le monde ! Je vis en appartement et je veux commencer un compost. Quels sont vos meilleurs conseils...'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Communauté GreenThumb 🌱
        </h1>
        <p className="text-lg text-gray-600">
          Partagez vos expériences, posez vos questions et apprenez ensemble
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">1,247</div>
          <div className="text-sm text-gray-600">Membres actifs</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">3,456</div>
          <div className="text-sm text-gray-600">Discussions</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-purple-600">12,890</div>
          <div className="text-sm text-gray-600">Messages</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-orange-600">245</div>
          <div className="text-sm text-gray-600">Échanges ce mois</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {user && (
              <button
                onClick={() => setShowNewPost(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Nouveau sujet</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Créer un nouveau sujet</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  {categories.slice(1).map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du sujet
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Décrivez brièvement votre sujet..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={6}
                  placeholder="Décrivez votre question ou partagez votre expérience..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ajouter une image (optionnel)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Publier
              </button>
              <button
                onClick={() => setShowNewPost(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {post.avatar ? (
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-green-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    {post.pinned && (
                      <Pin className="w-4 h-4 text-green-600" />
                    )}
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {post.image && (
                    <div className="mb-3">
                      <img
                        src={post.image}
                        alt="Post image"
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Par {post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Il y a {post.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.replies}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                        <Reply className="w-4 h-4" />
                        <span className="text-sm">Répondre</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune discussion trouvée
          </h3>
          <p className="text-gray-600 mb-4">
            Soyez le premier à lancer une discussion dans cette catégorie !
          </p>
          {user && (
            <button
              onClick={() => setShowNewPost(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Créer le premier sujet
            </button>
          )}
        </div>
      )}

      {/* Community Guidelines */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Règles de la communauté
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🤝</div>
            <h4 className="font-medium text-green-900">Respect mutuel</h4>
            <p className="text-sm text-green-700">
              Soyez bienveillant et respectueux envers tous les membres
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🌱</div>
            <h4 className="font-medium text-green-900">Partage constructif</h4>
            <p className="text-sm text-green-700">
              Partagez vos connaissances et expériences pour aider les autres
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚫</div>
            <h4 className="font-medium text-green-900">Pas de spam</h4>
            <p className="text-sm text-green-700">
              Évitez les contenus répétitifs ou promotionnels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};