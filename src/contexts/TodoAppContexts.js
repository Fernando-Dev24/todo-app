import React, { useState, useEffect, useContext } from 'react';

const TodoAppContexts = React.createContext();
const useTodoAppContexts = () => useContext(TodoAppContexts);

const TodoAppProvider = ({ children }) => {
   const [tasks, setTasks] = useState();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const existingTodosArray = JSON.parse(localStorage.getItem('tasks'));
      if(existingTodosArray) {
         setTasks(JSON.parse(localStorage.getItem('tasks')));
         setLoading(false);
      } else {
         localStorage.setItem('tasks', JSON.stringify([]));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
         setLoading(false);
      }
   }, []);

   return (
      <TodoAppContexts.Provider value={{todoTasks: tasks, setTasks: setTasks}}>
         {!loading && children}
      </TodoAppContexts.Provider>
   );
}
 
export { TodoAppProvider, useTodoAppContexts };