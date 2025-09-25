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

const secondaryTasks: Task[] = [
  { id: "t1", name: "Math Practice", description: "Solve 20 algebra equations", difficulty: "Medium" },
  { id: "t2", name: "Book Summary", description: "Write a summary of a chosen chapter", difficulty: "Easy" },
  { id: "t3", name: "Science Project", description: "Build a simple electric circuit", difficulty: "Hard" },
  { id: "t4", name: "Essay Writing", description: "Write a 400-word essay on climate change", difficulty: "Medium" },
  { id: "t5", name: "Vocabulary Quiz", description: "Learn and revise 15 new words", difficulty: "Easy" },
  { id: "t6", name: "Geography Map Work", description: "Label African countries on a blank map", difficulty: "Medium" },
  { id: "t7", name: "Art Sketch", description: "Draw a landscape using pencil shading", difficulty: "Easy" },
  { id: "t8", name: "History Timeline", description: "Create a timeline of Nigerian independence", difficulty: "Medium" },
  { id: "t9", name: "Physics Lab", description: "Experiment on motion and velocity", difficulty: "Hard" },
  { id: "t10", name: "Chemistry Assignment", description: "Balance 15 chemical equations", difficulty: "Hard" },
  { id: "t11", name: "Biology Drawing", description: "Draw and label the digestive system", difficulty: "Easy" },
  { id: "t12", name: "Coding Exercise", description: "Write a simple JavaScript calculator", difficulty: "Hard" },
  { id: "t13", name: "French Vocabulary", description: "Translate 20 English words to French", difficulty: "Medium" },
  { id: "t14", name: "Current Affairs", description: "Prepare a short report on world news", difficulty: "Medium" },
  { id: "t15", name: "Music Practice", description: "Practice 20 minutes of an instrument", difficulty: "Easy" },
  { id: "t16", name: "Debate Prep", description: "Research points for a debate topic", difficulty: "Medium" },
  { id: "t17", name: "Creative Writing", description: "Write a short fictional story", difficulty: "Easy" },
  { id: "t18", name: "Economics Task", description: "Explain demand and supply with examples", difficulty: "Medium" },
  { id: "t19", name: "Math Word Problems", description: "Solve 10 real-life application problems", difficulty: "Hard" },
  { id: "t20", name: "Sports Reflection", description: "Write about your favorite sport", difficulty: "Easy" },
  { id: "t21", name: "Civic Assignment", description: "Discuss the duties of a citizen", difficulty: "Easy" },
  { id: "t22", name: "Biology Research", description: "Prepare a short note on photosynthesis", difficulty: "Medium" },
  { id: "t23", name: "Physics Problems", description: "Solve 5 kinematics questions", difficulty: "Hard" },
  { id: "t24", name: "Chemistry Lab", description: "Test for starch in a solution", difficulty: "Medium" },
  { id: "t25", name: "Literature Review", description: "Summarize the main theme of a novel", difficulty: "Medium" },
  { id: "t26", name: "Spelling Test", description: "Revise 25 spelling words", difficulty: "Easy" },
  { id: "t27", name: "Art Painting", description: "Paint a scenery with watercolors", difficulty: "Medium" },
  { id: "t28", name: "Music Listening", description: "Analyze a piece of classical music", difficulty: "Medium" },
  { id: "t29", name: "Math Geometry", description: "Solve 5 theorems with proofs", difficulty: "Hard" },
  { id: "t30", name: "Computer Task", description: "Design a PowerPoint on technology use", difficulty: "Easy" },
  { id: "t31", name: "Geography Research", description: "Explain the causes of deforestation", difficulty: "Medium" },
  { id: "t32", name: "Biology Diagram", description: "Draw and label a plant cell", difficulty: "Easy" },
  { id: "t33", name: "History Assignment", description: "Write 2 pages on World War I causes", difficulty: "Hard" },
  { id: "t34", name: "French Dialogue", description: "Write a short dialogue in French", difficulty: "Medium" },
  { id: "t35", name: "Math Revision", description: "Practice 10 trigonometry questions", difficulty: "Hard" },
  { id: "t36", name: "Economics Graph", description: "Draw and explain a demand curve", difficulty: "Medium" },
  { id: "t37", name: "Civic Quiz", description: "Answer 10 multiple-choice questions", difficulty: "Easy" },
  { id: "t38", name: "Art Collage", description: "Make a collage on environmental issues", difficulty: "Medium" },
  { id: "t39", name: "Chemistry Drawing", description: "Draw atomic structure of oxygen", difficulty: "Easy" },
  { id: "t40", name: "Physics Project", description: "Make a working model of a pulley", difficulty: "Hard" },
  { id: "t41", name: "Geography Chart", description: "Create a rainfall chart for your city", difficulty: "Medium" },
  { id: "t42", name: "Literature Task", description: "Write character analysis of Macbeth", difficulty: "Hard" },
  { id: "t43", name: "Coding Challenge", description: "Write a Python program for factorial", difficulty: "Hard" },
  { id: "t44", name: "Music Practice", description: "Practice 3 songs on recorder", difficulty: "Easy" },
  { id: "t45", name: "History Quiz", description: "Answer 15 questions on Cold War", difficulty: "Medium" },
  { id: "t46", name: "French Reading", description: "Read and translate a French story", difficulty: "Medium" },
  { id: "t47", name: "Civic Duty", description: "List 5 rights of children", difficulty: "Easy" },
  { id: "t48", name: "Science Fair", description: "Prepare an experiment for science day", difficulty: "Hard" },
  { id: "t49", name: "Essay Writing", description: "Write on the benefits of reading", difficulty: "Medium" },
  { id: "t50", name: "Biology Research", description: "Prepare 1 page on malaria causes", difficulty: "Medium" },
  { id: "t51", name: "Chemistry Practice", description: "Write 5 ionic equations", difficulty: "Hard" },
  { id: "t52", name: "Math Challenge", description: "Solve 10 simultaneous equations", difficulty: "Hard" },
  { id: "t53", name: "Art Craft", description: "Make a paper flower model", difficulty: "Easy" },
  { id: "t54", name: "Geography Essay", description: "Write on the impact of desertification", difficulty: "Medium" },
  { id: "t55", name: "French Test", description: "Revise numbers 1 to 100 in French", difficulty: "Easy" },
  { id: "t56", name: "Physics Quiz", description: "10 questions on laws of motion", difficulty: "Medium" },
  { id: "t57", name: "Economics Note", description: "Explain scarcity with 2 examples", difficulty: "Easy" },
  { id: "t58", name: "Civic Case Study", description: "Discuss leadership qualities", difficulty: "Medium" },
  { id: "t59", name: "Biology Experiment", description: "Test osmosis with potato strips", difficulty: "Hard" },
  { id: "t60", name: "Math Test", description: "Practice 15 probability questions", difficulty: "Hard" },
  { id: "t61", name: "History Research", description: "Write about Nelson Mandela", difficulty: "Medium" },
  { id: "t62", name: "Computer Task", description: "Type a 200-word essay in MS Word", difficulty: "Easy" },
  { id: "t63", name: "Literature Essay", description: "Discuss the theme of love in poetry", difficulty: "Medium" },
  { id: "t64", name: "Physics Practice", description: "Calculate work done in 5 problems", difficulty: "Hard" },
  { id: "t65", name: "Chemistry Lab", description: "Identify acids and bases with litmus", difficulty: "Medium" },
  { id: "t66", name: "Math Graphs", description: "Plot 3 quadratic equations", difficulty: "Hard" },
  { id: "t67", name: "Art Drawing", description: "Sketch a self-portrait", difficulty: "Medium" },
  { id: "t68", name: "Music Theory", description: "Learn 5 musical notations", difficulty: "Easy" },
  { id: "t69", name: "French Essay", description: "Write 100 words about your family", difficulty: "Medium" },
  { id: "t70", name: "Geography Report", description: "Describe the water cycle", difficulty: "Medium" },
  { id: "t71", name: "History Essay", description: "Impact of colonization in Africa", difficulty: "Hard" },
  { id: "t72", name: "Civic Assignment", description: "Define democracy", difficulty: "Easy" },
  { id: "t73", name: "Biology Drawing", description: "Draw and label a heart diagram", difficulty: "Easy" },
  { id: "t74", name: "Math Practice", description: "20 questions on fractions", difficulty: "Medium" },
  { id: "t75", name: "Physics Assignment", description: "Explain Newton’s second law", difficulty: "Medium" },
  { id: "t76", name: "Chemistry Drawing", description: "Draw structure of methane", difficulty: "Easy" },
  { id: "t77", name: "Economics Essay", description: "Write on importance of money", difficulty: "Medium" },
  { id: "t78", name: "French Practice", description: "Learn greetings and introductions", difficulty: "Easy" },
  { id: "t79", name: "Literature Test", description: "Answer 10 poetry questions", difficulty: "Hard" },
  { id: "t80", name: "Computer Science", description: "Write an HTML page with a heading", difficulty: "Hard" },
  { id: "t81", name: "Math Geometry", description: "Solve 5 circle theorem problems", difficulty: "Medium" },
  { id: "t82", name: "Physics Lab", description: "Verify Ohm’s law in circuit", difficulty: "Hard" },
  { id: "t83", name: "Chemistry Quiz", description: "10 questions on periodic table", difficulty: "Easy" },
  { id: "t84", name: "Geography Chart", description: "Draw wind rose diagram", difficulty: "Medium" },
  { id: "t85", name: "Biology Essay", description: "Explain respiration in plants", difficulty: "Medium" },
  { id: "t86", name: "History Project", description: "Research ancient Egypt", difficulty: "Hard" },
  { id: "t87", name: "Civic Reflection", description: "Write on good governance", difficulty: "Medium" },
  { id: "t88", name: "French Practice", description: "Memorize 20 verbs", difficulty: "Medium" },
  { id: "t89", name: "Art Painting", description: "Create a poster on health", difficulty: "Easy" },
  { id: "t90", name: "Music Practice", description: "Practice scales for 15 minutes", difficulty: "Easy" },
  { id: "t91", name: "Math Algebra", description: "Simplify 10 expressions", difficulty: "Medium" },
  { id: "t92", name: "Physics Assignment", description: "Explain energy conservation", difficulty: "Medium" },
  { id: "t93", name: "Chemistry Drawing", description: "Draw structure of NaCl crystal", difficulty: "Hard" },
  { id: "t94", name: "Economics Note", description: "Write on production factors", difficulty: "Easy" },
  { id: "t95", name: "History Quiz", description: "Answer 20 questions on WW2", difficulty: "Hard" },
  { id: "t96", name: "Literature Assignment", description: "Summarize Shakespeare’s sonnet", difficulty: "Medium" },
  { id: "t97", name: "Computer Coding", description: "Write a loop in JavaScript", difficulty: "Medium" },
  { id: "t98", name: "French Test", description: "Translate 10 sentences to French", difficulty: "Medium" },
  { id: "t99", name: "Civic Assignment", description: "List 10 national symbols", difficulty: "Easy" },
  { id: "t100", name: "Biology Project", description: "Create a food chain chart", difficulty: "Medium" }
];

export default function SecondaryTasks() {
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
          <h1 className="text-3xl font-bold text-foreground">Secondary Institution Tasks</h1>
          <p className="text-muted-foreground mt-2">Complete your daily academic tasks</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Available Tasks</span>
            <Badge variant="outline">{secondaryTasks.length} total</Badge>
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
              {secondaryTasks.map((task) => (
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
              <span className="text-2xl font-bold">{secondaryTasks.length}</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(selectedTasks.size / secondaryTasks.length) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
