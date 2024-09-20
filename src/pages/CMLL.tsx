import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

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
                2-look cmll
            </TabPanel>
            <TabPanel value={value} index={1}>
                2h cmll
            </TabPanel>
            <TabPanel value={value} index={2}>
                oh cmll
            </TabPanel>
            <TabPanel value={value} index={3}>
                cmll recog - multi angle, ATCRM, etc
            </TabPanel>
            <TabPanel value={value} index={4}>
                Pinkie Pie
            </TabPanel>
            <TabPanel value={value} index={5}>
                NMCMLL/ACMLL/TCMLL
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}