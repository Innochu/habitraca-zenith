import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, Flame, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Habits",
    value: "12",
    change: "+2 this week",
    icon: Target,
    color: "text-primary",
  },
  {
    title: "Completed Today",
    value: "8/12",
    change: "66% completion",
    icon: CheckCircle,
    color: "text-secondary",
  },
  {
    title: "Current Streak",
    value: "15 days",
    change: "Personal best!",
    icon: Flame,
    color: "text-secondary",
  },
  {
    title: "Weekly Progress",
    value: "85%",
    change: "+5% from last week",
    icon: TrendingUp,
    color: "text-primary",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-orange-500 hover:shadow-elegant transition-smooth"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
