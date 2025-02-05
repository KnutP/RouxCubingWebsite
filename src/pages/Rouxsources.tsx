import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import F2BTabs from './F2B';
import LSETabs from './LSE';
import CMLLTabs from './CMLL';
import BigCubesTabs from './BigCubes';
import MiscTabs from './Misc';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if screen is small

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={1}>
        <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
          <Typography variant="h3">Rouxsources</Typography>
        </Box>
      </Paper>
      <Paper elevation={1}>
        <Tabs value={value} onChange={handleChange} centered variant={isMobile ? "scrollable" : "fullWidth"}>
          <Tab label={(<Typography variant="h6">F2B</Typography>)} />
          <Tab label={(<Typography variant="h6">CMLL</Typography>)} />
          <Tab label={(<Typography variant="h6">LSE</Typography>)} />
          <Tab label={(<Typography variant="h6">Big Cubes</Typography>)} />
          <Tab label={(<Typography variant="h6">Misc</Typography>)} />
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
        <TabPanel value={value} index={3}>
          <BigCubesTabs />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <MiscTabs />
        </TabPanel>
      </Paper>
    </Box>
  );
}