import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-hero rounded-md flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg">Habitraca</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Track your habits, achieve your goals, and transform your life one step at a time.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Habit Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Goal Setting</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Progress Analytics</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Reminders</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Habitraca. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-secondary" fill="currentColor" /> for better habits
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}