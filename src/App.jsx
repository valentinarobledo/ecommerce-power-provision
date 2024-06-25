import React from 'react';
import { CartProvider } from './context';
import { RouterProvider} from 'react-router-dom';
import { router } from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas);

import './index.css';


const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} >
      <CartProvider />
    </RouterProvider>
  );
};

export default App;
