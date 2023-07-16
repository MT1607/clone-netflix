import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const MainLoginForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Box>
        <Typography
          sx={{ textAlign: 'center', fontSize: '50px', marginBottom: '16px' }}
        >
          NGS
        </Typography>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
