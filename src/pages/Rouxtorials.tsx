import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TabPanel } from './Rouxsources';
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import beginnerTutorial from '../markdown/beginnerTutorial.md';
import advancedTutorial from '../markdown/advancedTutorial.md';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export default function Rouxtorials() {
    const [value, setValue] = React.useState(0);
    const [beginnerMarkdown, setBeginnerMarkdown] = useState("");
    const [advancedMarkdown, setAdvancedMarkdown] = useState("");
      
        useEffect(() => {
          fetch(beginnerTutorial)
            .then((res) => res.text())
            .then((text) => setBeginnerMarkdown(text));
        }, []);

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
                <Typography gutterBottom>
                    &nbsp;&nbsp;Coming soon!
                </Typography>
                <Typography>
                    &nbsp;&nbsp;In the meantime, check out these written tutorials:
                </Typography>
                <ul>
                    <li>
                        The Roux Reader (unfinished, but great content):{" "}
                        <Link href="https://book.rouxers.com/" target="_blank" rel="noopener">
                        Roux tutorial - book.rouxers.com
                        </Link>
                    </li>
                    <li>
                        CubingMethods Tutorial (in progress):{" "}
                        <Link href="https://www.cubingmethods.com/en/roux/tutorial" target="_blank" rel="noopener">
                        Roux tutorial - cubingmethods.com
                        </Link>
                    </li>
                    <li>
                        Gilles Roux's Tutorial:{" "}
                        <Link href="http://grrroux.free.fr/method/Intro.html" target="_blank" rel="noopener">
                        Roux tutorial - grrroux
                        </Link>
                    </li>
                    <li>
                        Mark Fiend's Tutorial:{" "}
                        <Link href="http://www.markfiend.com/roux.html" target="_blank" rel="noopener">
                        Roux tutorial - markfiend.com
                        </Link>
                    </li>
                    <li>
                        Ruwix tutorial:{" "}
                        <Link href="https://ruwix.com/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/" target="_blank" rel="noopener">
                        Roux tutorial - ruwix.com
                        </Link>
                    </li>
                    <li>
                        Roux Wikicube page:{" "}
                        <Link href="https://rubiks.fandom.com/wiki/Roux_Method" target="_blank" rel="noopener">
                        Roux tutorial - rubiks.fandom.com
                        </Link>
                    </li>
                </ul>

                {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{beginnerMarkdown}</ReactMarkdown> */}

                
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
                <Typography gutterBottom>
                    &nbsp;&nbsp;Coming soon!
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