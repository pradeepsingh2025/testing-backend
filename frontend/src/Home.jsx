import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  IconButton,
} from '@mui/material';

import {
  Menu as MenuIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import { useNavigate, useLocation } from 'react-router-dom';

const LandingPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const data = location.state;
   const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TechSolutions
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 4, textAlign: 'center', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {data.email}
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Innovative solutions for modern enterprises.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
};

export default LandingPage;