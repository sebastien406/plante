import React from 'react';
import { Droplets, Camera, Users, Calendar, BookOpen, Music, Leaf, Sprout, Flower2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section avec image de fond */}
      <div className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating plant elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300 opacity-60 animate-float" />
          <Flower2 className="absolute top-32 right-20 w-6 h-6 text-pink-300 opacity-50 animate-float" style={{animationDelay: '1s'}} />
          <Sprout className="absolute top-40 left-1/3 w-7 h-7 text-emerald-300 opacity-70 animate-float" style={{animationDelay: '2s'}} />
          <Leaf className="absolute top-16 right-1/3 w-9 h-9 text-green-200 opacity-40 animate-float" style={{animationDelay: '0.5s'}} />
          <Droplets className="absolute top-24 left-1/2 w-5 h-5 text-blue-300 opacity-60 animate-float" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Logo animé */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <Droplets className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                {/* Gouttes d'eau animées */}
                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                <div className="absolute -bottom-3 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Arroso'moi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Votre assistant jardinage intelligent qui prend soin de vos plantes 
              avec amour et technologie 🌱💧
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button className="group bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
                <Sprout className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Commencer maintenant
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
                <Camera className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Découvrir le scanner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section avec images de fond */}
      <div className="py-20 bg-gradient-to-b from-white to-green-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-400 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vos plantes ont besoin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche complète du jardinage qui allie tradition, innovation et communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8 text-blue-600" />,
                title: "Scanner IA",
                description: "Identifiez vos plantes et diagnostiquez les problèmes en un clic",
                bgColor: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200"
              },
              {
                icon: <Droplets className="w-8 h-8 text-cyan-600" />,
                title: "Rappels d'arrosage",
                description: "Ne manquez plus jamais un arrosage grâce à nos notifications intelligentes",
                bgColor: "from-cyan-50 to-blue-50",
                borderColor: "border-cyan-200"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Astuces de grand-mère",
                description: "Redécouvrez les secrets du jardinage traditionnel",
                bgColor: "from-green-50 to-emerald-50",
                borderColor: "border-green-200"
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Communauté",
                description: "Échangez conseils et expériences avec d'autres jardiniers passionnés",
                bgColor: "from-purple-50 to-pink-50",
                borderColor: "border-purple-200"
              },
              {
                icon: <Music className="w-8 h-8 text-pink-600" />,
                title: "Musique des plantes",
                description: "Explorez l'influence des sons sur la croissance de vos végétaux",
                bgColor: "from-pink-50 to-rose-50",
                borderColor: "border-pink-200"
              },
              {
                icon: <Calendar className="w-8 h-8 text-emerald-600" />,
                title: "Calendrier intelligent",
                description: "Planifiez vos activités de jardinage selon les saisons",
                bgColor: "from-emerald-50 to-green-50",
                borderColor: "border-emerald-200"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border ${feature.borderColor} hover:scale-105 cursor-pointer`}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section avec image de jardin */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-green-300/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Leaf className="w-16 h-16 text-green-200 mx-auto mb-6 animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez notre communauté de jardiniers
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Plus de 10 000 jardiniers font déjà confiance à Arroso'moi pour prendre soin de leurs plantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
              <Droplets className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Créer mon compte gratuit
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Découvrir la communauté
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};