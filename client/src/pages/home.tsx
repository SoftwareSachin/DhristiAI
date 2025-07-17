import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import InteractiveDemo from "@/components/ui/interactive-demo";
import { 
  Building, 
  Heart, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Handshake,
  Shield,
  Expand,
  Globe,
  University,
  Rocket,
  HandHeart,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-linear-bg text-linear-text">
      {/* Header Navigation */}
      <header className={`sticky top-0 z-50 border-b border-linear transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-custom bg-linear-bg/90' : 'bg-linear-bg'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-saffron-gradient"></div>
              <span className="text-xl font-semibold">DhristiAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-linear-secondary hover:text-linear-text transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-linear-secondary hover:text-linear-text transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-linear-secondary hover:text-linear-text transition-colors"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-linear-secondary hover:text-linear-text transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-linear-secondary hover:text-linear-text transition-colors"
              >
                Contact
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:block text-linear-secondary hover:text-linear-text">
                Sign In
              </Button>
              <Button className="bg-saffron-gradient text-white hover:opacity-90 transition-opacity font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-powered solutions for India's{' '}
            <span className="text-saffron-gradient">
              foundational challenges
            </span>
          </h1>
          <p className="text-xl text-linear-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Purpose-built for modern India. Streamline governance, healthcare, education, and rural development with AI that understands Bharat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-saffron-gradient text-white hover:opacity-90 transition-opacity font-medium px-8 py-3">
              Start Building
            </Button>
            <Button variant="outline" className="border-linear text-linear-text hover:bg-linear-card transition-colors font-medium px-8 py-3">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Made for Modern India Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Made for modern India</h2>
          <p className="text-xl text-linear-secondary max-w-2xl mx-auto">
            DhristiAI is a purpose-built tool for solving India's foundational challenges through intelligent automation and insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Governance Card */}
          <Card className="bg-linear-card hover:bg-gray-900 transition-colors group border-linear">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-linear-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-80 transition-colors">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Governance</h3>
              <p className="text-linear-secondary mb-6">
                Streamline citizen services, policy implementation, and administrative processes with AI-driven insights and automation.
              </p>
              <ul className="space-y-2 text-sm text-linear-secondary">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Digital citizen services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Policy impact analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Resource optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Healthcare Card */}
          <Card className="bg-linear-card hover:bg-gray-900 transition-colors group border-linear">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-linear-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-80 transition-colors">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Healthcare AI</h3>
              <p className="text-linear-secondary mb-6">
                Enhance healthcare delivery with predictive diagnostics, treatment recommendations, and population health management.
              </p>
              <ul className="space-y-2 text-sm text-linear-secondary">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Predictive diagnostics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Treatment optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Population health insights
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="bg-linear-card hover:bg-gray-900 transition-colors group border-linear">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-linear-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-80 transition-colors">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Educational Intelligence</h3>
              <p className="text-linear-secondary mb-6">
                Personalize learning experiences, improve educational outcomes, and bridge the digital divide with AI-powered tools.
              </p>
              <ul className="space-y-2 text-sm text-linear-secondary">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Personalized learning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Performance analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  Multilingual support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Align Communities Section */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Align your communities around unified development</h2>
            <p className="text-xl text-linear-secondary mb-8">
              Break down silos between departments, communities, and stakeholders. Create transparency and accountability in development projects.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <Users className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Engagement</h3>
                  <p className="text-linear-secondary">Connect citizens directly with development initiatives and gather real-time feedback.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-linear-secondary">Monitor project milestones and impact metrics across all development sectors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <Handshake className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stakeholder Alignment</h3>
                  <p className="text-linear-secondary">Ensure all parties are informed and aligned on priorities and outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-linear-card border-linear">
            <CardContent className="p-8">
              <img 
                src="https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Rural development meeting with community leaders" 
                className="rounded-lg w-full h-auto mb-4" 
              />
              <div className="flex justify-between items-center text-sm text-linear-secondary">
                <span>Community Dashboard</span>
                <span className="text-orange-500">Live Updates</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Speed and Efficiency Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Optimized for speed and efficiency</h2>
          <p className="text-xl text-linear-secondary max-w-2xl mx-auto">
            DhristiAI's processing engine delivers real-time insights and lightning-fast responses to serve India's scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-linear-secondary">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">&lt;100ms</div>
            <div className="text-linear-secondary">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">1.4B+</div>
            <div className="text-linear-secondary">Citizens Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">28+</div>
            <div className="text-linear-secondary">Languages</div>
          </div>
        </div>
      </section>

      {/* Built on Strong Foundations Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Card className="bg-linear-card border-linear">
            <CardContent className="p-8">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Digital India infrastructure with connectivity networks" 
                className="rounded-lg w-full h-auto" 
              />
            </CardContent>
          </Card>
          <div>
            <h2 className="text-4xl font-bold mb-6">Built on strong foundations</h2>
            <p className="text-xl text-linear-secondary mb-8">
              Government-grade security, built for India's scale, with enterprise-ready infrastructure that grows with your needs.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Government-Grade Security</h3>
                  <p className="text-linear-secondary">End-to-end encryption, compliance with Indian data protection laws, and secure cloud infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <Expand className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Built for India's Scale</h3>
                  <p className="text-linear-secondary">Handles millions of concurrent users with distributed processing and intelligent load balancing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-linear-blue rounded-full flex items-center justify-center mt-1">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Multi-Language Support</h3>
                  <p className="text-linear-secondary">Native support for 28+ Indian languages with cultural context understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo">
        <InteractiveDemo />
      </section>

      {/* Customer Proof Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Powering India's best development teams</h2>
          <p className="text-xl text-linear-secondary">
            From innovative startups to government enterprises, trusted by organizations building India's future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-linear-card border-linear">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mr-4">
                  <University className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Government Agencies</h3>
                  <p className="text-linear-secondary text-sm">State & Central Departments</p>
                </div>
              </div>
              <p className="text-linear-secondary">
                "DhristiAI has transformed how we deliver citizen services. Response times improved by 80% while maintaining quality."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-linear-card border-linear">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Tech Startups</h3>
                  <p className="text-linear-secondary text-sm">Social Impact Ventures</p>
                </div>
              </div>
              <p className="text-linear-secondary">
                "The AI insights helped us scale our healthcare platform to reach 2M+ rural users across 5 states."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-linear-card border-linear">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mr-4">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">NGOs</h3>
                  <p className="text-linear-secondary text-sm">Development Organizations</p>
                </div>
              </div>
              <p className="text-linear-secondary">
                "DhristiAI's community engagement tools helped us increase program participation by 300% in rural areas."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <Card className="bg-linear-card border-linear">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to transform India's future?</h2>
            <p className="text-xl text-linear-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using DhristiAI to solve India's foundational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-saffron-gradient text-white hover:opacity-90 transition-opacity font-medium px-8 py-3">
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-linear text-linear-text hover:bg-gray-800 transition-colors font-medium px-8 py-3">
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-linear">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-saffron-gradient"></div>
              <span className="text-xl font-semibold">DhristiAI</span>
            </div>
            <p className="text-linear-secondary">
              AI-powered solutions for India's foundational challenges.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">API</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">About</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-linear mt-8 pt-8 text-center text-linear-secondary">
          <p>&copy; 2024 DhristiAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
