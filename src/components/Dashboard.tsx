import React, { useState } from 'react';
import { Plus, Droplets, Calendar, Camera, Edit, Trash2, Bell } from 'lucide-react';
import { User, Plant } from '../App';

interface DashboardProps {
  user: User | null;
  plants: Plant[];
  setPlants: (plants: Plant[]) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, plants, setPlants }) => {
  const [showAddPlant, setShowAddPlant] = useState(false);
  const [newPlant, setNewPlant] = useState({
    name: '',
    type: '',
    image: '',
    notes: ''
  });

  const handleAddPlant = () => {
    if (newPlant.name && newPlant.type && user) {
      const plant: Plant = {
        id: Date.now().toString(),
        name: newPlant.name,
        type: newPlant.type,
        image: newPlant.image || 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=300',
        lastWatered: new Date().toISOString(),
        nextWatering: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        notes: newPlant.notes,
        userId: user.id
      };
      
      setPlants([...plants, plant]);
      setNewPlant({ name: '', type: '', image: '', notes: '' });
      setShowAddPlant(false);
    }
  };

  const handleDeletePlant = (plantId: string) => {
    setPlants(plants.filter(plant => plant.id !== plantId));
  };

  const handleWaterPlant = (plantId: string) => {
    setPlants(plants.map(plant => 
      plant.id === plantId 
        ? { 
            ...plant, 
            lastWatered: new Date().toISOString(),
            nextWatering: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
          }
        : plant
    ));
  };

  const getWateringStatus = (nextWatering: string) => {
    const now = new Date();
    const next = new Date(nextWatering);
    const diff = next.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days <= 0) return { text: 'Arrosage nécessaire', color: 'text-red-600', bg: 'bg-red-100' };
    if (days === 1) return { text: 'Arrosage demain', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { text: `Arrosage dans ${days} jours`, color: 'text-green-600', bg: 'bg-green-100' };
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Connectez-vous pour accéder à votre dashboard
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bonjour {user.name} ! 🌱
        </h1>
        <p className="text-gray-600">
          Gérez vos plantes et suivez leurs besoins en temps réel
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Mes plantes</p>
              <p className="text-2xl font-bold text-green-600">{plants.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Arrosages aujourd'hui</p>
              <p className="text-2xl font-bold text-orange-600">
                {plants.filter(plant => getWateringStatus(plant.nextWatering).text === 'Arrosage nécessaire').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Bell className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Prochains soins</p>
              <p className="text-2xl font-bold text-blue-600">
                {plants.filter(plant => getWateringStatus(plant.nextWatering).text === 'Arrosage demain').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Plant Button */}
      <div className="mb-8">
        <button
          onClick={() => setShowAddPlant(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Ajouter une plante</span>
        </button>
      </div>

      {/* Add Plant Modal */}
      {showAddPlant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ajouter une plante</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la plante
                </label>
                <input
                  type="text"
                  value={newPlant.name}
                  onChange={(e) => setNewPlant({...newPlant, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Mon basilic"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de plante
                </label>
                <select
                  value={newPlant.type}
                  onChange={(e) => setNewPlant({...newPlant, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="Plante verte">Plante verte</option>
                  <option value="Plante grasse">Plante grasse</option>
                  <option value="Herbe aromatique">Herbe aromatique</option>
                  <option value="Légume">Légume</option>
                  <option value="Fleur">Fleur</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL de l'image (optionnel)
                </label>
                <input
                  type="url"
                  value={newPlant.image}
                  onChange={(e) => setNewPlant({...newPlant, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="https://exemple.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={newPlant.notes}
                  onChange={(e) => setNewPlant({...newPlant, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Notes sur cette plante..."
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleAddPlant}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowAddPlant(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => {
          const status = getWateringStatus(plant.nextWatering);
          return (
            <div key={plant.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                  <span className="text-sm text-gray-500">{plant.type}</span>
                </div>
                
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color} mb-3`}>
                  {status.text}
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {plant.notes || 'Aucune note ajoutée'}
                </p>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleWaterPlant(plant.id)}
                    className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Droplets className="w-4 h-4" />
                    <span>Arroser</span>
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePlant(plant.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {plants.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune plante enregistrée
          </h3>
          <p className="text-gray-600 mb-4">
            Commencez par ajouter votre première plante pour suivre ses besoins
          </p>
          <button
            onClick={() => setShowAddPlant(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Ajouter ma première plante
          </button>
        </div>
      )}
    </div>
  );
};