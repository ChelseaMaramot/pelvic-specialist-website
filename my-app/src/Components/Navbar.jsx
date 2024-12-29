import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from './CustomButton'; 
import { styled } from '@mui/system';

import logo from '../Assets/logo.png';
import rightArrow from '../Assets/right-arrow.png'; 

const pages = ['Home', 'About', 'Services', 'Location'];

const fontStyles = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '16',
  letterSpacing: '-0.05em',
};

const StyledButton = styled(Button)(({ theme, selected }) => ({
  ...fontStyles,
  my: 2,
  color: selected ? '#8447E9' : 'black',
  display: 'block',
  textTransform: 'none',
  marginRight: theme.spacing(7),
}));

const ContactButton = styled(Button)(({ theme }) => ({
  ...fontStyles,
  backgroundColor: '#8447E9',
  color: 'white',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#6e39c2',
  },
  textTransform: 'none',
  borderRadius: 0,
}));

const navbarStyles = {
  appBar: {
    position: 'sticky',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    boxShadow: 'none',
    top: 0, 
    zIndex: 1300, 
    backdropFilter: 'blur(12px)',
  },
  container: {
    maxWidth: 'xl',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    flexGrow: 0,
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center', 
    justifyContent: 'flex-end', 
  },
  logo: {
    height: '65px',
    marginRight: '1.5rem', // Adjust this margin to control space between logo and items
  },
  menuIcon: {
    color: '#8447E9',
  },
  menuItem: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
  },
  logoBoxSmall: {
    display: { xs: 'flex', md: 'none' }, // Display logo on small screens only
    justifyContent: 'center', // Center logo on small screens
    flexGrow: 1,
  },
  logoBoxLarge: {
    display: { xs: 'none', md: 'flex' }, 
    flexGrow: 0,
    justifyContent: 'flex-start',
  },
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(pages[0]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar position={navbarStyles.appBar.position} sx={navbarStyles.appBar}>
      <Container maxWidth={navbarStyles.container.maxWidth}>
        <Toolbar sx={navbarStyles.toolbar}>
        <Box sx={navbarStyles.logoBoxLarge}>
            <img
              src={logo}
              alt="Logo"
              style={navbarStyles.logo}
            />
          </Box>

          <Box sx={navbarStyles.box}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={navbarStyles.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageSelect(page)}>
                  <Typography sx={navbarStyles.menuItem}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={navbarStyles.logoBoxSmall}>
            <img
              src={logo}
              alt="Logo"
              style={navbarStyles.logo}
            />
          </Box>

          <Box sx={navbarStyles.buttonContainer}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={() => handlePageSelect(page)} 
                selected={selectedPage === page}
              >
                {page}
              </StyledButton>
            ))}
          </Box>
          <CustomButton text="Contact Me" variant="contained" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
