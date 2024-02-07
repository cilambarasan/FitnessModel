import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowBack } from '@mui/icons-material'; // Import icons
import backgroundImage from './1.jpg'; // Import your background image
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

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

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
});

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    // Add your forgot password logic here
    navigate('/');
  };

  return (
    <>
      <StyledBackground />
      <StyledContainer>
        <StyledForm onSubmit={handleForgotPassword}>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" align="center" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Please enter your email address to reset your password.
          </Typography>
          <StyledTextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Reset Password
          </Button>
          <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Remembered your password? <Link to={'/'}>Log In</Link>
          </Typography>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default ForgotPasswordPage;
