import React from 'react';
import { Leaf, Camera, Users, Calendar, BookOpen, Music } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GreenThumb
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Votre jardin connecté et intuitif pour prendre soin de vos plantes avec sagesse et technologie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Commencer maintenant
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin pour votre jardin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez une approche complète du jardinage qui allie tradition et innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8 text-green-600" />,
                title: "Scanner IA",
                description: "Identifiez vos plantes et diagnostiquez les problèmes en un clic"
              },
              {
                icon: <Calendar className="w-8 h-8 text-green-600" />,
                title: "Rappels intelligents",
                description: "Ne manquez plus jamais un arrosage ou un entretien"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Astuces de grand-mère",
                description: "Redécouvrez les secrets du jardinage traditionnel"
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: "Communauté",
                description: "Échangez conseils et expériences avec d'autres jardiniers"
              },
              {
                icon: <Music className="w-8 h-8 text-green-600" />,
                title: "Musique des plantes",
                description: "Explorez l'influence des sons sur la croissance"
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-600" />,
                title: "Biodynamiseurs",
                description: "Découvrez les outils de l'agriculture biodynamique"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez notre communauté de jardiniers
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Plus de 10 000 jardiniers font déjà confiance à GreenThumb pour prendre soin de leurs plantes
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Créer mon compte gratuit
          </button>
        </div>
      </div>
    </div>
  );
};