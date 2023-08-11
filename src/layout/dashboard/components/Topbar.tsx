// import { useLocation } from 'react-router-dom';
import {
  IconButton,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { List } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { MuiAppBar } from './style';
import { LayoutContext } from '@src/context/LayoutContext';

export const Topbar = () => {
  const { open, setOpen } = useContext(LayoutContext);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  //   const location = useLocation();
  //   let pageTitle = location.pathname;
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <MuiAppBar position='absolute' open={open}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <List />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {/* {pageTitle} */}DashBoar
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign='center'>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
