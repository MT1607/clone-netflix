import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Link,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import IconNetflix from '../../assets/IconNetflix';
import { menuItem } from '@my-project/menu-items';
import { IconSearch, IconCaretDown, IconBell } from '@tabler/icons-react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const BrowserView = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          background: 'transparent',
          backgroundColor: 'black',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Menu */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <IconNetflix />
            <Box>
              {menuItem.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  sx={{ color: 'white', padding: '16px' }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Right Menu */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box>
              <Search>
                <SearchIconWrapper>
                  <IconSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
            <Typography sx={{ paddingRight: '20px' }}>Children</Typography>
            <IconBell style={{ paddingRight: '20px' }} />
            <Box
              sx={{
                border: '1px solid black',
                width: '40px',
                height: '40px',
                backgroundColor: 'white',
                borderRadius: '5px',
              }}
            >
              <Avatar variant="square">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  style={{ width: '40px', height: '40px' }}
                ></img>
              </Avatar>
            </Box>
            <IconCaretDown />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BrowserView;
