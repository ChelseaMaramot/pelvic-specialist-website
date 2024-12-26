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
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  logo: {
    height: '65px',
  },
  menuIcon: {
    color: 'inherit',
  },
  menuItem: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageSelect(page)}>
                  <Typography sx={navbarStyles.menuItem}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <img
            src={logo}
            alt="Logo"
            style={navbarStyles.logo}
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />

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
