import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './components/Home/Home.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App />}>
      <Route exact path="" element={<Home />} />
      <Route exact path="signup" element={<Home />} />
      <Route exact path="about" element={<Home />} />
      <Route exact path="products" element={<Home />} />
      <Route exact path="pricing" element={<Home />} />
      <Route exact path="support" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
