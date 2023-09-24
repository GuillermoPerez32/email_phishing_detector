import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { EmailPhishing } from '../pages/EmailPhishing';
import { Metrics } from '../pages/Metrics';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "emails",
          element: <EmailPhishing />,
        },
        {
          path: "metrics",
          element: <Metrics />,
        },
      ],
    },
]);
  

export const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  )
}
