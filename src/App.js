import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { AccountCircle, ThumbUp } from '@mui/icons-material';

const App = () => {
  const [exercises, setExercises] = useState([
    { name: 'Running', duration: 30 },
    { name: 'Cycling', duration: 45 },
    { name: 'Swimming', duration: 60 }
  ]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');

  const handleExerciseSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      name: exerciseName,
      duration: exerciseDuration
    };
    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setExerciseDuration('');
  };

  return (
    <Container style={{ marginTop: '2rem', backgroundColor: '#f0f8ea', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '2rem', textAlign: 'center', color: '#228B22' }}>
        Fitness Tracking App
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Log Exercise
            </Typography>
            <form onSubmit={handleExerciseSubmit}>
              <TextField
                label="Exercise Name"
                variant="outlined"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                fullWidth
                style={{ marginBottom: '1rem' }}
                required
              />
              <TextField
                label="Duration (minutes)"
                variant="outlined"
                type="number"
                value={exerciseDuration}
                onChange={(e) => setExerciseDuration(e.target.value)}
                fullWidth
                required
                style={{ marginBottom: '1rem' }}
              />
              <Button variant="contained" color="primary" type="submit">
                Log Exercise
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Progress Tracker
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {exercises.map((exercise, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Typography variant="body1" style={{ color: '#333' }}>
                    {exercise.name} - {exercise.duration} minutes
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Social Feed
            </Typography>
            <List>
              <ListItem disablePadding style={{ marginBottom: '1rem' }}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Arun liked your post" />
                <ListItemIcon>
                  <ThumbUp />
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Bhaktha shared a new Exercise" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Leaderboard
            </Typography>
            <Typography variant="body1" style={{ color: '#333' }}>
              1. Dharshan - 150 points
              <br />
              2. Cilambu(You) - 120 points
              <br />
              3. Maruthu - 90 points
              <br />
              4. Arun - 80 points
              <br />
              5. Bhaktha - 70 points
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Recommendations
            </Typography>
            <Typography variant="body1" style={{ color: '#333' }}>
              - Try adding a new exercise daily.
              <br />
              - Increase the intensity of your workouts gradually.
              <br />
              - Stay hydrated during workouts.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#228B22' }}>
              Notifications
            </Typography>
            <Typography variant="body1" style={{ color: '#333' }}>
              - John liked your post.
              <br />
              - Alice mentioned you in a comment.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
