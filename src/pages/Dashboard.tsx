import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Clock, Trophy } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Keep up the great work! You're on track to achieve your goals.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white shadow-elegant">
          <Plus className="mr-2 h-4 w-4" />
          Add New Habit
        </Button>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Today's Habits & Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Today's Habits */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Habits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Morning Meditation", completed: true, time: "7:00 AM" },
              { name: "Drink 8 Glasses of Water", completed: true, time: "All Day" },
              { name: "30 Min Exercise", completed: false, time: "6:00 PM" },
              { name: "Read 20 Pages", completed: false, time: "9:00 PM" },
            ].map((habit, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-smooth ${
                      habit.completed
                        ? "bg-secondary border-secondary"
                        : "border-muted-foreground hover:border-primary"
                    }`}
                  />
                  <div>
                    <p className={`font-medium ${habit.completed ? "line-through text-muted-foreground" : ""}`}>
                      {habit.name}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {habit.time}
                    </p>
                  </div>
                </div>
                {!habit.completed && (
                  <Button size="sm" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                    Mark Done
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-secondary" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "15-Day Streak!", description: "Meditation habit", date: "Today" },
              { title: "Weekly Goal Completed", description: "Exercise 5 times", date: "Yesterday" },
              { title: "New Personal Best", description: "Completed 12/12 habits", date: "2 days ago" },
              { title: "Habit Milestone", description: "100 pages read this month", date: "3 days ago" },
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}