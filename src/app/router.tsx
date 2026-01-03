import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import HomePage from '@/pages/Home';
import ResultsPage from '@/pages/Results';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wraps your layout (Header, Footer)
    children: [
      {
        index: true, // This is the default child for "/"
        element: <HomePage />,
      },
      {
        path: 'results',
        element: <ResultsPage />,
      },
    ],
  },
]);
