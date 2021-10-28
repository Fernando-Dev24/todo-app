import React, { useState, useEffect, useContext } from 'react';

const TodoAppContexts = React.createContext();
const useTodoAppContexts = () => useContext(TodoAppContexts);

const TodoAppProvider = ({ children }) => {
   const [tasks, setTasks] = useState();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
      setLoading(false);
   }, []);

   return (
      <TodoAppContexts.Provider value={{todoTasks: tasks, setTasks: setTasks}}>
         {!loading && children}
      </TodoAppContexts.Provider>
   );
}
 
export { TodoAppProvider, useTodoAppContexts };