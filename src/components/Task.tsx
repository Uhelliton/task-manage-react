import {ChevronRightIcon} from "lucide-react";

function Task(props) {
  return (
    <div className="bg-slate-100 shadow-sm sm:rounded-lg space-y-2">
      {props.tasks.map((task) => 
        <div key={task.id} className="flex gap-2 rounded-xs p-2">
          <button className="bg-slate-500 w-full">{task.title}</button>
          <span>{task.completed ? 'Completed' : 'Not Completed'}</span>
          <button onClick={() => props.onTaskClick(task)} className="bg-slate-500">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Task;