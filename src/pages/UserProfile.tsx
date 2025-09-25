import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">User Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Overview */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback className="text-lg">JD</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg mb-1">John Doe</h3>
            <p className="text-muted-foreground mb-2">Student</p>
            <Badge variant="secondary" className="mb-4">Active Member</Badge>
            <Button size="sm" className="w-full">
              <Edit className="h-4 w-4 mr-2" />
              Change Photo
            </Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input id="location" defaultValue="New York, NY" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date of Birth
              </Label>
              <Input id="dateOfBirth" type="date" defaultValue="1995-01-15" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..."
                defaultValue="Passionate student focused on personal development and academic excellence."
                rows={3}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button>Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Statistics */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
            <CardDescription>Your progress and activity overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">23</div>
                <div className="text-sm text-muted-foreground">Days Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Habits Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}