import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createRoot } from 'react-dom/client';
import { DragDrop } from './Components/DragDrop';
import './style.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <DragDrop />
      </div>
    </DndProvider>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
