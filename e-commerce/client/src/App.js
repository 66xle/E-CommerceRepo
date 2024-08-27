import Home from './pages/home.js';
import SignIn  from './pages/sign-in.js';
import Cart from './pages/cart.js';
import Root from './pages/root.js';
import CreateAccount from './pages/create-account.js'


import React from 'react';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';



const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home/> } />
    <Route path='sign-in' element={ <SignIn/> } />
    <Route path='cart' element={ <Cart/> } />
    <Route path='create-account' element={ <CreateAccount/> } />
  </Route>
));



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
