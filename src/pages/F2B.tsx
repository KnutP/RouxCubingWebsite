import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link, useMediaQuery, useTheme, IconButton  } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from '../components/WindowDimensions'


export default function F2BTabs() {
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
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

  const tabWidth = isMobile ? '100vw' : `calc(${Math.min(width, 1440)}px - 220px)`;

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
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Inspection/FB</Box>
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
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Second Block</Box>
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
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Misc Blockbuilding</Box>
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
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>Block Trainers</Box>
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
      </Tabs>

      <TabPanel value={subTab} index={0}>
        <Box sx={{ width: tabWidth, padding: 2 }}>
          <Typography variant="h6">Inspection/First Block</Typography>
          <ul>
          <li>
              FB Inspection Guide:{" "}
              <Link href="https://youtu.be/0Cq3YDud1dA" target="_blank" rel="noopener">
              Teoidus' Finding a Good FB in Inspection - YouTube
              </Link>
          </li>
          <li>
              Blockbuilding:{" "}
              <Link href="https://www.youtube.com/watch?v=b9rNvrVUsv0" target="_blank" rel="noopener">
              Critical Cubing's First Block Tips - YouTube
              </Link>
          </li>
          <li>
              Blockbuilding:{" "}
              <Link href="https://www.youtube.com/watch?v=4sEnfMMMJyE" target="_blank" rel="noopener">
              Alex Lau's First Block - YouTube
              </Link>
          </li>
          <li>
              Blockbuilding:{" "}
              <Link href="https://www.youtube.com/watch?v=i9zxR5mkgQs" target="_blank" rel="noopener">
              Iuri's Line Blockbuilding - YouTube
              </Link>
          </li>
          <li>
              Blockbuilding:{" "}
              <Link href="https://www.youtube.com/watch?v=4KLFyN6ZDwk" target="_blank" rel="noopener">
              Kian's First Block SpeedBLD - YouTube
              </Link>
          </li>
          <li>
              Blockbuilding:{" "}
              <Link href="https://www.youtube.com/watch?v=LgIoz-Thh4k" target="_blank" rel="noopener">
              Kian's Beginner to Intermediate Blockbuilding - YouTube
              </Link>
          </li>
          <li>
              FB+DR Guide:{" "}
              <Link href="https://github.com/Rouxles/roux-tutorial/blob/master/fbdr/Zhouheng's%20FBDR%20Guide.pdf" target="_blank" rel="noopener">
              Zhouheng's FB+DR Guide - Github
              </Link>
          </li>
          </ul>
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={1}>
        <Box sx={{ width: tabWidth, padding: 2 }}>
          <Typography variant="h6">Second Block</Typography>
          <ul>
          <li>
              Second Block Algs:{" "}
              <Link href="https://docs.google.com/document/d/1bX50jAOM_veHsVJeLYGvSrH4uW9xrubep1zOSLdE4Vk/edit" target="_blank" rel="noopener">
              SB Algs - Google Docs
              </Link>
          </li>
          <li>
              Second Block Last Slot Algs:{" "}
              <Link href="https://docs.google.com/spreadsheets/d/1xd1LMv-0EOlEEOOPODLPzFSDZzFmd4D_KVxpgnkHrJ8/edit#gid=0" target="_blank" rel="noopener">
              SB Last Slot Algs - Google Sheets
              </Link>
          </li>
          <li>
              Second Block Last Slot Algs:{" "}
              <Link href="https://sites.google.com/view/kianroux/second-block" target="_blank" rel="noopener">
              Kian's SB Last Slot Algs - Kian's Site
              </Link>
          </li>
          <li>
              Second Block Last Slot Algs:{" "}
              <Link href="https://speedcubedb.com/a/3x3/SBLS" target="_blank" rel="noopener">
              SCDB SB Last Slot Algs - SCDB
              </Link>
          </li>
          <li>
              Second Block Efficiency:{" "}
              <Link href="https://www.youtube.com/watch?v=_A7wDUisLDs" target="_blank" rel="noopener">
              Critical Cubing's SB efficiency tips - YouTube
              </Link>
          </li>
          <li>
              Second Block Multislotting:{" "}
              <Link href="https://www.youtube.com/watch?v=izeYpYLl3-A" target="_blank" rel="noopener">
              Kian's SB Multislotting - YouTube
              </Link>
          </li>
          <li>
              Second Block Pair Choice:{" "}
              <Link href="https://www.youtube.com/watch?v=naip-4TSgdw" target="_blank" rel="noopener">
              Kian's SB Pair Choice - YouTube
              </Link>
          </li>
          </ul>
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={2}>
        <Box sx={{ width: tabWidth, padding: 2 }}>
          <Typography variant="h6">Misc Blockbuilding</Typography>
          <ul>
          <li>
              NMC + Nonlinear Blocks + Non-Matching Blocks:{" "}
              <Link href="https://youtu.be/L7pIPmSo24c?si=l_w3lasZgqWgBu2X" target="_blank" rel="noopener">
              Kian's Advanced Roux Techniques - YouTube
              </Link>
          </li>
          <li>
              Non-Matching Centers Tutorial:{" "}
              <Link href="https://www.youtube.com/watch?v=_jE-V7P7kIY" target="_blank" rel="noopener">
              Mr.Roux's NMC Tutorial - YouTube
              </Link>
          </li>
          <li>
              CPFB:{" "} (TODO: find a resource)
          </li>
          </ul>
        </Box>
      </TabPanel>
      <TabPanel value={subTab} index={3}>
      <Box sx={{ width: tabWidth, padding: 2 }}>
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