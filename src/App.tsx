import { useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import type { TaskItem } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
    { id: 4, title: 'Task 4', description: 'Description 4', completed: true },
    { id: 5, title: 'Task 5', description: 'Description 5', completed: false },
  ]);

  const options = [
    { label: 'Create a new project', value: 'new' },
    { label: 'Open an existing project', value: 'open' },
    { label: 'Exit', value: 'exit' },
    { label: 'About', value: 'about' },
  ];
  
  const handleTaskComplete = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t));
  }
  
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">

      <CreateTask/>
      <Task
        tasks={tasks}
        onTaskClick={handleTaskComplete}
      />


      <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
    </div>
  )
}

export default App