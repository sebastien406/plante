import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Leaf, Heart, Flower2, TreePine } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-blue-400 blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-emerald-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-cyan-400 blur-2xl"></div>
      </div>

      {/* Decorative plant silhouettes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-32">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M0,200 L0,100 Q100,80 200,90 T400,85 T600,95 T800,80 T1000,90 T1200,85 L1200,200 Z" fill="currentColor"/>
          </svg>
        </div>
        <Leaf className="absolute top-16 left-16 w-8 h-8 text-green-300 animate-pulse" />
        <Flower2 className="absolute top-24 right-32 w-6 h-6 text-pink-300 animate-pulse" style={{animationDelay: '1s'}} />
        <TreePine className="absolute top-12 left-1/3 w-10 h-10 text-green-400 animate-pulse" style={{animationDelay: '2s'}} />
        <Leaf className="absolute top-20 right-16 w-7 h-7 text-emerald-300 animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <Leaf className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Arroso'moi
                </span>
                <div className="text-sm text-gray-300 -mt-1">Votre jardin intelligent</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transformez votre passion pour le jardinage avec notre assistant intelligent. 
              Prenez soin de vos plantes comme jamais auparavant grâce à la technologie et 
              aux conseils de notre communauté passionnée.
            </p>
            
            {/* Social Media avec animations */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:text-blue-400' },
                { icon: Twitter, color: 'hover:text-sky-400' },
                { icon: Instagram, color: 'hover:text-pink-400' },
                { icon: Youtube, color: 'hover:text-red-400' }
              ].map(({ icon: Icon, color }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg p-2 rounded-full hover:bg-white/10`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                'Accueil', 'Dashboard', 'Scanner', 'Bibliothèque', 
                'Communauté', 'Calendrier'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">contact@arrosomoi.fr</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
              <Flower2 className="w-5 h-5 mr-2 text-pink-400" />
              Restez connecté à votre jardin
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos conseils de saison et les nouveautés d'Arroso'moi
            </p>
            <div className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-r-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © 2025 Arroso'moi. Fait avec 
            <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" /> 
            pour les amoureux des plantes.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              'Mentions légales',
              'Politique de confidentialité', 
              'CGU'
            ].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-green-400 transition-colors text-sm hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated water drops */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-16 right-1/4 w-2.5 h-2.5 bg-blue-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
      </div>
    </footer>
  );
};