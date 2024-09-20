import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import F2BTabs from './F2B';
import LSETabs from './LSE';


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

export default function RouxsourcesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="h6">Rouxsources</Typography>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab label={(<Typography variant="h6">F2B</Typography>)} />
        <Tab label={(<Typography variant="h6">CMLL</Typography>)} />
        <Tab label={(<Typography variant="h6">LSE</Typography>)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <F2BTabs/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LSETabs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}