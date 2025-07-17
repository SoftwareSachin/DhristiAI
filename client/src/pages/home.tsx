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
  CheckCircle,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

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
      {/* Header Navigation - Linear Style */}
      <header className={`sticky top-0 z-50 border-b border-linear transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-custom bg-linear-bg/95' : 'bg-linear-bg'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 3h18v18H3V3z" fill="url(#saffron-gradient)" />
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="saffron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#F7931E" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-semibold">DhristiAI</span>
            </div>
            
            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Product Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                  className="flex items-center space-x-1 text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
                >
                  <span>Product</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-linear-card border border-linear rounded-lg shadow-xl z-50"
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-sm font-medium text-linear-secondary mb-4">Core Features</h3>
                          <div className="space-y-3">
                            <div className="group">
                              <button 
                                onClick={() => scrollToSection('solutions')}
                                className="block w-full text-left"
                              >
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Plan</div>
                                <div className="text-xs text-linear-secondary">Set the product direction with projects and initiatives</div>
                              </button>
                            </div>
                            <div className="group">
                              <button 
                                onClick={() => scrollToSection('features')}
                                className="block w-full text-left"
                              >
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Build</div>
                                <div className="text-xs text-linear-secondary">Make progress with issue tracking and cycle planning</div>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-linear-secondary mb-4">More</h3>
                          <div className="space-y-3">
                            <div className="group">
                              <button 
                                onClick={() => scrollToSection('customers')}
                                className="block w-full text-left"
                              >
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Citizen requests</div>
                                <div className="text-xs text-linear-secondary">Manage user feedback</div>
                              </button>
                            </div>
                            <div className="group">
                              <button className="block w-full text-left">
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Integrations</div>
                                <div className="text-xs text-linear-secondary">Collaborate across tools</div>
                              </button>
                            </div>
                            <div className="group">
                              <button className="block w-full text-left">
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Insights</div>
                                <div className="text-xs text-linear-secondary">Realtime analytics</div>
                              </button>
                            </div>
                            <div className="group">
                              <button className="block w-full text-left">
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">Mobile app</div>
                                <div className="text-xs text-linear-secondary">DhristiAI in your pocket</div>
                              </button>
                            </div>
                            <div className="group">
                              <button className="block w-full text-left">
                                <div className="text-sm font-medium text-linear-text group-hover:text-saffron-gradient">DhristiAI for Agents</div>
                                <div className="text-xs text-linear-secondary">Collaborate with AI teammates</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-linear">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-linear-text">New: Sub-initiatives</div>
                            <div className="text-xs text-linear-secondary">Nest strategic initiatives into a hierarchical structure</div>
                          </div>
                          <button className="text-xs text-blue-400 hover:text-blue-300">Changelog</button>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-linear">
                        <button className="flex items-center space-x-2 text-sm text-linear-text hover:text-saffron-gradient">
                          <span>Introducing DhristiAI for Agents</span>
                          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('customers')}
                className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
              >
                Customers
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2"
              >
                Contact
              </button>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <button className="text-sm text-linear-secondary hover:text-linear-text transition-colors font-medium py-2 px-3 rounded-md hover:bg-linear-card">
                Log in
              </button>
              <button className="bg-white text-black hover:bg-gray-100 transition-colors font-medium text-sm px-4 py-2 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Linear Style */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-full mb-8">
            <div className="w-2 h-2 bg-saffron-gradient rounded-full"></div>
            <span className="text-sm text-linear-text">Introducing DhristiAI for India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DhristiAI is a purpose-built tool for India's{' '}
            <span className="text-saffron-gradient">
              development challenges
            </span>
          </h1>
          
          <p className="text-xl text-linear-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the system for modern India development. Streamline governance, healthcare, education, and rural initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-saffron-gradient text-white hover:opacity-90 transition-opacity font-medium px-8 py-3">
              Start building
            </Button>
          </div>
          
          {/* Team avatars */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-saffron-gradient border-2 border-linear-bg flex items-center justify-center text-white text-sm font-semibold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-linear-secondary text-sm mb-8">
            Powering India's best development teams.<br />
            From innovative startups to government enterprises.
          </p>
          
          <Button variant="outline" className="border-linear text-linear-text hover:bg-linear-card transition-colors">
            Meet our customers
          </Button>
        </div>
      </section>

      {/* Made for Modern India Section - Linear Style */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Made for modern India</h2>
          <p className="text-xl text-linear-secondary max-w-3xl mx-auto leading-relaxed">
            DhristiAI is shaped by the practices and principles that distinguish world-class development teams from the rest: 
            relentless focus, fast execution, and a commitment to the quality of craft.
          </p>
          <div className="mt-8">
            <Button variant="outline" className="border-linear text-linear-text hover:bg-linear-card transition-colors">
              Make the switch
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Three pillars - Linear style */}
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Building className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Purpose-built for India development</h3>
            <p className="text-linear-secondary text-sm">
              Designed specifically for India's unique challenges and scale requirements
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Designed to move fast</h3>
            <p className="text-linear-secondary text-sm">
              Built for speed and efficiency to serve India's 1.4 billion citizens
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Crafted to perfection</h3>
            <p className="text-linear-secondary text-sm">
              Government-grade security and reliability for critical infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Project Planning Section - Linear Style */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-full mb-6">
            <span className="text-sm text-linear-text">Project and long-term planning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Set the development direction</h2>
          <p className="text-xl text-linear-secondary max-w-3xl mx-auto leading-relaxed">
            Align your team around a unified development timeline. Plan, manage, and track all initiatives with DhristiAI's visual planning tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Manage projects end-to-end</h3>
            <p className="text-linear-secondary mb-8">
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            
            {/* Mock project overview card */}
            <Card className="bg-linear-card border-linear">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Digital India Initiative</h4>
                  <div className="flex items-center gap-4 text-sm text-linear-secondary">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded">In Progress</span>
                    <span>GOV</span>
                  </div>
                </div>
                
                <div className="flex -space-x-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-saffron-gradient border-2 border-linear-bg"></div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium mb-1">Resources</h5>
                    <p className="text-sm text-linear-secondary">Citizen engagement platform</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Milestones</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Policy Review</span>
                        <span className="text-green-500">100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Public Consultation</span>
                        <span className="text-orange-500">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-linear-card border-linear">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Government planning session" 
                  className="rounded-lg w-full h-auto mb-4" 
                />
                <div className="flex justify-between items-center text-sm text-linear-secondary">
                  <span>Development Roadmap</span>
                  <span className="text-orange-500">Live Updates</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Project updates</h3>
            <p className="text-linear-secondary mb-8">
              Communicate progress and project health with built-in project updates.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-linear-card rounded-lg border border-linear">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Off track</h4>
                  <p className="text-sm text-linear-secondary">Resource allocation challenges affecting timeline...</p>
                  <p className="text-xs text-linear-secondary mt-1">Oct 27</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-linear-card rounded-lg border border-linear">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">At risk</h4>
                  <p className="text-sm text-linear-secondary">Stakeholder approval pending for next phase...</p>
                  <p className="text-xs text-linear-secondary mt-1">Oct 25</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-linear-card rounded-lg border border-linear">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">On track</h4>
                  <p className="text-sm text-linear-secondary">All systems operational, deployment scheduled...</p>
                  <p className="text-xs text-linear-secondary mt-1">Oct 20</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ideate and specify what to build next</h3>
            <p className="text-linear-secondary mb-8">
              Collaborate on ideas and work together on development specs in realtime, multiplayer documents.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
                <Users className="w-8 h-8 mx-auto mb-2 text-saffron-gradient" />
                <h4 className="font-medium text-sm">Initiatives</h4>
                <p className="text-xs text-linear-secondary">Coordinate strategic efforts</p>
              </div>
              
              <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
                <Handshake className="w-8 h-8 mx-auto mb-2 text-saffron-gradient" />
                <h4 className="font-medium text-sm">Cross-team projects</h4>
                <p className="text-xs text-linear-secondary">Collaborate across departments</p>
              </div>
              
              <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-saffron-gradient" />
                <h4 className="font-medium text-sm">Milestones</h4>
                <p className="text-xs text-linear-secondary">Break down into phases</p>
              </div>
              
              <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-saffron-gradient" />
                <h4 className="font-medium text-sm">Progress insights</h4>
                <p className="text-xs text-linear-secondary">Track scope and velocity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Tracking Section - Linear Style */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-full mb-6">
            <span className="text-sm text-linear-text">Task tracking and development planning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Issue tracking you'll enjoy using</h2>
          <p className="text-xl text-linear-secondary max-w-3xl mx-auto leading-relaxed">
            Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Build momentum with Development Cycles</h3>
            <p className="text-linear-secondary mb-8">
              Create healthy routines and focus your team on what work should happen next.
            </p>
            
            {/* Mock cycle card */}
            <Card className="bg-linear-card border-linear">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">Development Cycle 24</h4>
                  <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded text-sm">Started</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">12</div>
                    <div className="text-xs text-linear-secondary">Scope</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">8</div>
                    <div className="text-xs text-linear-secondary">Started</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">5</div>
                    <div className="text-xs text-linear-secondary">Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Manage incoming work with Triage</h3>
            <p className="text-linear-secondary mb-8">
              Review and assign incoming reports, feature requests, and other unplanned work.
            </p>
            
            <Card className="bg-linear-card border-linear">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Triage</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-linear-bg rounded border border-linear">
                    <div className="w-8 h-8 bg-saffron-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">P</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Citizens report service accessibility issues</p>
                      <p className="text-xs text-linear-secondary">priya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-linear-bg rounded border border-linear">
                    <div className="w-8 h-8 bg-saffron-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">R</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">System timeout during peak hours</p>
                      <p className="text-xs text-linear-secondary">ravi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-linear-bg rounded border border-linear">
                    <div className="w-8 h-8 bg-saffron-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">A</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mobile app crashes on Android 12</p>
                      <p className="text-xs text-linear-secondary">ankit</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">Accept</Button>
                  <Button size="sm" variant="outline">Mark as duplicate</Button>
                  <Button size="sm" variant="outline">Decline</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">DhristiAI Insights</h3>
          <p className="text-linear-secondary mb-8">
            Take the guesswork out of development planning with realtime, actionable data analytics.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
              <h4 className="font-medium text-sm mb-2">Tailored workflows</h4>
              <p className="text-xs text-linear-secondary">Track progress across custom flows</p>
            </div>
            
            <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
              <h4 className="font-medium text-sm mb-2">Custom views</h4>
              <p className="text-xs text-linear-secondary">Switch between list and board views</p>
            </div>
            
            <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
              <h4 className="font-medium text-sm mb-2">Smart filters</h4>
              <p className="text-xs text-linear-secondary">Refine lists to what's most relevant</p>
            </div>
            
            <div className="text-center p-4 bg-linear-card rounded-lg border border-linear">
              <h4 className="font-medium text-sm mb-2">SLAs</h4>
              <p className="text-xs text-linear-secondary">Automatic deadlines for urgent tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Strong Foundations Section - Linear Style */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-full mb-6">
            <span className="text-sm text-linear-text">Under the hood</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on strong foundations</h2>
          <p className="text-xl text-linear-secondary max-w-3xl mx-auto leading-relaxed">
            DhristiAI is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep DhristiAI robust, safe, and blazing fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-xl font-semibold mb-4">DhristiAI Processing Engine</h3>
            <p className="text-linear-secondary">
              Built with a high-performance architecture and an obsessive focus on speed.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enterprise-ready security</h3>
            <p className="text-linear-secondary">
              Best-in-class security practices keep your work safe and secure at every layer.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-card rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Expand className="w-8 h-8 text-saffron-gradient" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Engineered for scale</h3>
            <p className="text-linear-secondary">
              Built for teams of all sizes. From early-stage startups to government enterprises.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mb-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-lg">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">NIST Compliant</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-lg">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">Data Protection Act</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-lg">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">ISO 27001</span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Plan the present. Build the future.</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-saffron-gradient text-white hover:opacity-90 transition-opacity font-medium px-8 py-3">
              Get started
            </Button>
            <Button variant="outline" className="border-linear text-linear-text hover:bg-linear-card transition-colors font-medium px-8 py-3">
              Talk to sales
            </Button>
            <Button variant="outline" className="border-linear text-linear-text hover:bg-linear-card transition-colors font-medium px-8 py-3">
              Download
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo">
        <InteractiveDemo />
      </section>

      {/* AI Section - Linear Style */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-card border border-linear rounded-full mb-6">
            <span className="text-sm text-linear-text">Artificial intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI that works where you work</h2>
          <p className="text-xl text-linear-secondary max-w-3xl mx-auto leading-relaxed">
            DhristiAI for India. Choose from a variety of AI solutions and start delegating work, from policy analysis to citizen service optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">DhristiAI Integration Platform</h3>
            <p className="text-linear-secondary mb-8">
              Connect DhristiAI to your favorite tools including government systems, databases, and external APIs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Gov Portal", icon: "G" },
                { name: "Aadhaar", icon: "A" },
                { name: "DigiLocker", icon: "D" },
                { name: "UMANG", icon: "U" },
                { name: "Bharath", icon: "B" },
                { name: "eDistrict", icon: "E" },
                { name: "MyGov", icon: "M" },
                { name: "NSDL", icon: "N" }
              ].map((app, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-linear-card rounded-lg border border-linear">
                  <div className="w-8 h-8 bg-saffron-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {app.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{app.name}</p>
                    <p className="text-xs text-linear-secondary">App</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">AI natively built in</h3>
            <p className="text-linear-secondary mb-8">
              DhristiAI uses the latest language models to power workflows from semantic search to summarizing your team's development updates.
            </p>
            
            <Card className="bg-linear-card border-linear">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-saffron-gradient rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-2">DhristiAI Assistant</p>
                    <p className="text-xs text-linear-secondary mb-3">
                      Analyzing citizen feedback patterns across 15 districts...
                    </p>
                    <div className="p-3 bg-linear-bg rounded border border-linear">
                      <p className="text-sm">
                        Based on the analysis of 10,000+ citizen feedback entries, I've identified key improvement areas:
                        <br />• 67% requests for faster service delivery
                        <br />• 43% need better mobile accessibility
                        <br />• 28% require multilingual support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Workflows and integrations</h3>
          <h4 className="text-4xl font-bold mb-6">Collaborate across tools and teams</h4>
          <p className="text-linear-secondary mb-12 max-w-3xl mx-auto">
            Expand the capabilities of the DhristiAI system with a wide variety of integrations that keep everyone in your organization aligned and focused.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-linear-card border-linear p-6 hover:bg-gray-900 transition-colors">
              <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Citizen Requests</h4>
              <p className="text-sm text-linear-secondary">Build what citizens actually need</p>
            </Card>
            
            <Card className="bg-linear-card border-linear p-6 hover:bg-gray-900 transition-colors">
              <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">DhristiAI Mobile</h4>
              <p className="text-sm text-linear-secondary">Move development work forward from anywhere</p>
            </Card>
            
            <Card className="bg-linear-card border-linear p-6 hover:bg-gray-900 transition-colors">
              <div className="w-12 h-12 bg-saffron-gradient rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Government APIs</h4>
              <p className="text-sm text-linear-secondary">100+ ways to enhance your DhristiAI experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Proof Section */}
      <section id="customers" className="max-w-7xl mx-auto px-6 py-20">
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

      {/* Footer */}
      <footer id="pricing" className="max-w-7xl mx-auto px-6 py-12 border-t border-linear">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-saffron-gradient"></div>
              <span className="text-xl font-semibold">DhristiAI</span>
            </div>
            <p className="text-linear-secondary text-sm">
              AI-powered solutions for India's foundational challenges
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">Smart Governance</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Healthcare AI</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Educational Intelligence</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Rural Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">About</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-linear-secondary">
              <li><a href="#" className="hover:text-linear-text transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-linear-text transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-linear flex flex-col md:flex-row justify-between items-center">
          <p className="text-linear-secondary text-sm">
            © 2024 DhristiAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-linear-secondary hover:text-linear-text transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-linear-secondary hover:text-linear-text transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-linear-secondary hover:text-linear-text transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
