import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
/* Contexts */
import { useTodoAppContexts } from '../contexts/TodoAppContexts';

export const CreateTodo = () => {
   /* contexts variables */
   const { todoTasks, setTasks } = useTodoAppContexts();
   
   /* State variables */
   const [todoValue, setTodoValue] = useState('');

   /* saveTask function */
   const saveTask = ( todoValue ) => {
      /* Create a new task */
      const newTask = {
         id: uuidv4(),
         state: 'active',
         description: todoValue
      };

      /* Save task on localStorage */
      if( todoTasks ) {
         todoTasks.push(newTask);
         localStorage.setItem('tasks', JSON.stringify(todoTasks));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      } else {
         localStorage.setItem('tasks', JSON.stringify([newTask]));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      };
   };

   /* handleSubmit */
   const handleSubmit = (e) => {
      e.preventDefault();

      /* Validation */
      if( todoValue === '') {
         console.log('Please, write a task');
         return;
      } else {
         saveTask( todoValue );
         setTodoValue('');
      }
   };

   return (
      <form className="form container" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Create a new TODO..."
            value={todoValue}
            onChange={({target}) => setTodoValue(target.value)}
         />
      </form>
   );
};