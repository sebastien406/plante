import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { PlantScanner } from './components/PlantScanner';
import { PlantLibrary } from './components/PlantLibrary';
import { GrandmasTips } from './components/GrandmasTips';
import { Community } from './components/Community';
import { PlantMusic } from './components/PlantMusic';
import { Biodynamizers } from './components/Biodynamizers';
import { Calendar } from './components/Calendar';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type Plant = {
  id: string;
  name: string;
  type: string;
  image: string;
  lastWatered: string;
  nextWatering: string;
  notes: string;
  userId: string;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [plants, setPlants] = useState<Plant[]>([]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} plants={plants} setPlants={setPlants} />;
      case 'scanner':
        return <PlantScanner />;
      case 'library':
        return <PlantLibrary />;
      case 'tips':
        return <GrandmasTips />;
      case 'community':
        return <Community user={user} />;
      case 'music':
        return <PlantMusic />;
      case 'biodynamizers':
        return <Biodynamizers />;
      case 'calendar':
        return <Calendar />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header 
        user={user} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        setShowAuthModal={setShowAuthModal}
        setUser={setUser}
      />
      
      <main className="pt-16">
        {renderCurrentPage()}
      </main>

      <Footer />

      {showAuthModal && (
        <AuthModal 
          setShowAuthModal={setShowAuthModal}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;