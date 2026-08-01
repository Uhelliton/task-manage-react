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
  
  const handleTaskComplete = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t));
  }
  
  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  }
  
  const createTask = (title: string) => {
    console.log(title)
    const newTask = {
      id: Date.now(),
      title: title,
      description: 'Description',
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <CreateTask
        createTask={createTask}
      />
      <Task
        tasks={tasks}
        onTaskClick={handleTaskComplete}
        onTaskRemove={removeTask}
      />
      <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
    </div>
  )
}

export default App