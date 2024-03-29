"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Link from "next/link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useCart } from "@/contexts/CartContext";

const drawerWidth = 240;
const navItems = [
  { title: 'Home', link: "/" },
  { title: 'About', link: "/about" },
  // {title: 'Cart', link: "/cart"}
];

export default function DrawerAppBar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const {cart, dispatch} = useCart();
  // dispatch({type: "addToCart"})

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Commerce Website
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.title} href={item.link}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            E-Commerce Website
          </Typography>
          <Box sx={{
            display: { xs: 'none', sm: 'block' },
          }}>
            {navItems.map((item) => (
              <Link key={item.title} href={item.link}>
                <Button sx={{ color: '#fff' }}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <ButtonBase sx={{ marginLeft: 'auto', position: 'relative', padding: "4px" }}>
            <Link href="/cart">
              <Box>
                <ShoppingCartIcon />
                <Box
                  sx={{

                    height: '15px',
                    width: '15px',
                    padding: '2px',
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '10px',
                    background: '#000',
                    borderRadius: '50%',
                    fontWeight: 'bold',
                  }}>
                  {/*cart.length*/}
                </Box>
              </Box>
            </Link>
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}
