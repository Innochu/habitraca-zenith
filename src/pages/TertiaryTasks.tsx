import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const tertiaryTasks: Task[] = [
  {
    id: "t1",
    name: "Research Thesis Chapter",
    description: "Complete literature review section for thesis project",
    difficulty: "Hard"
  },
  {
    id: "t2",
    name: "Group Project Presentation",
    description: "Prepare and deliver 15-minute presentation on market analysis",
    difficulty: "Medium"
  }
];

export default function TertiaryTasks() {
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());

  const handleTaskToggle = (taskId: string) => {
    const newSelected = new Set(selectedTasks);
    if (newSelected.has(taskId)) {
      newSelected.delete(taskId);
    } else {
      newSelected.add(taskId);
    }
    setSelectedTasks(newSelected);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";  
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tertiary Institution Tasks</h1>
          <p className="text-muted-foreground mt-2">Complete your daily academic tasks</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Available Tasks</span>
            <Badge variant="outline">{tertiaryTasks.length} total</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Select</TableHead>
                <TableHead>Task Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tertiaryTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedTasks.has(task.id)}
                      onCheckedChange={() => handleTaskToggle(task.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{task.name}</TableCell>
                  <TableCell className="text-muted-foreground">{task.description}</TableCell>
                  <TableCell>
                    <Badge className={getDifficultyColor(task.difficulty)}>
                      {task.difficulty}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Tasks Selected:</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{selectedTasks.size}</span>
              <span className="text-muted-foreground">out of</span>
              <span className="text-2xl font-bold">{tertiaryTasks.length}</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(selectedTasks.size / tertiaryTasks.length) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}