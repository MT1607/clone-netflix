import { Loadable } from '@my-project/ui-component';
import { lazy } from 'react';
import { MainLoginForm } from '@my-project/login-form';

const SigInPage = Loadable(
  lazy(() =>
    import('@my-project/login-form').then((module) => ({
      default: module.SignIn,
    }))
  )
);
const RegisterPage = Loadable(
  lazy(() =>
    import('@my-project/login-form').then((module) => ({
      default: module.Register,
    }))
  )
);

export const MainLoginFormRoutes = () => {
  return {
    path: '/',
    element: <MainLoginForm />,
    children: [
      {
        path: '/login',
        element: <SigInPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  };
};
