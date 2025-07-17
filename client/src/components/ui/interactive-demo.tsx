import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  MessageCircle, 
  FileText, 
  TrendingUp,
  Activity,
  Users,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send
} from "lucide-react";

interface DemoMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface AnalyticsData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("governance");
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);

  // Sample AI responses for different domains
  const aiResponses = {
    governance: [
      "Based on citizen feedback analysis, I recommend implementing a digital grievance tracking system with automated status updates. This could reduce response time by 60%.",
      "Policy impact assessment shows that the proposed education reform will benefit 2.3M students across 15 districts. Implementation timeline: 6 months.",
      "Resource allocation optimization suggests redistributing 15% of the healthcare budget to rural areas for maximum impact coverage."
    ],
    healthcare: [
      "Early detection model indicates a 23% increase in diabetes risk in the 35-50 age group. Recommend targeted screening programs in urban areas.",
      "Treatment pathway analysis shows that telemedicine consultations can reduce patient wait times by 40% while maintaining quality standards.",
      "Population health data reveals malnutrition patterns in 8 districts. Suggested intervention: targeted nutrition programs with 85% success rate."
    ],
    education: [
      "Learning analytics indicate that students perform 35% better with personalized curriculum paths. Implementing adaptive learning modules recommended.",
      "Dropout prediction model identifies 1,200 at-risk students. Early intervention programs show 78% retention improvement.",
      "Skill gap analysis reveals high demand for digital literacy training. Recommend expanding tech education programs in 12 districts."
    ],
    rural: [
      "Agricultural yield prediction shows 28% improvement potential with precision farming techniques. Weather patterns favor implementation next quarter.",
      "Market access analysis indicates that digital platforms can increase farmer income by 45% through direct-to-consumer sales.",
      "Water resource management suggests implementing smart irrigation systems could reduce water usage by 30% while maintaining crop yields."
    ]
  };

  const analyticsData = {
    governance: [
      { title: "Citizen Satisfaction", value: "87%", change: "+12%", trend: "up", color: "text-green-500" },
      { title: "Service Response Time", value: "2.3 hrs", change: "-40%", trend: "down", color: "text-green-500" },
      { title: "Policy Compliance", value: "94%", change: "+8%", trend: "up", color: "text-green-500" },
      { title: "Budget Efficiency", value: "₹234M", change: "+15%", trend: "up", color: "text-green-500" }
    ],
    healthcare: [
      { title: "Diagnostic Accuracy", value: "96%", change: "+4%", trend: "up", color: "text-green-500" },
      { title: "Treatment Success", value: "89%", change: "+7%", trend: "up", color: "text-green-500" },
      { title: "Patient Wait Time", value: "18 min", change: "-45%", trend: "down", color: "text-green-500" },
      { title: "Cost Reduction", value: "₹156M", change: "+23%", trend: "up", color: "text-green-500" }
    ],
    education: [
      { title: "Learning Outcomes", value: "92%", change: "+18%", trend: "up", color: "text-green-500" },
      { title: "Student Engagement", value: "85%", change: "+25%", trend: "up", color: "text-green-500" },
      { title: "Dropout Rate", value: "3.2%", change: "-60%", trend: "down", color: "text-green-500" },
      { title: "Skill Development", value: "78%", change: "+32%", trend: "up", color: "text-green-500" }
    ],
    rural: [
      { title: "Crop Yield", value: "4.2T/ha", change: "+28%", trend: "up", color: "text-green-500" },
      { title: "Farmer Income", value: "₹2.4L", change: "+45%", trend: "up", color: "text-green-500" },
      { title: "Water Usage", value: "2.1M L", change: "-30%", trend: "down", color: "text-green-500" },
      { title: "Market Access", value: "67%", change: "+89%", trend: "up", color: "text-green-500" }
    ]
  };

  useEffect(() => {
    setAnalytics(analyticsData[activeTab as keyof typeof analyticsData]);
  }, [activeTab]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: DemoMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsProcessing(true);
    setProgress(0);

    // Simulate AI processing
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Simulate AI response delay
    setTimeout(() => {
      const responses = aiResponses[activeTab as keyof typeof aiResponses];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: DemoMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
      setProgress(0);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Experience DhristiAI in Action</h2>
        <p className="text-xl text-linear-secondary max-w-2xl mx-auto">
          Interact with our AI solutions and see real-time results for India's development challenges.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-linear-card border-linear">
          <TabsTrigger value="governance" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Governance
          </TabsTrigger>
          <TabsTrigger value="healthcare" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Healthcare
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Education
          </TabsTrigger>
          <TabsTrigger value="rural" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Rural Dev
          </TabsTrigger>
        </TabsList>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <Card className="lg:col-span-2 bg-linear-card border-linear">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                AI Assistant - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto mb-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-linear-secondary py-8">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                    <p>Ask me anything about {activeTab} solutions in India</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-linear-blue text-white'
                          : 'bg-gray-700 text-linear-text'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-linear-text px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Processing your request...</span>
                      </div>
                      <Progress value={progress} className="mt-2 w-32" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about governance, policies, or data insights..."
                  className="flex-1 demo-input"
                  disabled={isProcessing}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isProcessing || !inputValue.trim()}
                  className="bg-saffron-gradient hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Dashboard */}
          <Card className="bg-linear-card border-linear">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Live Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.map((metric, index) => (
                  <div key={index} className="demo-animation">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-linear-secondary">{metric.title}</span>
                      <Badge variant="outline" className={metric.color}>
                        {metric.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-linear-text mb-2">
                      {metric.value}
                    </div>
                    <Progress value={Math.random() * 100} className="h-2" />
                  </div>
                ))}
                
                <div className="pt-4 border-t border-linear">
                  <div className="flex items-center gap-2 text-sm text-linear-secondary">
                    <Clock className="w-4 h-4" />
                    <span>Last updated: {new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Queries */}
        <Card className="mt-8 bg-linear-card border-linear">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Try These Sample Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TabsContent value="governance" className="mt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "How can we reduce citizen service response time?",
                  "What's the impact of the new digital governance policy?",
                  "Analyze budget allocation efficiency across departments",
                  "Predict citizen satisfaction trends for next quarter"
                ].map((query, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4 text-left border-linear hover:bg-linear-card"
                    onClick={() => setInputValue(query)}
                  >
                    <span className="text-sm">{query}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="healthcare" className="mt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Predict disease outbreaks in rural areas",
                  "Optimize hospital resource allocation",
                  "Analyze treatment effectiveness data",
                  "Recommend preventive care strategies"
                ].map((query, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4 text-left border-linear hover:bg-linear-card"
                    onClick={() => setInputValue(query)}
                  >
                    <span className="text-sm">{query}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Identify students at risk of dropping out",
                  "Personalize learning paths for better outcomes",
                  "Analyze skill gaps in different regions",
                  "Recommend teacher training programs"
                ].map((query, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4 text-left border-linear hover:bg-linear-card"
                    onClick={() => setInputValue(query)}
                  >
                    <span className="text-sm">{query}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rural" className="mt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Optimize crop yields using weather data",
                  "Predict market prices for agricultural products",
                  "Analyze water resource management efficiency",
                  "Recommend sustainable farming practices"
                ].map((query, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4 text-left border-linear hover:bg-linear-card"
                    onClick={() => setInputValue(query)}
                  >
                    <span className="text-sm">{query}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}