import { createBrowserRouter, Navigate } from 'react-router';

import Layout from 'components/layout';

import Example1 from 'pages/example1/example1';

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
      {
        element: <Example1 />,
        path: 'example-1',
      },
    ],
    element: <Layout />,
    path: '/',
  },
]);
