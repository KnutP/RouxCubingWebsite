import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';
import F2BTabs from './F2B';
import LSETabs from './LSE';
import CMLLTabs from './CMLL';


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
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function RouxsourcesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={1}>
        <Box sx={{ width: '100%', mx: '15px', my: '20px' }}>
          <Typography variant="h3">Rouxsources</Typography>
        </Box>
      </Paper>
      TODO: add big cubes, other websites, youtube channels
      <Paper elevation={1}>
        <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
          <Tab label={(<Typography variant="h6">F2B</Typography>)} />
          <Tab label={(<Typography variant="h6">CMLL</Typography>)} />
          <Tab label={(<Typography variant="h6">LSE</Typography>)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <F2BTabs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CMLLTabs />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LSETabs />
        </TabPanel>
      </Paper>
    </Box>
  );
}