import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import AboutApp from './ui/AboutApp';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/fast-react-pizza/',
        element: <Home />,
      },
      {
        path: '/fast-react-pizza/aboutApp',
        element: <AboutApp />,
      },
      {
        path: '/fast-react-pizza/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/fast-react-pizza/cart',
        element: <Cart />,
      },
      {
        path: '/fast-react-pizza/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/fast-react-pizza/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: UpdateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
