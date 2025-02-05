import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link, useMediaQuery, useTheme  } from '@mui/material';
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

export default function F2BTabs() {
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
        <Tab label="Inspection" {...a11yProps(0)} />
        <Tab label="FB Tips and Tricks" {...a11yProps(1)} />
        <Tab label="SB Tips and Tricks" {...a11yProps(2)} />
        <Tab label="Nonmatching Centers" {...a11yProps(3)} />
        <Tab label="Nonlinear Blocks" {...a11yProps(4)} />
        <Tab label="Nonmatching Blocks" {...a11yProps(5)} />
        <Tab label="CPFB" {...a11yProps(6)} />
        <Tab label="Block Trainers" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          Inspection
          - finding efficient FB in inspection <video src=""></video>
          - Zhouheng's FB+DR guide
          - general inspection tips
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          FB tips and tricks
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          SB tips and tricks
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          NMC
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
        Nonlinear blocks
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          Nonmatching blocks
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          CPFB
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
        <Typography variant="h6">Block Trainers</Typography>
        <ul>
        <li>
        <Typography variant="body1">
            Onionhoney's Trainer:{" "}
            <Link href="https://onionhoney.github.io/roux-trainers/#fb" target="_blank" rel="noopener">
            onionhoney.github.io/roux-trainers/#fb
            </Link>
        </Typography>
        </li>
        <li>
        <Typography variant="body1">
            Cubegrass:{" "}
            <Link href="https://cubegrass.appspot.com/block_trainer/" target="_blank" rel="noopener">
            cubegrass.appspot.com/block_trainer/
            </Link>
        </Typography>
        </li>
        </ul>
        </Box>
      </TabPanel>
    </Box>
  );
}