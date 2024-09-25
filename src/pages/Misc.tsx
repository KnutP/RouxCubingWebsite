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

export default function MiscTabs() {
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
                <Tab label="Websites" {...a11yProps(0)} />
                <Tab label="Youtube Channels" {...a11yProps(1)} />
                <Tab label="Social Media" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                list of rouxer websites (anto, aethfre, kian, etc)
            </TabPanel>
            <TabPanel value={value} index={1}>
                youtube channels of rouxers who post tutorials
            </TabPanel>
            <TabPanel value={value} index={2}>
                Discord, FB, subreddit
            </TabPanel>
        </Box>
    );
}