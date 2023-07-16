import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

import { MainLoginForm, SignIn } from '@my-project/login-form';
import { CssBaseline } from '@mui/material';

import { UserManagement } from '@my-project/routes';

const Main = styled('div')({
  width: '100%',
  height: '100vh',
  margin: '0',
});

export function App() {
  return (
    <Main>
      <CssBaseline />
      <UserManagement />
    </Main>
  );
}

export default App;
