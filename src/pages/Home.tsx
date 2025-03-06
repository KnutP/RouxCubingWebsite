import * as React from 'react';
// import { useState, useEffect } from "react";
import { Box, Typography, Paper, Card, CardActions, CardContent, CardMedia, Button, IconButton, Link} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import CompPost from './CompPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReddit, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

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
                                    According to the {" "}
                                    <Link href="https://www.speedsolving.com/wiki/index.php/Roux_method" target="_blank" rel="noopener">
                                    Speedsolving Wiki
                                    </Link>, Roux (French: [ʁu], English: [ɹuː] ROO) is a Rubik's cube speedsolving method invented by Gilles Roux, and is based on Blockbuilding and Corners First methods. 
                                    Some quick info about the method:
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
                                    Those features make Roux competetive with other speedsolving methods, and make it arguably the best method for One-Handed solving.
                                </Typography>
                                <Typography gutterBottom>
                                    Want to join the Roux community? Join our Discord, Facebook Group, and/or subreddit!
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
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: '100%', padding: 1 }}>
                                <img src={require("../img/roux_worlds_2023.jpg")} style={{ width: '100%'}} />
                                <Card sx={{ width: '100%' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        World Championship 2023 Roux Group Photo
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        test
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%-15px', mx: '15px', my: '10px' }}>
                    <Box sx={{ width: '100%', padding: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Roux Weekly Competition
                        </Typography>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'left',}}>
                            <img src={require("../img/Week 496 Results.png")} style={{ maxWidth: '1080px', width: '100%'}} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', padding: 1 }}>
                        <Accordion sx={{ bgcolor: 'palette.background.paper' }}>
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
        </Box>
    );
}