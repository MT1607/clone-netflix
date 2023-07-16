import { useRoutes } from 'react-router-dom';
import { MainLoginFormRoutes } from './LoginFormMainRoutes';

export const UserManagement = () => {
  return useRoutes([MainLoginFormRoutes()]);
};
