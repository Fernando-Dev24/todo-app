import styled from "styled-components";

const TodoButton = styled.button`
   width: 3.125rem; /* 50px */
   height: 3.125rem; /* 50px */
   display: grid;
   place-items: center;
   font-size: 1.875rem; /* 30px */
   border: 1px solid #fff;
   border-radius: 50%;
   background: transparent;
   transition: all .3 ease;
   cursor: pointer;
   &:hover {
      transition: all .3s ease;
      color: $primaryColor;
      background: #fff;
      .check__icon {
         opacity: 1;
      }
   }
   .check__icon {
      opacity: 0;
      pointer-events: none;
   }
`;

const TodoButtonCompleted = styled.button`
   width: 3.125rem; /* 50px */
   height: 3.125rem; /* 50px */
   display: grid;
   place-items: center;
   font-size: 1.875rem; /* 30px */
   border: 1px solid #fff;
   border-radius: 50%;
   color: #121212;
   background: #fff;
   transition: all .3 ease;
   cursor: pointer;
   .check__icon {
      opacity: 1;
      pointer-events: none;
   }
`;

export { TodoButton, TodoButtonCompleted };