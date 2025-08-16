import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const GeekBeardLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
          
          {/* Main Brand Section */}
          <div className="space-y-6 animate-float">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                GeekBeard
              </h1>
              <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full animate-glow" />
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <span className="text-xl font-medium">Fashion Technology</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <a 
                href="https://enhancethat.fashion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-medium text-accent hover:text-accent/80 transition-colors flex items-center space-x-1 group"
              >
                <span>Enhance That</span>
                <span className="text-muted-foreground">partner</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <Card className="bg-card/50 backdrop-blur-lg border-border/50 p-8 shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-secondary/50 border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group w-full md:w-auto"
              >
                <a href="https://www.linkedin.com/company/geek-beard-development/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-secondary/50 border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group w-full md:w-auto"
              >
                <a href="https://github.com/geekbeard" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-secondary/50 border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group w-full md:w-auto"
              >
                <a href="mailto:geekbearddev@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  Email
                </a>
              </Button>

            </div>
          </Card>

          {/* Footer */}
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© GeekBeard B.V.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GeekBeardLanding;