import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from './1.jpg'; // Import your background image
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const StyledBackground = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1, // Ensure the background is behind other content
});

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Increase transparency
  backdropFilter: 'blur(4px)', // Add backdrop filter for blur effect
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      // Navigate to home page
      navigate('/home');
    } else {
      // Show alert message if fields are empty
      alert('Please enter both username and password.');
    }
  };

  return (
    <>
      <StyledBackground />
      <StyledContainer>
        <StyledForm onSubmit={handleLogin}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
          <Link to="/forgot" style={{ marginTop: '1rem', textAlign: 'center', display: 'block' }}>
            Forgot Password?
          </Link>
          <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Don't have an account? <Link to="/sign">Sign Up</Link>
          </Typography>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginPage;
