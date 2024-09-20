import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function Tutorial() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '100%' }}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: '15px', my: '20px' }}>
                    <Typography variant="h3">Rouxtorials</Typography>
                </Box>
            </Paper>

            <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
                <Tab label={(<Typography variant="h6">Roux for Beginners</Typography>)} />
                <Tab label={(<Typography variant="h6">Roux for CFOP Solvers</Typography>)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Want to learn how to solve a Rubik's Cube for the first time, or move on from the Layer-by-Layer method?
                This is the place for you!
                beginner roux tutorial
                notation
                FB
                SB
                cmll, sune and J perm, link to 2-look
                recognizing bad edges w/ examples
                EO flowchart
                LR
                4c
                How to get faster
                https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn
            </TabPanel>
            <TabPanel value={value} index={1}>
                CFOP roux tutorial
                FB for cfop Solvers
                SB, treat like f2l with M and r pairing
                CMLL, use CFOP algs, links to 2-look and regular cmll alg sheets
                quick note on recognizing bad edges
                EO flowchart
                LR
                4c
                How to get faster
                https://www.youtube.com/watch?v=ESYJ-DFx0Qo&list=PL754ADDA2E38A21AA

            </TabPanel>
        </Box>
    );
}