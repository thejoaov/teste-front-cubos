import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Film from '../pages/Film';
import TopBar from '../components/TopBar';
import { CachedInfoProvider } from '../contexts/cachedInfo';

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

  return (
    <CachedInfoProvider>
      <TopBar />
      <RouterProvider router={router} />;
    </CachedInfoProvider>
  );
};

export default Routes;
