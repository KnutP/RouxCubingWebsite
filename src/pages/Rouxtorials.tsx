import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TabPanel } from './Rouxsources';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export default function Rouxtorials() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', maxWidth:'1440px' }}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1}}>
                    <Typography variant="h3">Rouxtorials</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>
            <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
                <Tab label={(<Typography variant="h6">Roux for Beginners</Typography>)} />
                <Tab label={(<Typography variant="h6">Roux for Experienced Cubers</Typography>)} />
            </Tabs>
            <TabPanel  value={value} index={0}>
                <Box sx={{ width: '100%', padding: 2}}>
                <Typography gutterBottom>
                    Want to learn how to solve a Rubik's Cube for the first time, or move on from the Layer-by-Layer method?
                    This is the place for you!
                </Typography>
                <Typography variant="h4">Video Tutorials</Typography>
                <ul>
                <li>
                    <Link href="" target="_blank" rel="noopener">
                    Kian's Beginner Roux Tutorial - YouTube
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn" target="_blank" rel="noopener">
                    DeeDubb's Beginner Roux Tutorial - YouTube
                    </Link>
                </li>
                </ul>
                <Typography variant="h4">Text Tutorial</Typography>
                <Typography variant="h6" gutterBottom>
                    Coming soon!
                </Typography>

                {/* <Typography variant="h5" gutterBottom>
                    Notation
                </Typography>
                <Typography gutterBottom>
                    notation info: 
                    https://ruwix.com/the-rubiks-cube/notation/
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 1: First Block
                </Typography>
                <Typography gutterBottom>
                    first block info

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h6" gutterBottom>
                                First Square
                            </Typography>
                            <Typography gutterBottom>
                                how to make a square - examples
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <iframe width="250" height="380" style={{width: '250px', height: '380px', overflow: 'hidden', border: 0}} 
                                src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20D2&colored=DL%20FL%20BL%20DFL%20DBL%20L/m&flags=showalg&pov=Ufl" scrolling="no"></iframe>
                        </Grid>
                    </Grid>

                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 2: Second Block
                </Typography>
                <Typography gutterBottom>
                    second block info
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 3: CMLL
                </Typography>
                <Typography gutterBottom>
                    sune+j-perm, links to 2-look cmll algs
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 4: Last Six Edges
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4a: Edge Orientation
                </Typography>
                <Typography gutterBottom>
                    recognizing bad edges, M U M', EO flowchart
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4b: Solving L and R Edges
                </Typography>
                <Typography gutterBottom>
                    solving LR
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4c: Solving the M-Slice
                </Typography>
                <Typography gutterBottom>
                    4c
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Getting Faster
                </Typography>
                <Typography gutterBottom>
                    roadmap, Kian's videos
                </Typography>
                How to get faster
                https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn */}
                </Box>
            </TabPanel>


            <TabPanel value={value} index={1}>
                <Box sx={{ width: '100%', padding: 2}}>
                <Typography gutterBottom>
                    Already know how to solve the cube using CFOP/ZZ/etc? This is a faster paced Roux tutorial for people who know what they're doing. 
                </Typography>
                <Typography variant="h4">Video Tutorials</Typography>
                <ul>
                <li>
                    <Link href="https://www.youtube.com/watch?v=ESYJ-DFx0Qo&list=PL754ADDA2E38A21AA" target="_blank" rel="noopener">
                    Donovan's Roux Tutorial - YouTube
                    </Link>
                </li>
                </ul>
                <Typography variant="h4">Text Tutorial</Typography>
                <Typography variant="h5" gutterBottom>
                    Coming soon!
                </Typography>

                {/* <Typography variant="h5" gutterBottom>
                    Step 1: First Block
                </Typography>
                <Typography gutterBottom>
                    first block info 
                    https://www.youtube.com/watch?v=ESYJ-DFx0Qo&list=PL754ADDA2E38A21AA
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 2: Second Block
                </Typography>
                <Typography gutterBottom>
                    You can treat second block much like F2L, with one key exception. DON'T ROTATE. Whenever you would normally rotate, 
                    instead use either an M or r move. Also, if pieces are in the bottom layer, take advantage of M and r moves to pair them up.
                    examples
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 3: CMLL
                </Typography>
                <Typography gutterBottom>
                    CMLL, use CFOP algs, link to regular cmll alg sheets
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Step 4: Last Six Edges
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4a: Edge Orientation
                </Typography>
                <Typography gutterBottom>
                    recognizing bad edges (like OLL), M' U M', EO flowchart
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4b: Solving L and R Edges
                </Typography>
                <Typography gutterBottom>
                    solving LR
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4c: Solving the M-Slice
                </Typography>
                <Typography gutterBottom>
                    4c
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Getting Faster
                </Typography>
                <Typography gutterBottom>
                    roadmap, Kian's videos
                </Typography> */}
                </Box>
            </TabPanel>
            </Paper>
        </Box>
        </Box>
    );
}