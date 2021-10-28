import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
/* Contexts */
import { useTodoAppContexts } from '../contexts/TodoAppContexts'

const FooterLink = styled(NavLink)`
   margin-right: 1.25rem; /* 20px */
   text-decoration: none;
   font-size: 1rem; /* 16px */
   font-weight: 500;
   color: #565656;
   transition: all .3s ease;
   &:hover {
      color: #fff;
   }
   &.active {
      color: #fff;
   }
   /* Media queries */
   @media screen and (max-width: 768px) {
      margin-right: ${props => props.marginright ? '20px' : '0'};
      font-size: 1.125rem; /* 18px */
   }
`;

export const Footer = () => {
   /* contexts variables */
   const { todoTasks, setTasks } = useTodoAppContexts();

   /* handleDeleteTodos */
   const handleDeleteTodos = () => {
      localStorage.setItem('tasks', JSON.stringify([]));
      setTasks(JSON.parse(localStorage.getItem('tasks')));
   };

   return (
      <footer className="footer container">
         <nav className="footer__navbar">
            <FooterLink to="/" exact={true} marginright="true">All</FooterLink>
            {todoTasks &&
               <>
                  <FooterLink to="/completed" marginright="true">Completed</FooterLink>
                  <FooterLink to="/active">Active</FooterLink>
               </>
            }
         </nav>
         <button 
            className="btn__reset"
            onClick={handleDeleteTodos}>
            Delete All
         </button>
      </footer>
   )
}
