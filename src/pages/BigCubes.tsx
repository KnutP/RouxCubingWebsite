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

export default function BigCubesTabs() {
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
                <Tab label="Meyer Overview" {...a11yProps(0)} />
                <Tab label="M-slice Edge Pairing" {...a11yProps(1)} />
                <Tab label="Parity Algs" {...a11yProps(2)} />
                <Tab label="..." {...a11yProps(3)} />
                <Tab label="..." {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Meyer overview
            </TabPanel>
            <TabPanel value={value} index={1}>
                M-slice edge pairing
            </TabPanel>
            <TabPanel value={value} index={2}>
                Parity algs
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
        </Box>
    );
}