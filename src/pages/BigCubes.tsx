import * as React from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery, useTheme  } from '@mui/material';
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if screen is small

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Vertical on large screens, horizontal on small screens
                overflowX: isMobile ? "auto" : "unset", // Enable horizontal scrolling on small screens
                maxWidth: "100%", // Prevent overflow on small screens
            }}
            >
            <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                variant={isMobile ? "scrollable" : "standard"} // Scrollable when horizontal
                scrollButtons={isMobile ? "auto" : false} // Show scroll buttons if needed
                sx={{
                    borderRight: isMobile ? "none" : 1,
                    borderBottom: isMobile ? 1 : "none",
                    borderColor: "divider",
                    width: "100%", // Set a fixed width for vertical mode
                    whiteSpace: "nowrap", // Prevent tab text from wrapping
                    }}
            >
                <Tab label="Meyer Overview" {...a11yProps(0)} />
                <Tab label="M-slice Edge Pairing" {...a11yProps(1)} />
                <Tab label="Parity Algs" {...a11yProps(2)} />
                <Tab label="..." {...a11yProps(3)} />
                <Tab label="..." {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Meyer overview
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    M-slice edge pairing
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Parity algs
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Item four
                </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Item five
                </Box>
            </TabPanel>
        </Box>
    );
}