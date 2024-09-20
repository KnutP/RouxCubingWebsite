import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function Home() {


    return (
        <Box sx={{ width: '100%' }}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: '15px', my: '20px' }}>
                    <Typography variant="h3">Home</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h4" gutterBottom>
                                    What is Roux?
                                </Typography>
                                <Typography gutterBottom>
                                    Roux is a method for solving the Rubik's Cube and is named after its creator, Gilles Roux.
                                </Typography>
                                <Typography gutterBottom>
                                    + Lower movecount than many other methods, such as CFOP
                                </Typography>
                                <Typography gutterBottom>
                                    + Rotationless
                                </Typography>
                                <Typography gutterBottom>
                                    + Last step is completely rotationless
                                </Typography>
                                <Typography gutterBottom>
                                    - Less algorithmic and requires more planning, so TPS tends to be lower
                                </Typography>
                                <Typography gutterBottom>
                                    Really good for OH!
                                </Typography>
                                <Typography gutterBottom>
                                    card with discord and FB invites
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={4}>
                            Roux news and photos
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h4" gutterBottom>
                                    Roux Weekly Competition
                                </Typography>
                                <Typography gutterBottom>
                                    Results image
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={4}>
                            card with info on how to participate
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h4" gutterBottom>
                                    Rouxer Rankings
                                </Typography>
                                <Typography gutterBottom>
                                    table of rouxer rankings, sortable
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={4}>
                            card with info on how to get added to list, 
                            form with WCA id and OH only or both, auto email me on submission
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

        </Box>
    );
}