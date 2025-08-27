import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Apex Media Design.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mockData.testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-orange-200 bg-white">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full group-hover:from-orange-200 group-hover:to-pink-200 transition-all duration-300">
                    <Quote className="h-8 w-8 text-orange-500" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-orange-500 font-medium">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 text-lg">Join hundreds of satisfied clients who have transformed their businesses with our solutions</p>
          </div>
          
          {/* Mock Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: "TechStart", color: "from-blue-400 to-blue-600" },
              { name: "Creative Co", color: "from-green-400 to-green-600" },
              { name: "Digital Pro", color: "from-purple-400 to-purple-600" },
              { name: "Business Hub", color: "from-red-400 to-red-600" }
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className={`h-16 w-32 mx-auto mb-2 bg-gradient-to-r ${client.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{client.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-8 text-lg">Let's create something amazing together</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Project Today
            <Star className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};