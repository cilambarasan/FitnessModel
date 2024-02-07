import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
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

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUp = (e) => {
    e.preventDefault();
    // Check if all fields are not empty
    if (email.trim() !== '' && username.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
      // Navigate to login page
      navigate('/');
    } else {
      // Show alert message if any field is empty
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <StyledBackground />
      <StyledContainer>
        <StyledForm onSubmit={handleSignUp}>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <StyledTextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <StyledTextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <StyledTextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <StyledTextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Sign Up
          </Button>
          <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Already have an account? <Link to="/">Log In</Link>
          </Typography>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default SignUpPage;
