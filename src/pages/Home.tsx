import * as React from 'react';
// import { useState, useEffect } from "react";
import { Box, Typography, Paper, Card, CardActions, CardContent, CardMedia, Button, IconButton, Link} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import CompPost from './CompPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReddit, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { indigo, deepPurple} from '@mui/material/colors';
import Slider from 'react-slick';

export default function Home() {

    const carousel_slides = [
    { src: require('../img/roux_worlds_2025.jpg'), caption: 'Worlds 2025 Roux Group Photo' },
    { src: require('../img/roux_worlds_2023.jpg'), caption: 'Worlds 2023 Roux Group Photo' },
    { src: require('../img/roux_euros_2024.jpg'), caption: 'Euros 2024 Roux Group Photo' },
    { src: require('../img/roux_worlds_2019.jpg'), caption: 'Worlds 2019 Roux Group Photo' },
    ];

    const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', maxWidth:'1440px' }}>
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
                                    Roux is a Rubik's cube speedsolving method invented by Gilles Roux, and is based on blockbuilding and the Corners First method. 
                                    Some quick info about the method:
                                </Typography>
                                <Typography gutterBottom sx={{ml: '15px', mb: '0px' }}>
                                    + Roux has a lower movecount than many other methods, such as CFOP or ZZ
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
                                    Want to learn more? Check out the "Rouxtorials" page for tutorials on how to solve the Rubik's cube using the Roux method,
                                    the "Rouxsources" page for a compilation of various resources for improving at Roux,
                                    and the "Rouxdmap To Sub-X" for info on how to get faster.
                                </Typography>
                                <Typography gutterBottom>
                                    Have questions or want to join the Roux community? Join our Discord, Facebook Group, and/or subreddit!
                                </Typography>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                                    <IconButton
                                        color="primary" aria-label="discord" size="large"
                                        onClick={() => window.open('https://discord.gg/VJunGCZBGZ')}
                                    >
                                        <FontAwesomeIcon icon={faDiscord} />
                                    </IconButton>
                                    <IconButton
                                        color="primary" aria-label="facebook" size="large"
                                        onClick={() => window.open('https://www.facebook.com/groups/1482303418674425/')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </IconButton>
                                    <IconButton
                                        color="primary" aria-label="reddit" size="large"
                                        onClick={() => window.open('https://www.reddit.com/r/rouxcubing/')}>
                                        <FontAwesomeIcon icon={faReddit} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center" size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
                                <Slider {...sliderSettings}>
                                {carousel_slides.map((slide, idx) => (
                                    <Box key={idx} sx={{ textAlign: 'center' }}>
                                        <Box
                                        component="img"
                                        src={slide.src}
                                        alt={`slide-${idx}`}
                                        sx={{ width: '100%', borderRadius: 0 }}
                                        />
                                        <Typography variant="subtitle1" sx={{ mt: 1 }}>
                                        {slide.caption}
                                        </Typography>
                                    </Box>
                                    ))}
                                </Slider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px', padding: 1 }}>
                    <Typography variant="h4" gutterBottom>
                        Is Roux a Competitive Method?
                    </Typography>
                    <Typography gutterBottom>
                        Since the inception of the Roux method, there has been debate over how it compares to other methods, and if it is competitive as a 3x3 speedsolving method.
                        Qualitative comparisons are difficult, so what if we look at how Roux keeps pace with other methods statistically?
                    </Typography>
                    <Typography gutterBottom>
                        According to the last couple <Link href="https://basilio.dev/cubing/megasurvey6/" target="_blank" rel="noopener">r/cubers megasurveys
                        </Link> (thank you Bas for the amazing analysis!), Roux solvers make up ~6% of the speedcubing population (or at least of those that fill out surveys on reddit).
                        Based on that, if Roux is keeping pace competetively, we should expect to see a similar percentage of Roux solvers in the top rankings.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h6" sx={{ minHeight: "3rem", textAlign: "center" }} gutterBottom>
                                    Overall Method Distribution
                                </Typography>
                                <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 84, label: 'CFOP' },
                                        { id: 1, value: 6, label: 'Roux' },
                                        { id: 2, value: 3, label: 'Method Neutral' },
                                        { id: 3, value: 3, label: 'Beginner' },
                                        { id: 4, value: 3, label: 'ZZ' },
                                        { id: 5, value: 1, label: 'Other' },
                                    ],
                                    },
                                ]}
                                colors={[indigo[500], deepPurple[500], indigo[900], indigo[700], indigo[300], indigo[100]]}
                                width={280}
                                height={200}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h6" sx={{ minHeight: "3rem", textAlign: "center" }} gutterBottom>
                                    3x3 Average Top 100 Rankings
                                </Typography>
                                <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 6, label: 'Roux Solvers' },
                                        { id: 1, value: 94, label: 'Other' },
                                    ],
                                    startAngle: -21.6,
                                    },
                                ]}
                                colors={[deepPurple[500], indigo[500]]}
                                width={280}
                                height={200}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ width: '100%', padding: 1 }} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h6" sx={{ minHeight: "3rem", textAlign: "center" }} gutterBottom>
                                    3x3 One-Handed Average Top 100 Rankings
                                </Typography>
                                <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 34, label: 'Roux Solvers' },
                                        { id: 1, value: 66, label: 'Other' },
                                    ],
                                    startAngle: -122.4,
                                    },
                                ]}
                                colors={[deepPurple[500], indigo[500]]}
                                width={280}
                                height={200}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography gutterBottom>
                        Based on the current top 3x3 rankings, we see that Roux users are keeping up with other methods. However, for the top One-Handed rankings,
                         Roux solvers are vastly over-represented. While not conclusive, it is certainly possible to be competitive with Roux for 3x3, and if you want to 
                        get good at one-handed, Roux is definitely worth a look!

                    </Typography>
                </Box>
            </Paper>


            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Box sx={{ width: '100%', padding: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Roux Weekly Competition
                        </Typography>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center',}}>
                            <img src={require("../weeklycomp/results.png")} style={{ maxWidth: '1080px', width: '100%'}} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', padding: 1 }}>
                        <Accordion sx={{ border: 1, bgcolor: 'palette.background.paper' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" component="span">Scrambles for this week:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <CompPost></CompPost>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Paper>

{/* 
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
            </Paper> */}


        </Box>
        </Box>
    );
}