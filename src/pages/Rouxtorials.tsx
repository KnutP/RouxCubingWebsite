import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';
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

        <Box sx={{ width: '100%'}}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1}}>
                    <Typography variant="h3">Rouxtorials</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>
            <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
                <Tab label={(<Typography variant="h6">Roux for Beginners</Typography>)} />
                <Tab label={(<Typography variant="h6">Roux for CFOP Solvers</Typography>)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ width: '100%', padding: 2}}>
                <Typography gutterBottom>
                    Want to learn how to solve a Rubik's Cube for the first time, or move on from the Layer-by-Layer method?
                    This is the place for you!
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Notation
                </Typography>
                <Typography gutterBottom>
                    notation info
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 1: First Block
                </Typography>
                <Typography gutterBottom>
                    first block info
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 2: Second Block
                </Typography>
                <Typography gutterBottom>
                    second block info
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 3: CMLL
                </Typography>
                <Typography gutterBottom>
                    sune+j-perm, links to 2-look cmll algs
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 4: Last Six Edges
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4a: Edge Orientation
                </Typography>
                <Typography gutterBottom>
                    recognizing bad edges, M U M', EO flowchart
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4b: Solving L and R Edges
                </Typography>
                <Typography gutterBottom>
                    solving LR
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4c: Solving the M-Slice
                </Typography>
                <Typography gutterBottom>
                    4c
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Getting Faster
                </Typography>
                <Typography gutterBottom>
                    roadmap, Kian's videos
                </Typography>
                How to get faster
                https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ width: '100%', padding: 2}}>
                <Typography variant="h4" gutterBottom>
                    Step 1: First Block
                </Typography>
                <Typography gutterBottom>
                    first block info 
                    https://www.youtube.com/watch?v=ESYJ-DFx0Qo&list=PL754ADDA2E38A21AA
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 2: Second Block
                </Typography>
                <Typography gutterBottom>
                    SB, treat like f2l except with M and r pairing
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 3: CMLL
                </Typography>
                <Typography gutterBottom>
                    CMLL, use CFOP algs, links to 2-look and regular cmll alg sheets
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Step 4: Last Six Edges
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4a: Edge Orientation
                </Typography>
                <Typography gutterBottom>
                    recognizing bad edges (like OLL), M U M', EO flowchart
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4b: Solving L and R Edges
                </Typography>
                <Typography gutterBottom>
                    solving LR
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4c: Solving the M-Slice
                </Typography>
                <Typography gutterBottom>
                    4c
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Getting Faster
                </Typography>
                <Typography gutterBottom>
                    roadmap, Kian's videos
                </Typography>
                </Box>
            </TabPanel>
            </Paper>
        </Box>
    );
}