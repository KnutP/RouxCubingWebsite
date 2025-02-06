import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link, useMediaQuery, useTheme, IconButton  } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";


export default function F2BTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if screen is small
  const [searchParams, setSearchParams] = useSearchParams();

  const subTab = Number(searchParams.get("subTab")) || 0;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    searchParams.set('subTab', newValue.toString());
    setSearchParams(searchParams);
  };

  const copyLink = (value: number) => {
    const baseUrl = window.location.origin;
    const hashRoute = window.location.hash.split("?")[0]; // Ensure only the route is used
    const queryParams = "mainTab=0&subTab="+value.toString();
    
    const fullUrl = `${baseUrl}/${hashRoute}?${queryParams}`;
    
    navigator.clipboard.writeText(fullUrl);
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
          value={subTab}
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
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }} >
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Inspection</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(0);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>FB Tips and Tricks</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(1);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>SB Tips and Tricks</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(2);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Nonmatching Centers</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(3);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Nonlinear Blocks</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(4);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Nonmatching Blocks</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(5);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>CPFB</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(6);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
        <Tab component="span" label={
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Block Trainers</Box>
            <IconButton 
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switch on click
                copyLink(7);
              }}
              sx={{ ml: 1 }} // Add left margin for spacing
            >
              <LinkIcon fontSize="small" />
            </IconButton>
          </Box>
        }/>
      </Tabs>
      <TabPanel value={subTab} index={0}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          Inspection
          - finding efficient FB in inspection <video src=""></video>
          - Zhouheng's FB+DR guide
          - general inspection tips
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={1}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          FB tips and tricks
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={2}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          SB tips and tricks
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={3}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          NMC
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={4}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
        Nonlinear blocks
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={5}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          Nonmatching blocks
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={6}>
        <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
          CPFB
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={7}>
      <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
        <Typography variant="h6">Block Trainers</Typography>
        <ul>
        <li>
            Onionhoney's Trainer:{" "}
            <Link href="https://onionhoney.github.io/roux-trainers/#fb" target="_blank" rel="noopener">
            onionhoney.github.io/roux-trainers/#fb
            </Link>
        </li>
        <li>
            Cubegrass:{" "}
            <Link href="https://cubegrass.appspot.com/block_trainer/" target="_blank" rel="noopener">
            cubegrass.appspot.com/block_trainer/
            </Link>
        </li>
        </ul>
        </Box>
      </TabPanel>
    </Box>
  );
}