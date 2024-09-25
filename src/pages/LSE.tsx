import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { TabPanel } from './Rouxsources';

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

export default function LSETabs() {
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
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="EOLR" {...a11yProps(0)} />
                <Tab label="Misoriented Centers" {...a11yProps(1)} />
                <Tab label="Dots Skipping/UFUB" {...a11yProps(2)} />
                <Tab label="DFDB Recognition" {...a11yProps(3)} />
                <Tab label="BU Recognition" {...a11yProps(4)} />
                <Tab label="EOLRb" {...a11yProps(5)} />
                <Tab label="..." {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                EOLR
            </TabPanel>
            <TabPanel value={value} index={1}>
                Misoriented centers
            </TabPanel>
            <TabPanel value={value} index={2}>
                Dots skipping/UFUB
            </TabPanel>
            <TabPanel value={value} index={3}>
                DFDB
            </TabPanel>
            <TabPanel value={value} index={4}>
                BU
            </TabPanel>
            <TabPanel value={value} index={5}>
                EOLRb
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}