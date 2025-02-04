import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link } from '@mui/material';
import { TabPanel } from './Rouxsources';
import ResponsiveIframe from '../components/ResponsiveIframe';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function CMLLTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="2-Look CMLL Algs" {...a11yProps(0)} />
                <Tab label="2H CMLL Algs" {...a11yProps(1)} />
                <Tab label="OH CMLL Algs" {...a11yProps(2)} />
                <Tab label="CMLL Recognition" {...a11yProps(3)} />
                <Tab label="Pinkie Pie" {...a11yProps(4)} />
                <Tab label="NMCMLL/ACMLL/TCMLL" {...a11yProps(5)} />
                <Tab label="CMLL Trainers" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ width: 'calc(100vw - 200px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1EdCeGlotJ76MyVw02_N1El_SXXSIMJRhYvZn4gZkQk8/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ width: 'calc(100vw - 200px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1uc5V3G-kRH3qV5b6Lq1yzTjnqSMS3D3dZcsCIOiJqcI/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box> 
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{ width: 'calc(100vw - 200px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                cmll recog - multi angle, ATCRM, etc
            </TabPanel>
            <TabPanel value={value} index={4}>
                Pinkie Pie
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Typography variant="h6">NMCMLL</Typography>
                <Box sx={{ width: 'calc(100vw - 200px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1BUt299RvoSDdtUEEMnGALo7jVqHnuhZS64-KZZ6TEKI/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
                <Typography variant="h6">ACMLL</Typography>
                <Typography variant="h6">TCMLL</Typography>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Box sx={{ padding: 2 }}>
                <Typography variant="h6">CMLL Trainers</Typography>
                <Typography variant="body1">
                    (Includes some COLL/ZBLL trainers which can also be used for CMLL)
                </Typography>
                <ul>
                <li>
                <Typography variant="body1">
                    OnionHoney:{" "}
                    <Link href="https://onionhoney.github.io/roux-trainers/#cmll" target="_blank" rel="noopener">
                    onionhoney.github.io/roux-trainers/#cmll
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    Train Yu:{" "}
                    <Link href="https://tao-yu.github.io/Alg-Trainer/" target="_blank" rel="noopener">
                    tao-yu.github.io/Alg-Trainer
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    kSim 2:{" "}
                    <Link href="http://ksim.kirjava.xyz/" target="_blank" rel="noopener">
                    ksim.kirjava.xyz
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    Roman's ZBLL trainer:{" "}
                    <Link href="https://bestsiteever.ru/zbll/" target="_blank" rel="noopener">
                    bestsiteever.ru/zbll
                    </Link>
                </Typography>
                </li>
                </ul>
                </Box>
            </TabPanel>

        </Box>
    );
}