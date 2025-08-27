import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Users, Zap, Heart } from 'lucide-react';
import { mockData } from '../mock';

export const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-500" },
    { icon: Award, number: "98%", label: "Success Rate", color: "text-green-500" },
    { icon: Zap, number: "5+", label: "Years Experience", color: "text-orange-500" },
    { icon: Heart, number: "24/7", label: "Support", color: "text-pink-500" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Apex Media Design</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating exceptional web experiences that drive business growth. 
            Our team combines creativity, technical expertise, and strategic thinking to deliver outstanding results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-orange-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full">
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16 border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To empower businesses of all sizes with professional web solutions that not only look stunning 
              but also deliver measurable results. Whether you need a custom-built website or a premium template, 
              we're committed to helping you succeed in the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-4 py-2">
                Innovation
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-4 py-2">
                Quality
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2">
                Results
              </Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2">
                Support
              </Badge>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 text-lg">The creative minds behind your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.team.map((member, index) => (
              <Card key={member.id} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-orange-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-orange-500 font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Team", description: "Skilled professionals with years of experience" },
              { title: "Custom Solutions", description: "Tailored approaches for every unique business" },
              { title: "Fast Delivery", description: "Quick turnaround times without compromising quality" },
              { title: "Ongoing Support", description: "Continuous support and maintenance services" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};