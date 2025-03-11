import { createBrowserRouter, Navigate } from 'react-router';

import Canvas from 'components/canvas';
import Layout from 'components/layout';

import { pagesConfig } from 'pages/main';

const routes = Object.entries(pagesConfig).map(([path, config]) => ({
  element: <Canvas onRender={config.onRender} />,
  path,
}));

export const router = createBrowserRouter([
  {
    children: [
      {
        element: (
          <Navigate
            replace
            to="/example-1"
          />
        ),
        index: true,
      },
      ...routes,
    ],
    element: <Layout />,
    path: '/',
  },
]);
