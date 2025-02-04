import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link } from '@mui/material';
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', px: 0 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
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
        Inspection
        - finding efficient FB in inspection <video src=""></video>
        - Zhouheng's FB+DR guide
        - general inspection tips
      </TabPanel>
      <TabPanel value={value} index={1}>
        FB tips and tricks
      </TabPanel>
      <TabPanel value={value} index={2}>
        SB tips and tricks
      </TabPanel>
      <TabPanel value={value} index={3}>
        NMC
      </TabPanel>
      <TabPanel value={value} index={4}>
        Nonlinear blocks
      </TabPanel>
      <TabPanel value={value} index={5}>
        Nonmatching blocks
      </TabPanel>
      <TabPanel value={value} index={6}>
        CPFB
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Box sx={{ padding: 2 }}>
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