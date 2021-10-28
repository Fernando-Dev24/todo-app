import React from 'react';
import ReactDOM from 'react-dom';
/* Contexts */
import { BrowserRouter } from 'react-router-dom';
import { TodoAppProvider } from './contexts/TodoAppContexts';
/* Components */
import { TodoApp } from './TodoApp';
/* Sources */
import './scss/index.scss';

ReactDOM.render(
   <BrowserRouter>
      <TodoAppProvider>
         <TodoApp/>
      </TodoAppProvider>
   </BrowserRouter>,
   document.getElementById('root')
);