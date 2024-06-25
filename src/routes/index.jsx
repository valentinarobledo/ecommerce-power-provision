import { Route, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Information from '../pages/Information';
import Payment from '../pages/Payment';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import Base from '../pages/Base';
import Shop from '../pages/Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/information',
        element: <Information />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/base',
        element: <Base />,
      }
    ]
  }
]
);


