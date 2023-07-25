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
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useCreateUserMutation } from '@my-project/redux';
import bcrypt from 'bcryptjs';

import MySwal from 'sweetalert2';

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
    width: '50%',
    top: '60%',
  },

  '@media (max-width: 400px)': {
    width: '80%',
  },
});

export const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const [type, setType] = useState('password');

  const [
    createUser,
    { data: createUserResponse, isLoading: creating, error: createUserError },
  ] = useCreateUserMutation();

  const handleIsShowPassword = () => {
    setIsShow(!isShow);
    if (!isShow) {
      setType('text');
    } else {
      setType('password');
    }
  };

  useEffect(() => {
    if (createUserResponse !== undefined) {
      if (createUserResponse.status === 201) {
        MySwal.fire({
          title: 'Success!',
          text: 'Your account was successfully registed.',
          icon: 'success',
        });
      }
    }
  }, [createUserResponse]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: yup.object({
      username: yup.string().required('Name is required'),
      email: yup.string().email().required('Email is required'),
      password: yup
        .string()
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
      confirm_password: yup
        .string()
        .required('Confirm password is required')
        .oneOf(
          [yup.ref('password')],
          'Confirm password not match with your password'
        ),
    }),
    onSubmit: async (values) => {
      const { confirm_password, ...bodyCreateUser } = values;
      await createUser({
        ...bodyCreateUser,
        password: bcrypt.hashSync(values.password, 5),
      });
    },
  });

  return (
    <CardLogin>
      <Typography
        sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}
      >
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Name"
          size="small"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ width: 'calc(100% - 32px)', margin: '16px' }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          size="small"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleIsShowPassword()}>
                {isShow ? <IconEyeOff /> : <IconEye />}
              </IconButton>
            ),
          }}
        />
        <TextField
          fullWidth
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          size="small"
          type={type}
          sx={{ width: 'calc(100% - 32px)', margin: '16px' }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm_password}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
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
          Have account,{' '}
          <Link href="/login" sx={{ cursor: 'pointer' }}>
            sign in
          </Link>{' '}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          disableRipple
          type="submit"
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
          <Typography>Register</Typography>
        </Button>
      </form>
    </CardLogin>
  );
};
