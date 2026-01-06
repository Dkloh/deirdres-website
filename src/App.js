import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Calendar, Package, Award, Users, Star } from 'lucide-react';

export default function DeirdresLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    guestCount: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const galleryImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=1200&q=80',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Private Chef",
      description: "Personalized culinary experiences in the comfort of your home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      details: [
        "Custom menu design",
        "Dietary accommodations",
        "In-home preparation",
        "Professional presentation"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Catering",
      description: "Elevate your gatherings with bespoke catering services.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
      details: [
        "Event planning consultation",
        "Full-service catering",
        "Custom presentations",
        "Staff coordination"
      ]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Weekly Meal Prep",
      description: "Chef-prepared meals delivered to your door weekly.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
      details: [
        "Personalized menus",
        "Nutritionist approved",
        "Fresh ingredients",
        "Flexible scheduling"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your inquiry. We will be in touch within 24 hours.');
    setFormData({ name: '', email: '', phone: '', serviceType: '', preferredDate: '', guestCount: '', message: '' });
    setTimeout(() => setFormStatus(''), 7000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const GalleryCarousel = () => (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Our Work</h2>
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans" style={{ fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Deirdre's</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#services" className="hover:text-purple-400 transition-colors duration-300">Services</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3">
              <a href="#about" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Clean & Elegant */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 px-6 text-center text-white max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Deirdre's
          </h1>
          <div className="h-px w-32 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl mb-4 font-light tracking-wide">
            Private Chef & Catering Services
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Refined culinary experiences crafted for the discerning palate. Serving New York with excellence and artistry.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-black px-12 py-4 text-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Request Consultation
          </a>
        </div>

        {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-75">
          <div className="w-6 h-10 border-2 border-white flex justify-center">
            <div className="w-1 h-3 bg-white mt-2"></div>
          </div>
        </div>*/}
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>About</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" 
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700">
                Deirdre's brings refined culinary experiences directly to your table. With unwavering commitment to quality, creativity, and personalized service, we craft memorable dining moments tailored to your unique preferences.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Whether seeking a private chef for daily meals, hosting an intimate gathering, or requiring weekly meal preparation, we approach each service with dedication to excellence and meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Label-Inspired Layout */}
      <section id="services" className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Services</h2>
<div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative bg-white p-8 border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg overflow-hidden group"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-purple-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Label-inspired ingredient list */}
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-3">Includes</p>
                    <div className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-100">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers - Nutrition Label Treatment */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>By the Numbers</h2>
          
          <div className="bg-white border-2 border-black p-10" style={{ fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            {/* Header */}
            <div className="border-b-4 border-black pb-4 mb-6">
              <h3 className="text-4xl font-black tracking-tight">Deirdre's</h3>
              <p className="text-sm font-semibold mt-1">Culinary Excellence Facts</p>
            </div>

            {/* Serving Info */}
            <div className="border-b-2 border-black py-3 mb-4">
              <div className="flex justify-between">
                <span className="text-sm font-bold">Serving</span>
                <span className="text-2xl font-black">New York</span>
              </div>
            </div>

            {/* Stats as "Nutritional Values" */}
            <div className="border-b-2 border-black pb-4 mb-4">
              <p className="text-xs font-bold mb-3">% Daily Value*</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-semibold">Years of Experience</span>
                  <span className="font-black text-2xl">10+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-semibold">Events Catered</span>
                  <span className="font-black text-2xl">200+</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-semibold">Client Satisfaction</span>
                  <span className="font-black text-2xl text-purple-400">100%</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="font-semibold">Weekly Meal Plans Active</span>
                  <span className="font-black text-2xl">50+</span>
                </div>
              </div>
            </div>

            {/* Ingredients List */}
            <div className="border-b-2 border-black pb-4 mb-4">
              <p className="text-xs font-bold mb-3">INGREDIENTS</p>
              <p className="text-sm leading-relaxed">
                Premium locally-sourced ingredients, seasonal produce, sustainable seafood, organic meats, 
                artisanal cheeses, fresh herbs, house-made stocks, attention to detail, culinary expertise, 
                personalized service.
              </p>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-3 gap-4 text-center text-xs mb-4">
              <div className="border border-gray-300 py-3">
                <Award className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <p className="font-bold">Certified</p>
                <p className="text-gray-600">ServSafe</p>
              </div>
              <div className="border border-gray-300 py-3">
                <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <p className="font-bold">Trusted by</p>
                <p className="text-gray-600">100+ Families</p>
              </div>
              <div className="border border-gray-300 py-3">
                <Star className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <p className="font-bold">Rated</p>
                <p className="text-gray-600">5 Stars</p>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              * Based on commitment to excellence, quality ingredients, and customer satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <GalleryCarousel />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Request a Quote</h2>
          
          {formStatus && (
            <div className="mb-8 p-6 bg-purple-50 border border-purple-400 text-purple-900 text-center">
              {formStatus}
            </div>
          )}

          <div className="bg-purple-50 p-10 border border-purple-200">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold mb-2 text-gray-700">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="private-chef">Private Chef</option>
                    <option value="events">Events & Catering</option>
                    <option value="meal-prep">Weekly Meal Prep</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold mb-2 text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-semibold mb-2 text-gray-700">Guest Count</label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="Number of guests"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Additional Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please share dietary restrictions, preferences, event details, or special requests..."
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-400 bg-white"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-4 font-semibold text-lg hover:bg-purple-400 transition-all duration-300"
              >
                Submit Request
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours with a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Deirdre's</h3>
              <p className="text-gray-600">Elevating culinary experiences in New York</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>New York, NY</p>
                <p>(555) 123-4567</p>
                <p>hello@deirdres.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>Private Chef</p>
                <p>Event Catering</p>
                <p>Weekly Meal Prep</p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
            <p>&copy; 2024 Deirdre's. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}