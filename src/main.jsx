import React from 'react';
import ReactDOM from 'react-dom/client';

//1 - configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato.jsx';
import Projetos from './pages/Projetos/Projetos.jsx';
import App from './App.jsx';
import ErroPage from './pages/ErroPage/ErroPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/sobre",
//     element: <Sobre />,
//   },
//   {
//     path: "/projetos",
//     element: <Projetos />,
//   },
//   {
//     path: "/contato",
//     element: <Contato />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/projetos",
        element: <Projetos />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ]
  },
]);

//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
