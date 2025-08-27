import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Palette, ShoppingCart, Layout, Settings, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Palette: Palette,
  ShoppingCart: ShoppingCart,
  Layout: Layout,
  Settings: Settings
};

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom development to ready-made templates, we provide comprehensive web solutions 
            that help your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-orange-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl group-hover:from-orange-200 group-hover:to-pink-200 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Portfolio Preview */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Work</h3>
            <p className="text-gray-600 text-lg">See how we've helped businesses transform their online presence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.portfolio.map((project, index) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      {project.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};