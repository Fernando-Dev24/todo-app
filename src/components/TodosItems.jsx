import React from 'react';
/* Contexts */
import { useTodoAppContexts } from '../contexts/TodoAppContexts';
/* Icons */
import { MdDone, MdDelete } from 'react-icons/md';
/* Elements */
import { TodoButton, TodoButtonCompleted } from '../elements/TodoButton';

export const TodosItems = () => {
   /* contexts variables */
   const { todoTasks, setTasks } = useTodoAppContexts();
   
   /* handleCompletedButton function */
   const handleCompletedButton = ({ target }) => {
      const targetTodo = todoTasks.find((todo) => todo.id === target.id);
      const todoIndex = todoTasks.findIndex((todo) => todo.id === target.id);
      if(targetTodo.state === 'active') {
         let newTodosArray = [...todoTasks];
         newTodosArray[todoIndex] = {...newTodosArray[todoIndex], state: 'completed'};
         
         /* Save the changes on localStorage */
         localStorage.setItem('tasks', JSON.stringify(newTodosArray));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      } else {
         let newTodosArray = [...todoTasks];
         newTodosArray[todoIndex] = {...newTodosArray[todoIndex], state: 'active'};

         /* Save the changes on localStorage */
         localStorage.setItem('tasks', JSON.stringify(newTodosArray));
         setTasks(JSON.parse(localStorage.getItem('tasks')));
      }
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
                        {todo.state === 'completed'?
                           <TodoButtonCompleted
                              id={todo.id}
                              onClick={handleCompletedButton}>
                              <MdDone 
                                 className="check__icon"
                              />
                           </TodoButtonCompleted>
                           :
                           <TodoButton
                              id={todo.id}
                              onClick={handleCompletedButton}>
                              <MdDone
                                 className="check__icon"
                              />
                           </TodoButton>
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