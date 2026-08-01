import { Plus } from 'lucide-react';
import { JSX, useState } from "react";

type CreateTaskProps = {
  createTask: (title: string) => void;
};

function CreateTask({ createTask }: CreateTaskProps) : JSX.Element {
  const [title, setTitle] = useState('');
  
  const handleSubmit = () => {
    console.log('chegou aqui')
    createTask(title)
    setTitle('')
  }
  
    return (
       <form className="mb-4">
         <div className="flex flex-row justify-between items-center">
           <div className="inline-flex space-x-2 items-center">
             <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
             />
             <button
               type={'button'}
               onClick={handleSubmit}
                className="p-2.5 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
               <Plus className="w-4 h-4"/>
               <span className="text-sm font-medium hidden md:block">ADD</span>
             </button>
           </div>
         </div>
       </form>
    )
}

export default CreateTask;