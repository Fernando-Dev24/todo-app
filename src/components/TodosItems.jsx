import React from 'react';
/* Contexts */
import { useTodoAppContexts } from '../contexts/TodoAppContexts';
/* Icons */
import { MdDone, MdDelete } from 'react-icons/md';

export const TodosItems = () => {
   /* contexts variables */
   const { todoTasks, setTasks } = useTodoAppContexts();
   
   /* handleCompletedButton function */
   const handleCompletedButton = ({ target }) => {
      if( target.attributes[0].value === 'btn__check' ) {
         const todoIndex = todoTasks.findIndex((todo) => todo.id === target.id);
         let newTodosArray = [...todoTasks];
         newTodosArray[todoIndex] = {...newTodosArray[todoIndex], state: 'completed'};
   
         /* Save the new array to update the localstorage */
         localStorage.setItem('tasks', JSON.stringify(newTodosArray));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      } else {
         const todoIndex = todoTasks.findIndex((todo) => todo.id === target.id);
         let newTodosArray = [...todoTasks];
         newTodosArray[todoIndex] = {...newTodosArray[todoIndex], state: 'active'};
   
         /* Save the new array to update the localstorage */
         localStorage.setItem('tasks', JSON.stringify(newTodosArray));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      };
   };

   /* handleDeleteTodo */
   const handleDeleteTodo = ({ target }) => {
      const newDeleteArray = todoTasks.filter((todo) => todo.id !== target.id);
      localStorage.setItem('tasks', JSON.stringify(newDeleteArray));
      setTasks(JSON.parse(localStorage.getItem('tasks')));
   };

   return (
      <>
         <section className="todos__container container">
            {todoTasks &&
               todoTasks.map((todo) => {
                  return (
                     <article className="todo__item" key={todo.id}>
                        {todo.state === 'completed' ?
                           <button
                              className="btn__check completed"
                              id={todo.id}
                              onClick={handleCompletedButton}>
                              <MdDone className="check__icon" />      
                           </button>
                           :
                           <button
                              className="btn__check"
                              id={todo.id}
                              onClick={handleCompletedButton}>
                              <MdDone className="check__icon" />      
                           </button>
                        }
                        {todo.state === 'completed' ?
                           <h3 className="todo__label completed">{todo.description}</h3>
                           :
                           <h3 className="todo__label">{todo.description}</h3>
                        }
                        <button
                           className="btn__delete"
                           id={todo.id}
                           onClick={handleDeleteTodo}>
                           <MdDelete className="delete__icon" />
                        </button>
                     </article>
                  );
               })
            }
         </section>
      </>
   );
};