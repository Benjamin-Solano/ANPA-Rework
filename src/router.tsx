import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Programas from './pages/Programas';
import Focaba from './pages/Focaba';
import Comunidad from './pages/Comunidad';
import Donar from './pages/Donar';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/programas', element: <Programas /> },
      { path: '/focaba', element: <Focaba /> },
      { path: '/comunidad', element: <Comunidad /> },
      { path: '/donar', element: <Donar /> },
    ],
  },
]);
