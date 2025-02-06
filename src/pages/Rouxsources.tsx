import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import F2BTabs from './F2B';
import LSETabs from './LSE';
import CMLLTabs from './CMLL';
import BigCubesTabs from './BigCubes';
import MiscTabs from './Misc';
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


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
          {children}
        </Box>
      )}
    </div>
  );
}

export default function RouxsourcesTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if screen is small
  const [searchParams, setSearchParams] = useSearchParams();

  const mainTab = Number(searchParams.get("mainTab")) || 0;

  useEffect(() => {
    let updated = false;

    if (!searchParams.has("mainTab")) {
      searchParams.set("mainTab", "0");
      updated = true;
    }
    if (!searchParams.has("subTab")) {
      searchParams.set("subTab", "0");
      updated = true;
    }

    if (updated) {
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    searchParams.set('mainTab', newValue.toString());
    searchParams.set('subTab', "0");
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={1}>
        <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
          <Typography variant="h3">Rouxsources</Typography>
        </Box>
      </Paper>
      <Paper elevation={1}>
        <Tabs value={mainTab} onChange={handleChange} centered variant={isMobile ? "scrollable" : "fullWidth"}>
          <Tab label={(<Typography variant="h6">F2B</Typography>)} />
          <Tab label={(<Typography variant="h6">CMLL</Typography>)} />
          <Tab label={(<Typography variant="h6">LSE</Typography>)} />
          <Tab label={(<Typography variant="h6">Big Cubes</Typography>)} />
          <Tab label={(<Typography variant="h6">Misc</Typography>)} />
        </Tabs>
        <TabPanel value={mainTab} index={0}>
          <F2BTabs />
        </TabPanel>
        <TabPanel value={mainTab} index={1}>
          <CMLLTabs />
        </TabPanel>
        <TabPanel value={mainTab} index={2}>
          <LSETabs />
        </TabPanel>
        <TabPanel value={mainTab} index={3}>
          <BigCubesTabs />
        </TabPanel>
        <TabPanel value={mainTab} index={4}>
          <MiscTabs />
        </TabPanel>
      </Paper>
    </Box>
  );
}