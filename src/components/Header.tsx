import React, { useState } from 'react';
import { Menu, X, Leaf, User, LogOut } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">GreenThumb</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.authRequired)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  currentPage === item.key 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                  title="Déconnexion"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Connexion
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-green-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-green-100">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.authRequired)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.key 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};