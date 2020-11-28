import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DndProvider } from "react-dnd"
import { HTML5Backend as Backend } from "react-dnd-html5-backend"
import { AppStateProvider } from "./AppStateContext"

/* BOOKMARK: PAGE 139 */
/* NEXT SECTION => 'How to Test Your Applications' */

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>      
  </React.StrictMode>,
  document.getElementById('root')
);