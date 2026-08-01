import {Check, CheckCircle, CheckSquare, ChevronRightIcon, Square, Trash} from "lucide-react";

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  tasks: TaskItem[];
  onTaskClick: (task: TaskItem) => void;
}

function Task({tasks, onTaskClick}: TaskProps) {
  return (
    <div id="tasks" className="space-y-2">
      {tasks.map((task) => 
        <div key={task.id}  className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-indigo-300 bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200 transition ease-linear duration-150">
          <div
            onClick={() => onTaskClick(task)}
            className="inline-flex items-center space-x-2 cursor-pointer"
          >
            <div>
              { task.completed && <CheckSquare />}
              {!task.completed && <Square />}
            </div>
            <div className="text-slate-500">
              {task.completed ? <s>{task.title}</s> : task.title}
            </div>
          </div>
          <button type={"button"}>
            <Trash />
          </button>
        </div>
      )}
    </div>
  )
}

export default Task;