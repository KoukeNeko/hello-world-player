import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Menu, PlayerBar} from './components'
import { Bookmarks, Favorites, Music, PlayQueue } from './screen';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/music",
    element: <Music />,
  },{
    path: "/queue",
    element: <PlayQueue />,
  },{
    path: "/favorites",
    element: <Favorites />,
  },{
    path: "/bookmarks",
    element: <Bookmarks />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div data-theme="night">
      <div className='flex'>
        <Menu/>
        <div className='relative w-full'>
          <RouterProvider router={router} />
          <PlayerBar/>
        </div>
      </div>
      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();