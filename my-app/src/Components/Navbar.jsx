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
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <img
            src={logo}
            alt="Logo"
            style={{
              height: '65px',
            }}
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page, index) => (
              <StyledButton
                key={page}
                onClick={() => handlePageSelect(page)} 
                selected={selectedPage === page}
              >
                {page}
              </StyledButton>
            ))}
          </Box>

          <CustomButton text="Contact Me" />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
