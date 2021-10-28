import React from 'react';
import WebFont from 'webfontloader';
import { Switch, Route } from 'react-router-dom';
/* Components */
import { Header } from './components/Header';
import { TodosItems } from './components/TodosItems';
import { TodosItemsCompleted } from './components/TodosItemsCompleted';
import { TodosItemsActive } from './components/TodosItemsActive';
import { Footer } from './components/Footer';

export const TodoApp = () => {
   WebFont.load({
      google: {
         families: ['Poppins:400,500,600']
      }
   });

   return (
      <main>
         <Header />
         <Switch>
            <Route exact={true} path="/" component={TodosItems} />
            <Route path="/completed" component={TodosItemsCompleted} />
            <Route path="/active" component={TodosItemsActive} />
         </Switch>
         <Footer />
      </main>
   );
};