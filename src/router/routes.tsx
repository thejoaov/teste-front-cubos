import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import TopBar from '../components/TopBar';
import { CachedInfoProvider } from '../contexts/cachedInfo';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/movie/:id',
      element: <Movie />,
    },
  ]);

  return (
    <CachedInfoProvider>
      <TopBar />

      <RouterProvider router={router} />
    </CachedInfoProvider>
  );
};

export default Routes;
