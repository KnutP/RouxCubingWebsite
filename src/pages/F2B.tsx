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
        <Tab label="Block Trainers" {...a11yProps(6)} />
        <Tab label="CPFB" {...a11yProps(7)} />
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
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
    </Box>
  );
}