import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { mockData } from '../mock';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 500+ Businesses
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              {mockData.hero.title}
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
              {mockData.hero.subtitle}
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {mockData.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {mockData.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {mockData.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Mock Browser Window */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                  </div>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">↗</div>
                    <div className="text-sm text-gray-600">Performance</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-pink-500">⚡</div>
                    <div className="text-sm text-gray-600">Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-lg opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};