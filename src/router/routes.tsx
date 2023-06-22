import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import TopBar from '../components/TopBar';
import { CachedInfoProvider } from '../contexts/cachedInfo';
import { getMovieById } from '../services/api';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/movie/:id',
      element: <Movie />,
      loader: async ({ params }) => {
        if (!params.id) throw new Error('Movie id not provided');
        const { data } = await getMovieById(params.id);
        return data;
      },
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
