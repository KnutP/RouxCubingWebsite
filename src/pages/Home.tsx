import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

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
                                <Typography variant="h3" gutterBottom>
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
                                    Roux is a method for solving the Rubik's Cube and is named after its creator, Gilles Roux.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={4}>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={8}>
                            <Item>size=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            What is ROUX?
            + Blockbuilding method, invented by Gilles Roux
            + Lower movecount than many other methods, such as CFOP
            + Rotationless
            + Last step is completely 2-gen
            - Less algorithmic and requires more planning, so TPS tends to be lower
            + AMAZING for OH!
            Rouxer rankings - include google form for WCA ID + OH only or both, auto email me on submission
            Discord and FB invites
            Weekly Competition embed
            Roux News
            Rouxer photos


        </Box>
    );
}