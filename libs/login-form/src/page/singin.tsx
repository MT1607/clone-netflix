import {
  Button,
  Divider,
  IconButton,
  Link,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useState } from 'react';

const CardLogin = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: `#ffffff`,
  border: '1px solid black',
  borderRadius: '16px',
  width: '400px',
  height: 'auto',

  '@media (max-width: 960px)': {
    width: '80%',
  },

  '@media (max-width: 600px)': {
    width: '90%',
  },
});

export const SignIn = () => {
  const [isShow, setIsShow] = useState(false);
  const [type, setType] = useState('password');

  const handleIsShowPassword = () => {
    setIsShow(!isShow);
    if (!isShow) {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <CardLogin>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        size="small"
        sx={{ width: 'calc(100% - 32px)', margin: '16px' }}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        size="small"
        type={type}
        sx={{ width: 'calc(100% - 32px)', margin: '16px' }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => handleIsShowPassword()}>
              {isShow ? <IconEyeOff /> : <IconEye />}
            </IconButton>
          ),
        }}
      />

      <Divider sx={{ margin: '5px 16px' }} />
      <Typography sx={{ padding: '5px 16px' }}>
        Don't have account, <Link sx={{ cursor: 'pointer' }}>create one</Link>{' '}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        disableRipple
        sx={{
          left: '50%',
          marginBottom: '16px',
          transform: 'translate(-50%, 0)',
          '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            transition: 'all 0.5s',
            boxShadow: '0 0 10px 10px rgba(0, 123, 255, 0.5)',
          },

          '&:active::after': {
            boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.5)',
            position: 'absolute',
            borderRadius: '5px',
            left: 0,
            top: 0,
            opacity: 1,
            transition: '0s',
          },
        }}
      >
        <Typography>Login</Typography>
      </Button>
    </CardLogin>
  );
};
