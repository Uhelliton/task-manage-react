function CreateTask() {
    return (
       <form>
         <div className="space-y-12">
           <div className="border-b border-white/10 pb-12">
             <h2 className="text-base/7 font-semibold text-white">Profile</h2>
             <p className="mt-1 text-sm/6 text-gray-400">This information will be displayed publicly so be careful what
               you share.</p>

             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               <div className="sm:col-span-4">
                 <label htmlFor="username" className="block text-sm/6 font-medium text-white">Username</label>
                 <div className="mt-2">
                   <div
                     className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                     <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">workcation.com/</div>
                     <input id="username" type="text" name="username" placeholder="janesmith"
                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"/>
                   </div>
                 </div>
               </div>

               <div className="col-span-full">
                 <label htmlFor="about" className="block text-sm/6 font-medium text-white">About</label>
                 <div className="mt-2">
                  <textarea id="about" name="about" rows="3"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
                 </div>
                 <p className="mt-3 text-sm/6 text-gray-400">Write a few sentences about yourself.</p>
               </div>
             </div>
           </div>
         </div>
       </form>
    )
}

export default CreateTask;