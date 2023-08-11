import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '@src/context/LayoutContext';
import { LogoutRounded, Menu } from '@mui/icons-material';
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  styled,
} from '@mui/material';
import { MuiDrawer } from './style';
import { pages } from './pages';
import {
  Dashboard,
  ShoppingCart,
  PeopleAlt,
  Inventory2,
  Layers,
  BarChart,
} from '@mui/icons-material';
const LinkTag = styled(Link)(() => ({
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'poppins',
  color: '#333',
  textDecoration: 'none',
  margin: '0.5rem 0',
}));
export const Sidebar = () => {
  const { open, setOpen } = useContext(LayoutContext);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <MuiDrawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <Menu />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {pages.map((page, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              {page.icon === 'Dashboard' ? (
                <Dashboard />
              ) : page.icon === 'ShoppingCart' ? (
                <ShoppingCart />
              ) : page.icon === 'People' ? (
                <PeopleAlt />
              ) : page.icon === 'Inventory2' ? (
                <Inventory2 />
              ) : page.icon === 'BarChart' ? (
                <BarChart />
              ) : page.icon === 'Layers' ? (
                <Layers />
              ) : page.icon === 'People' ? (
                <PeopleAlt />
              ) : null}
            </ListItemIcon>
            <LinkTag to={page.path}>{page.title}</LinkTag>
          </ListItemButton>
        ))}
        <Divider sx={{ my: 5 }} />
        <ListItemButton>
          <ListItemIcon>
            <LogoutRounded />
          </ListItemIcon>
          <Button>Logout</Button>
        </ListItemButton>
      </List>
    </MuiDrawer>
  );
};
