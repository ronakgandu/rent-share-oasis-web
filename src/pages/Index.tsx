import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MapPin, 
  Smartphone, 
  Bike, 
  Camera, 
  Gamepad2,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Star,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Discovery",
      description: "Find items near you with our interactive map interface"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Protected payments and verified user profiles"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Rent for hours, days, or weeks - you choose"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a community of sharers and makers"
    }
  ];

  const categories = [
    { icon: Smartphone, name: "Electronics", count: 234, color: "bg-blue-500" },
    { icon: Bike, name: "Sports & Outdoor", count: 189, color: "bg-green-500" },
    { icon: Camera, name: "Photography", count: 156, color: "bg-purple-500" },
    { icon: Gamepad2, name: "Gaming", count: 98, color: "bg-red-500" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Found the perfect camera lens for my weekend shoot. Saved hundreds!"
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Amazing platform! Rented out my bike and made some extra cash."
    },
    {
      name: "Maya P.",
      rating: 5,
      text: "So convenient and trustworthy. Love the community aspect."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-slide-up">
              <Badge className="mb-6 glass-effect" variant="outline">
                ✨ The Future of Sharing Economy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-urbanist font-bold mb-6 leading-tight">
                Rent, Share, and{" "}
                <span className="gradient-text">Discover</span>{" "}
                Everything Around You
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Join thousands of people sharing items in their community. 
                From cameras to bikes, tools to tech - find what you need or earn from what you have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/explore">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/post">
                  <Button size="lg" variant="outline" className="glass-effect hover-scale">
                    List Your Item
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 relative animate-float">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
                <div className="relative glass-card p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category, index) => (
                      <Card key={category.name} className={`hover-scale transition-all duration-300 ${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'}`} style={{ animationDelay: `${index * 100}ms` }}>
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                          <p className="text-xs text-muted-foreground">{category.count} items</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-urbanist font-bold mb-4">
              Why Choose <span className="gradient-text">Rent Share</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built the most intuitive and secure platform for the sharing economy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`hover-scale glass-card animate-slide-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-urbanist font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-urbanist font-bold gradient-text mb-2">10,000+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-urbanist font-bold gradient-text mb-2">50,000+</div>
              <p className="text-muted-foreground">Items Listed</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-urbanist font-bold gradient-text mb-2">$2M+</div>
              <p className="text-muted-foreground">Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-urbanist font-bold mb-4">
              Loved by Our <span className="gradient-text">Community</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`hover-scale glass-card animate-slide-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="glass-card hover-scale">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-urbanist font-bold mb-4">
                Ready to Start <span className="gradient-text">Sharing</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already saving money and earning extra income through sharing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Get Started Free
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="glass-effect">
                    Browse Items
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-urbanist font-bold text-xl gradient-text">Rent Share</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Rent Share. Built with love for the sharing community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
