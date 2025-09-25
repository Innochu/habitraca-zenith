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
  },
  {
    id: "t3",
    name: "Case Study Analysis",
    description: "Analyze provided business case and submit 3-page summary",
    difficulty: "Medium"
  },
  {
    id: "t4",
    name: "Programming Assignment",
    description: "Develop a simple CRUD application using Python or Java",
    difficulty: "Hard"
  },
  {
    id: "t5",
    name: "Lab Experiment Report",
    description: "Conduct chemical titration experiment and document results",
    difficulty: "Hard"
  },
  {
    id: "t6",
    name: "Essay Writing",
    description: "Write a 1000-word essay on globalization effects",
    difficulty: "Medium"
  },
  {
    id: "t7",
    name: "Book Review",
    description: "Read and review an assigned academic textbook chapter",
    difficulty: "Easy"
  },
  {
    id: "t8",
    name: "Data Analysis Task",
    description: "Perform statistical analysis using Excel/SPSS dataset",
    difficulty: "Hard"
  },
  {
    id: "t9",
    name: "Poster Presentation",
    description: "Design a research poster on a scientific innovation",
    difficulty: "Medium"
  },
  {
    id: "t10",
    name: "Peer Review",
    description: "Evaluate a classmate's assignment and give constructive feedback",
    difficulty: "Easy"
  },
  {
    id: "t11",
    name: "Internship Report",
    description: "Write reflective report on internship experience",
    difficulty: "Medium"
  },
  {
    id: "t12",
    name: "Field Research Survey",
    description: "Collect and analyze 20 survey responses from participants",
    difficulty: "Hard"
  },
  {
    id: "t13",
    name: "Seminar Attendance",
    description: "Attend departmental seminar and summarize key insights",
    difficulty: "Easy"
  },
  {
    id: "t14",
    name: "Presentation Slides",
    description: "Create engaging slides for classroom presentation",
    difficulty: "Medium"
  },
  {
    id: "t15",
    name: "Creative Writing Task",
    description: "Write a short story related to a social theme",
    difficulty: "Easy"
  },
  {
    id: "t16",
    name: "Quiz Preparation",
    description: "Study lecture notes and prepare for weekly quiz",
    difficulty: "Easy"
  },
  {
    id: "t17",
    name: "Article Critique",
    description: "Read an academic article and write a critique",
    difficulty: "Medium"
  },
  {
    id: "t18",
    name: "Capstone Project Plan",
    description: "Draft outline of capstone project proposal",
    difficulty: "Hard"
  },
  {
    id: "t19",
    name: "Coding Challenge",
    description: "Solve algorithm problems on an online platform",
    difficulty: "Hard"
  },
  {
    id: "t20",
    name: "Philosophy Debate",
    description: "Participate in classroom debate on ethical issues",
    difficulty: "Medium"
  },
  {
    id: "t21",
    name: "Technical Report",
    description: "Write a technical report on engineering design",
    difficulty: "Hard"
  },
  {
    id: "t22",
    name: "Lab Notebook",
    description: "Maintain detailed notes for weekly biology experiments",
    difficulty: "Medium"
  },
  {
    id: "t23",
    name: "Portfolio Compilation",
    description: "Collect and organize semester-long creative works",
    difficulty: "Medium"
  },
  {
    id: "t24",
    name: "Public Speaking Practice",
    description: "Deliver a 5-minute impromptu talk in class",
    difficulty: "Easy"
  },
  {
    id: "t25",
    name: "Annotated Bibliography",
    description: "Prepare annotated list of 10 academic sources",
    difficulty: "Hard"
  },
  {
    id: "t26",
    name: "Simulation Exercise",
    description: "Participate in role-play for conflict resolution",
    difficulty: "Medium"
  },
  {
    id: "t27",
    name: "Language Translation",
    description: "Translate 500 words of text into a target language",
    difficulty: "Hard"
  },
  {
    id: "t28",
    name: "Film Analysis",
    description: "Watch a documentary and analyze its argument",
    difficulty: "Medium"
  },
  {
    id: "t29",
    name: "Journal Entry",
    description: "Write reflection on weekly learning progress",
    difficulty: "Easy"
  },
  {
    id: "t30",
    name: "Prototype Design",
    description: "Build low-fidelity prototype for product idea",
    difficulty: "Hard"
  },
  {
    id: "t31",
    name: "Policy Review",
    description: "Analyze government policy document for impact",
    difficulty: "Hard"
  },
  {
    id: "t32",
    name: "Mock Interview",
    description: "Practice job interview with peers",
    difficulty: "Medium"
  },
  {
    id: "t33",
    name: "Experiment Replication",
    description: "Repeat a published experiment and compare results",
    difficulty: "Hard"
  },
  {
    id: "t34",
    name: "Creative Poster",
    description: "Make an artistic poster summarizing a concept",
    difficulty: "Easy"
  },
  {
    id: "t35",
    name: "Literary Analysis",
    description: "Analyze a poem and interpret its meaning",
    difficulty: "Medium"
  },
  {
    id: "t36",
    name: "Budget Planning",
    description: "Draft financial plan for student organization",
    difficulty: "Hard"
  },
  {
    id: "t37",
    name: "Article Summary",
    description: "Summarize main points of research article",
    difficulty: "Easy"
  },
  {
    id: "t38",
    name: "Programming Debugging",
    description: "Identify and fix 5 code errors in project",
    difficulty: "Hard"
  },
  {
    id: "t39",
    name: "Statistics Homework",
    description: "Complete set of 10 probability problems",
    difficulty: "Medium"
  },
  {
    id: "t40",
    name: "Mind Map",
    description: "Create mind map of assigned topic",
    difficulty: "Easy"
  },
  {
    id: "t41",
    name: "Music Composition",
    description: "Compose short piece using given musical scale",
    difficulty: "Hard"
  },
  {
    id: "t42",
    name: "Photography Project",
    description: "Capture 5 photos illustrating urban themes",
    difficulty: "Medium"
  },
  {
    id: "t43",
    name: "Reading Quiz",
    description: "Answer quiz on assigned novel chapters",
    difficulty: "Easy"
  },
  {
    id: "t44",
    name: "3D Modeling",
    description: "Design 3D model of building using CAD software",
    difficulty: "Hard"
  },
  {
    id: "t45",
    name: "Ethnographic Notes",
    description: "Observe group behavior and document findings",
    difficulty: "Medium"
  },
  {
    id: "t46",
    name: "News Analysis",
    description: "Compare coverage of event across 3 outlets",
    difficulty: "Medium"
  },
  {
    id: "t47",
    name: "Poetry Recitation",
    description: "Memorize and perform a classic poem",
    difficulty: "Easy"
  },
  {
    id: "t48",
    name: "Software Installation",
    description: "Install and configure academic software tools",
    difficulty: "Easy"
  },
  {
    id: "t49",
    name: "Field Trip Report",
    description: "Write reflective report on museum visit",
    difficulty: "Medium"
  },
  {
    id: "t50",
    name: "Mathematics Proof",
    description: "Prove given theorem step by step",
    difficulty: "Hard"
  },
  {
    id: "t51",
    name: "Short Essay",
    description: "Write 300-word essay on environmental issue",
    difficulty: "Easy"
  },
  {
    id: "t52",
    name: "Lab Simulation",
    description: "Run virtual lab experiment and report results",
    difficulty: "Medium"
  },
  {
    id: "t53",
    name: "Project Proposal",
    description: "Draft proposal for semester-long project",
    difficulty: "Hard"
  },
  {
    id: "t54",
    name: "Critical Thinking Task",
    description: "Solve case scenario requiring logical reasoning",
    difficulty: "Medium"
  },
  {
    id: "t55",
    name: "Literature Presentation",
    description: "Summarize novel themes in class presentation",
    difficulty: "Medium"
  },
  {
    id: "t56",
    name: "Lab Safety Test",
    description: "Pass multiple-choice quiz on lab safety rules",
    difficulty: "Easy"
  },
  {
    id: "t57",
    name: "Market Survey",
    description: "Conduct survey of 30 people about product trends",
    difficulty: "Hard"
  },
  {
    id: "t58",
    name: "Programming Project",
    description: "Develop simple mobile app prototype",
    difficulty: "Hard"
  },
  {
    id: "t59",
    name: "Literature Review",
    description: "Summarize 5 journal articles on chosen topic",
    difficulty: "Hard"
  },
  {
    id: "t60",
    name: "Peer Teaching",
    description: "Teach assigned topic to classmates",
    difficulty: "Medium"
  },
  {
    id: "t61",
    name: "Scientific Diagram",
    description: "Draw and label diagram of experiment setup",
    difficulty: "Easy"
  },
  {
    id: "t62",
    name: "Mock Trial",
    description: "Participate in simulated courtroom activity",
    difficulty: "Medium"
  },
  {
    id: "t63",
    name: "Community Service Log",
    description: "Submit report of 5 volunteer hours",
    difficulty: "Easy"
  },
  {
    id: "t64",
    name: "Art Portfolio",
    description: "Compile 5 artworks with reflection notes",
    difficulty: "Medium"
  },
  {
    id: "t65",
    name: "Engineering Design",
    description: "Create design draft for bridge structure",
    difficulty: "Hard"
  },
  {
    id: "t66",
    name: "Experiment Design",
    description: "Plan experiment with hypothesis and method",
    difficulty: "Hard"
  },
  {
    id: "t67",
    name: "Cultural Research",
    description: "Research cultural practice and present findings",
    difficulty: "Medium"
  },
  {
    id: "t68",
    name: "Short Report",
    description: "Write 1-page summary of lecture",
    difficulty: "Easy"
  },
  {
    id: "t69",
    name: "Presentation Rehearsal",
    description: "Practice speaking with group before event",
    difficulty: "Easy"
  },
  {
    id: "t70",
    name: "Software Demo",
    description: "Demonstrate software tool in front of class",
    difficulty: "Medium"
  },
  {
    id: "t71",
    name: "Survey Design",
    description: "Create survey questions for research study",
    difficulty: "Medium"
  },
  {
    id: "t72",
    name: "Internship Application",
    description: "Prepare CV and cover letter for internship",
    difficulty: "Medium"
  },
  {
    id: "t73",
    name: "Online Discussion",
    description: "Post thoughtful response on class forum",
    difficulty: "Easy"
  },
  {
    id: "t74",
    name: "Graph Plotting",
    description: "Plot given dataset using graphing software",
    difficulty: "Easy"
  },
  {
    id: "t75",
    name: "Seminar Presentation",
    description: "Present research at departmental seminar",
    difficulty: "Hard"
  },
  {
    id: "t76",
    name: "Flashcards Creation",
    description: "Prepare flashcards for exam review",
    difficulty: "Easy"
  },
  {
    id: "t77",
    name: "Coding Documentation",
    description: "Write clear comments for code assignment",
    difficulty: "Medium"
  },
  {
    id: "t78",
    name: "Library Research",
    description: "Find 3 books relevant to project topic",
    difficulty: "Easy"
  },
  {
    id: "t79",
    name: "Experiment Analysis",
    description: "Analyze lab results and write conclusions",
    difficulty: "Hard"
  },
  {
    id: "t80",
    name: "Peer Collaboration",
    description: "Work with group to complete worksheet",
    difficulty: "Medium"
  },
  {
    id: "t81",
    name: "Coding Assignment",
    description: "Implement sorting algorithms in chosen language",
    difficulty: "Hard"
  },
  {
    id: "t82",
    name: "Environmental Project",
    description: "Propose solution for reducing campus waste",
    difficulty: "Medium"
  },
  {
    id: "t83",
    name: "Reading Reflection",
    description: "Write reflection on assigned novel",
    difficulty: "Easy"
  },
  {
    id: "t84",
    name: "Speech Writing",
    description: "Write persuasive speech on given topic",
    difficulty: "Medium"
  },
  {
    id: "t85",
    name: "Data Visualization",
    description: "Create graphs and charts from dataset",
    difficulty: "Hard"
  },
  {
    id: "t86",
    name: "Short Documentary",
    description: "Produce 3-minute video on social issue",
    difficulty: "Hard"
  },
  {
    id: "t87",
    name: "Art Critique",
    description: "Analyze and critique chosen artwork",
    difficulty: "Medium"
  },
  {
    id: "t88",
    name: "Lab Test Preparation",
    description: "Revise lab manual ahead of practical test",
    difficulty: "Easy"
  },
  {
    id: "t89",
    name: "Mock Business Pitch",
    description: "Pitch startup idea in front of peers",
    difficulty: "Hard"
  },
  {
    id: "t90",
    name: "Coding Practice",
    description: "Solve 3 coding problems on online judge",
    difficulty: "Medium"
  },
  {
    id: "t91",
    name: "Theater Performance",
    description: "Perform short play scene with classmates",
    difficulty: "Medium"
  },
  {
    id: "t92",
    name: "Online Quiz",
    description: "Take timed multiple-choice quiz online",
    difficulty: "Easy"
  },
  {
    id: "t93",
    name: "Debate Preparation",
    description: "Research arguments for upcoming debate",
    difficulty: "Medium"
  },
  {
    id: "t94",
    name: "Business Plan",
    description: "Draft detailed plan for startup venture",
    difficulty: "Hard"
  },
  {
    id: "t95",
    name: "Peer Mentoring",
    description: "Assist junior student with study guidance",
    difficulty: "Easy"
  },
  {
    id: "t96",
    name: "Creative Video",
    description: "Record and edit short video project",
    difficulty: "Medium"
  },
  {
    id: "t97",
    name: "Poster Session",
    description: "Present research in poster exhibition",
    difficulty: "Medium"
  },
  {
    id: "t98",
    name: "Math Assignment",
    description: "Solve calculus problem set",
    difficulty: "Hard"
  },
  {
    id: "t99",
    name: "Reflection Essay",
    description: "Write essay reflecting on semester learning",
    difficulty: "Medium"
  },
  {
    id: "t100",
    name: "Final Year Project Draft",
    description: "Submit first draft of final year project",
    difficulty: "Hard"
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
               className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(selectedTasks.size / tertiaryTasks.length) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}