import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function Home() {


    return (
        <Box sx={{ width: '100%' }}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
                    <Typography variant="h3">Home</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                                <Typography variant="h4" gutterBottom>
                                    What is Roux?
                                </Typography>
                                <Typography gutterBottom>
                                    Roux is a Rubik's Cube speed-solving method that is known for its use of block building and slice moves.
                                    It is named after its creator, Gilles Roux. Some quick info about the method:
                                </Typography>
                                <Typography gutterBottom sx={{ml: '15px', mb: '0px' }}>
                                    + Roux has a lower movecount than many other methods, such as CFOP
                                </Typography>
                                <Typography gutterBottom sx={{ml: '15px', mb: '0px' }}>
                                    + Roux doesn't use any cube rotations
                                </Typography>
                                <Typography gutterBottom sx={{ml: '15px', mb: '0px' }}>
                                    + The last step of Roux is completely 2-gen (only uses M and U moves)
                                </Typography>
                                <Typography gutterBottom sx={{ml: '15px'}}>
                                    - Roux is requires more planning than algorithm-heavy methods, so TPS tends to be lower
                                </Typography>
                                <Typography gutterBottom>
                                    Those features make Roux extremely good for One-Handed solving.
                                </Typography>
                                <Typography gutterBottom>
                                    card with discord and FB invites
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                                Roux news and photos
                                <img src={require("../img/roux_worlds_2023.jpg")} style={{ width: '100%'}} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                                <Typography variant="h4" gutterBottom>
                                    Roux Weekly Competition
                                </Typography>
                                <img src={require("../img/Week 496 Results.png")} style={{ width: '100%'}} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                            card with info on how to participate
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                                <Typography variant="h4" gutterBottom>
                                    Rouxer Rankings
                                </Typography>
                                <Typography gutterBottom>
                                    table of rouxer rankings, sortable
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                            card with info on how to get added to list, 
                            form with WCA id and OH only or both, auto email me on submission
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

        </Box>
    );
}