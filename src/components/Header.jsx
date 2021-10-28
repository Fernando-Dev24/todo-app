import React from 'react';
/* Components */
import { CreateTodo } from './CreateTodo';

export const Header = () => {
   return (
      <>
         <header className="header">
            <h1 className="title">TODO App</h1>
            <CreateTodo />
         </header>
      </>
   );
};