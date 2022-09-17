import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chapters from './components/Chapters';
import Content from './components/Content';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/physics" element={<Chapters />}></Route>
      <Route path="/maths" element={<Chapters />}></Route>
      <Route path="/content" element={<Content />}></Route>
    </Routes>
  </BrowserRouter>
);

