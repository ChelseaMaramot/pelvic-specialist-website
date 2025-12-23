import React, { useEffect, useState } from 'react';
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

const pages = ['Home', 'About', 'Services', 'Testimonials', 'FAQ', 'Location'];

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
    height: '85px',
    marginRight: '1.5rem',
    cursor: 'pointer'
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
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'center',
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

  // to automatically scroll from other page if hash available
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, [window.location.hash]); 

  const scrollToSection = (hash) => {
    const sectionId = hash.replace('#', '').toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('header').offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = pages.map((page) => document.getElementById(page.toLowerCase()));
    const options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pageName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
          setSelectedPage(pageName);
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    handleCloseNavMenu();

    const sectionId = page.toLowerCase();
    window.location.hash = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('header').offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }else if (window.location.pathname === '/conditions') {
        window.location.href = `/#${sectionId}`
    }
  };

  const handleLogoClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const navbarHeight = document.querySelector('header').offsetHeight || 0;
      window.scrollTo({
        top: homeSection.offsetTop - navbarHeight - 500,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      const navbarHeight = document.querySelector('header').offsetHeight || 0;
      window.scrollTo({
        top: locationSection.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };


  return (
    <AppBar position={navbarStyles.appBar.position} sx={navbarStyles.appBar}>
      <Container maxWidth={navbarStyles.container.maxWidth}>
        <Toolbar sx={navbarStyles.toolbar}>
          <Box sx={navbarStyles.logoBoxLarge}>
            <img src={logo} alt="Logo" style={navbarStyles.logo}  onClick={handleLogoClick} />
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
          <img src={logo} alt="Logo" style={navbarStyles.logo}  onClick={handleLogoClick} />
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
          <CustomButton text="Contact Me" variant="contained" onClick={handleContactClick} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
