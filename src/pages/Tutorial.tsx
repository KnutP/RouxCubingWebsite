import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


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


export default function Tutorial() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="h6">Tutorials</Typography>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab label={(<Typography variant="h6">Roux for Beginners</Typography>)} />
        <Tab label={(<Typography variant="h6">Roux for CFOP Solvers</Typography>)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        beginner roux tutorial
        https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn
      </TabPanel>
      <TabPanel value={value} index={1}>
        CFOP roux tutorial
        https://www.youtube.com/watch?v=ESYJ-DFx0Qo&list=PL754ADDA2E38A21AA
        
      </TabPanel>
    </Box>
  );
}