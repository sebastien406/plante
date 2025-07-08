import React, { useState } from 'react';
import { Menu, X, Droplets, User, LogOut, Leaf, Flower, Sprout } from 'lucide-react';
import { User as UserType } from '../App';

interface HeaderProps {
  user: UserType | null;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setShowAuthModal: (show: boolean) => void;
  setUser: (user: UserType | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  user, 
  currentPage, 
  setCurrentPage, 
  setShowAuthModal,
  setUser 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', key: 'home' },
    { name: 'Dashboard', key: 'dashboard', authRequired: true },
    { name: 'Scanner', key: 'scanner' },
    { name: 'Bibliothèque', key: 'library' },
    { name: 'Astuces', key: 'tips' },
    { name: 'Communauté', key: 'community' },
    { name: 'Musique des plantes', key: 'music' },
    { name: 'Biodynamiseurs', key: 'biodynamizers' },
    { name: 'Calendrier', key: 'calendar' }
  ];

  const handleNavClick = (key: string, authRequired?: boolean) => {
    if (authRequired && !user) {
      setShowAuthModal(true);
      return;
    }
    setCurrentPage(key);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      {/* Decorative plant border */}
      <div className="h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="flex space-x-8 animate-pulse">
            <Leaf className="w-4 h-4 text-green-200 mt-[-2px]" />
            <Flower className="w-4 h-4 text-pink-200 mt-[-2px]" />
            <Sprout className="w-4 h-4 text-green-300 mt-[-2px]" />
            <Leaf className="w-4 h-4 text-emerald-200 mt-[-2px]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec animation */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Droplets className="w-6 h-6 text-white group-hover:animate-bounce" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                <Leaf className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Arroso'moi
              </span>
              <div className="text-xs text-gray-500 -mt-1">Votre jardin intelligent</div>
            </div>
          </div>

          {/* Desktop Navigation avec effets hover */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.authRequired)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-green-50 hover:text-green-700 hover:scale-105 ${
                  currentPage === item.key 
                    ? 'bg-green-100 text-green-700 shadow-sm' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* User Menu avec animations */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 bg-green-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
                  title="Déconnexion"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Connexion
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-green-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation avec animation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-green-100 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 py-3 space-y-1 max-h-96 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.authRequired)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.key 
                    ? 'text-green-700 bg-green-50 shadow-sm' 
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Decorative bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
    </header>
  );
};