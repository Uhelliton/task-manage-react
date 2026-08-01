import { useState } from "react";
import Task from "./components/Task.tsx";
import CreateTask from "./components/CreateTask.tsx";

function App() {
  const [tasks, setTasks] = useState([
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
    <>
      <h1 className="text-sm text-red-500 font-bold ">
        Hello world!
      </h1>
      <CreateTask/>
      <Task 
        tasks={tasks} 
        onTaskClick={handleTaskComplete}
      />
    </>
  )
}

export default App