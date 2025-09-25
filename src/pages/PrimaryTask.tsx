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

const primaryTasks: Task[] = [
  // MATH (20)
  { id: "m1", name: "Addition Practice", description: "Solve 20 addition problems", difficulty: "Easy" },
  { id: "m2", name: "Subtraction Drill", description: "Solve 20 subtraction problems", difficulty: "Easy" },
  { id: "m3", name: "Multiplication Table 2–5", description: "Memorize and recite tables", difficulty: "Medium" },
  { id: "m4", name: "Division Practice", description: "Complete 10 simple division problems", difficulty: "Medium" },
  { id: "m5", name: "Word Problems", description: "Solve 5 word-based math problems", difficulty: "Hard" },
  { id: "m6", name: "Fractions Fun", description: "Identify halves, thirds, quarters", difficulty: "Easy" },
  { id: "m7", name: "Decimals", description: "Add and subtract decimals", difficulty: "Medium" },
  { id: "m8", name: "Shapes", description: "Draw and label 6 shapes", difficulty: "Easy" },
  { id: "m9", name: "Angles", description: "Identify right, acute, obtuse angles", difficulty: "Medium" },
  { id: "m10", name: "Perimeter", description: "Measure perimeter of rectangles", difficulty: "Hard" },
  { id: "m11", name: "Area", description: "Find area of simple shapes", difficulty: "Medium" },
  { id: "m12", name: "Telling Time", description: "Read 10 clock examples", difficulty: "Easy" },
  { id: "m13", name: "Money Math", description: "Add coins to make a value", difficulty: "Easy" },
  { id: "m14", name: "Patterns", description: "Complete number patterns", difficulty: "Medium" },
  { id: "m15", name: "Measurement", description: "Measure objects with a ruler", difficulty: "Medium" },
  { id: "m16", name: "Bar Graphs", description: "Create a simple bar graph", difficulty: "Hard" },
  { id: "m17", name: "Place Value", description: "Expand numbers into hundreds/tens/ones", difficulty: "Easy" },
  { id: "m18", name: "Multiplication 6–12", description: "Practice harder tables", difficulty: "Hard" },
  { id: "m19", name: "Division Word Problems", description: "Apply division in stories", difficulty: "Hard" },
  { id: "m20", name: "Math Quiz", description: "Mixed practice of 10 problems", difficulty: "Medium" },

  // READING (15)
  { id: "r1", name: "Storybook Reading", description: "Read 10 pages of a book", difficulty: "Easy" },
  { id: "r2", name: "Silent Reading", description: "Read quietly for 15 minutes", difficulty: "Easy" },
  { id: "r3", name: "Comprehension Questions", description: "Answer 5 questions after reading", difficulty: "Medium" },
  { id: "r4", name: "Summarize Story", description: "Write 3-sentence summary", difficulty: "Medium" },
  { id: "r5", name: "Read Aloud", description: "Read one page aloud", difficulty: "Hard" },
  { id: "r6", name: "New Words", description: "Find and define 3 new words", difficulty: "Medium" },
  { id: "r7", name: "Character Traits", description: "Describe a character", difficulty: "Medium" },
  { id: "r8", name: "Sequence Events", description: "Arrange story events in order", difficulty: "Easy" },
  { id: "r9", name: "Main Idea", description: "Identify main idea of a passage", difficulty: "Medium" },
  { id: "r10", name: "Fiction vs Non-Fiction", description: "Classify 5 books", difficulty: "Easy" },
  { id: "r11", name: "Poetry Reading", description: "Read a short poem aloud", difficulty: "Hard" },
  { id: "r12", name: "Skim & Scan", description: "Find answers quickly in text", difficulty: "Medium" },
  { id: "r13", name: "Predict Ending", description: "Guess how story ends", difficulty: "Easy" },
  { id: "r14", name: "Compare Characters", description: "Compare two characters", difficulty: "Hard" },
  { id: "r15", name: "Book Report", description: "Write 1-paragraph book report", difficulty: "Hard" },

  // WRITING (15)
  { id: "w1", name: "Handwriting", description: "Write alphabet neatly twice", difficulty: "Easy" },
  { id: "w2", name: "Daily Journal", description: "Write 3 sentences about your day", difficulty: "Easy" },
  { id: "w3", name: "Creative Story", description: "Write short story with beginning/middle/end", difficulty: "Medium" },
  { id: "w4", name: "Letter Writing", description: "Write letter to a friend", difficulty: "Medium" },
  { id: "w5", name: "Essay", description: "Write a one-page essay", difficulty: "Hard" },
  { id: "w6", name: "Poem Writing", description: "Write a 4-line poem", difficulty: "Medium" },
  { id: "w7", name: "Spelling Words", description: "Practice 10 spelling words", difficulty: "Easy" },
  { id: "w8", name: "Paragraph Writing", description: "Write a 5-sentence paragraph", difficulty: "Medium" },
  { id: "w9", name: "Instructions", description: "Write steps to make a sandwich", difficulty: "Easy" },
  { id: "w10", name: "Dialogue", description: "Write 4 lines of dialogue", difficulty: "Medium" },
  { id: "w11", name: "Opinion Writing", description: "Write opinion about a topic", difficulty: "Hard" },
  { id: "w12", name: "Descriptive Writing", description: "Describe your classroom", difficulty: "Medium" },
  { id: "w13", name: "Rewrite Ending", description: "Change ending of a story", difficulty: "Hard" },
  { id: "w14", name: "List Making", description: "Write a list of 10 items", difficulty: "Easy" },
  { id: "w15", name: "Comic Strip", description: "Write captions for drawings", difficulty: "Hard" },

  // SCIENCE (15)
  { id: "s1", name: "Plant Parts", description: "Draw and label plant", difficulty: "Easy" },
  { id: "s2", name: "Animal Groups", description: "Classify animals", difficulty: "Medium" },
  { id: "s3", name: "Water Cycle", description: "Draw water cycle diagram", difficulty: "Medium" },
  { id: "s4", name: "Simple Experiment", description: "Mix vinegar & baking soda", difficulty: "Hard" },
  { id: "s5", name: "Planets", description: "List planets in order", difficulty: "Medium" },
  { id: "s6", name: "Human Body", description: "Label 5 body parts", difficulty: "Easy" },
  { id: "s7", name: "States of Matter", description: "Classify solids/liquids/gases", difficulty: "Medium" },
  { id: "s8", name: "Magnets", description: "Test what magnets attract", difficulty: "Medium" },
  { id: "s9", name: "Weather Chart", description: "Record weather for a week", difficulty: "Easy" },
  { id: "s10", name: "Energy Sources", description: "List renewable energy types", difficulty: "Hard" },
  { id: "s11", name: "Food Chain", description: "Draw simple food chain", difficulty: "Medium" },
  { id: "s12", name: "Life Cycle", description: "Draw butterfly life cycle", difficulty: "Medium" },
  { id: "s13", name: "Recycling", description: "Sort trash into bins", difficulty: "Easy" },
  { id: "s14", name: "Experiments Report", description: "Write results of experiment", difficulty: "Hard" },
  { id: "s15", name: "Simple Machines", description: "Identify levers and pulleys", difficulty: "Hard" },

  // SOCIAL STUDIES (10)
  { id: "ss1", name: "Map Skills", description: "Identify 5 countries", difficulty: "Medium" },
  { id: "ss2", name: "Community Helpers", description: "Draw 3 helpers", difficulty: "Easy" },
  { id: "ss3", name: "History Reading", description: "Read about famous leader", difficulty: "Medium" },
  { id: "ss4", name: "Cultural Facts", description: "Write 3 facts about a country", difficulty: "Hard" },
  { id: "ss5", name: "Timeline", description: "Arrange 5 events in order", difficulty: "Medium" },
  { id: "ss6", name: "National Symbols", description: "Draw flag or emblem", difficulty: "Easy" },
  { id: "ss7", name: "Traditions", description: "List 3 family traditions", difficulty: "Easy" },
  { id: "ss8", name: "Famous Places", description: "Find 3 landmarks", difficulty: "Medium" },
  { id: "ss9", name: "Current Events", description: "Read a news story", difficulty: "Hard" },
  { id: "ss10", name: "Community Map", description: "Draw map of your area", difficulty: "Hard" },

  // LOGIC & CRITICAL THINKING (10)
  { id: "l1", name: "Puzzle", description: "Solve 10-piece puzzle", difficulty: "Easy" },
  { id: "l2", name: "Crossword", description: "Complete kids’ crossword", difficulty: "Medium" },
  { id: "l3", name: "Sudoku", description: "Solve 4x4 sudoku", difficulty: "Medium" },
  { id: "l4", name: "Riddles", description: "Answer 3 riddles", difficulty: "Easy" },
  { id: "l5", name: "Logic Game", description: "Solve logic problem", difficulty: "Hard" },
  { id: "l6", name: "Pattern Blocks", description: "Arrange blocks into shape", difficulty: "Easy" },
  { id: "l7", name: "Matching", description: "Match words to pictures", difficulty: "Easy" },
  { id: "l8", name: "Spot Difference", description: "Find 10 differences", difficulty: "Medium" },
  { id: "l9", name: "Maze", description: "Finish maze puzzle", difficulty: "Medium" },
  { id: "l10", name: "Board Game", description: "Play educational board game", difficulty: "Hard" },

  // ARTS & LIFE SKILLS (15)
  { id: "a1", name: "Coloring", description: "Color a picture neatly", difficulty: "Easy" },
  { id: "a2", name: "Drawing", description: "Draw your house", difficulty: "Easy" },
  { id: "a3", name: "Craft", description: "Make paper boat", difficulty: "Easy" },
  { id: "a4", name: "Music", description: "Sing a simple song", difficulty: "Medium" },
  { id: "a5", name: "Drama", description: "Act a short skit", difficulty: "Hard" },
  { id: "a6", name: "Dance", description: "Learn simple dance", difficulty: "Medium" },
  { id: "a7", name: "Cooking", description: "Help prepare sandwich", difficulty: "Easy" },
  { id: "a8", name: "Gardening", description: "Water plants daily", difficulty: "Easy" },
  { id: "a9", name: "Chores", description: "Organize study desk", difficulty: "Easy" },
  { id: "a10", name: "Public Speaking", description: "Give 1-minute talk", difficulty: "Hard" },
  { id: "a11", name: "Teamwork", description: "Work in group task", difficulty: "Medium" },
  { id: "a12", name: "Map Drawing", description: "Sketch treasure map", difficulty: "Medium" },
  { id: "a13", name: "Poster", description: "Make poster about nature", difficulty: "Medium" },
  { id: "a14", name: "Cleaning", description: "Tidy classroom area", difficulty: "Easy" },
  { id: "a15", name: "Mindfulness", description: "Practice 2 minutes breathing", difficulty: "Easy" },
];

export default function PrimaryTasks() {
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
          <h1 className="text-3xl font-bold text-foreground">Primary Institution Tasks</h1>
          <p className="text-muted-foreground mt-2">Complete your daily academic tasks</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Available Tasks</span>
            <Badge variant="outline">{primaryTasks.length} total</Badge>
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
              {primaryTasks.map((task) => (
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
              <span className="text-2xl font-bold">{primaryTasks.length}</span>
            </div>
          </div>
         <div className="mt-2 w-full bg-muted rounded-full h-2">
  <div 
    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
    style={{ width: `${(selectedTasks.size / primaryTasks.length) * 100}%` }}
  />
</div>

        </CardContent>
      </Card>
    </div>
  );
}
