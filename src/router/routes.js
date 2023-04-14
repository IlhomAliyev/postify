import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Error from '../pages/Error';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/*', element: <Posts />, exact: true },
  // { path: '/*', element: <Error />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/about', element: <About />, exact: true },
  { path: '/error', element: <Error />, exact: true },
  { path: '/posts/:id', element: <PostIdPage />, exact: true },
];

export const publicRoutes = [
  { path: '/*', element: <Login />, exact: true },
  { path: '/login', element: <Login />, exact: true },
];