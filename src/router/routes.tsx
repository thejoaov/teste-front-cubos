import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Film from '../pages/Film';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/film/:id',
      element: <Film />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
