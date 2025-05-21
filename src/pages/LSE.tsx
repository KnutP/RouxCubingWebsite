import * as React from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery, useTheme, IconButton, Link  } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from '../components/WindowDimensions'


export default function LSETabs() {
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
        const queryParams = "mainTab=2&subTab="+value.toString();
        
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
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>EOLR</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Misoriented Centers</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Dots Skipping/UFUB</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>DFDB and BU Recognition</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>6-Flips</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>EOLRb</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Misc 4c</Box>
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
            </Tabs>
            <TabPanel value={subTab} index={0}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">EOLR</Typography>
                    <ul>
                    <li>
                        EOLR Tutorial:{" "}
                        <Link href="https://www.youtube.com/playlist?list=PLBHocHmPzgIiUBTa7Hs3-xcrBKavfD_zX" target="_blank" rel="noopener">
                        Kian's Full EOLR Tutorial - YouTube
                        </Link>
                    </li>
                    <li>
                        EOLR Doc:{" "}
                        <Link href="https://docs.google.com/document/d/1dvGERLfN-0rVwN914HH1zRPHLfdM6d5rPfe0HxOMK08/edit#heading=h.phjfa966vtn)" target="_blank" rel="noopener">
                        EOLR - Google Docs
                        </Link>
                    </li>
                    <li>
                        EOLR Algs(righty M):{" "}
                        <Link href="https://docs.google.com/document/d/1CV3DEwIZYn0g4bnXDN6-2bxNpc7I0woFL1tnslhYQr4/edit" target="_blank" rel="noopener">
                        TDM's full 2H EOLR (RH M moves) - Google Docs
                        </Link>
                    </li>
                    <li>
                        EOLR Algs(lefty M):{" "}
                        <Link href="https://docs.google.com/document/d/15At5K7N1Yg1Qfh0_KZyUJZhBqLJVmXdPvLN1hmrRYoc/edit" target="_blank" rel="noopener">
                        TDM's full 2H EOLR (LH M moves) - Google Docs
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    Misoriented centers
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    Dots skipping/UFUB
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={3}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">DFDB and BU Recognition</Typography>
                    <ul>
                    <li>
                        BU and DFDB Tutorial:{" "}
                        <Link href="https://www.youtube.com/watch?v=AwTJ5-ZDaew" target="_blank" rel="noopener">
                        Kian's BU and DFDB - YouTube
                        </Link>
                    </li>
                    <li>
                        DFDB Doc:{" "}
                        <Link href="https://docs.google.com/document/d/1L9v-iWOKkdnymCYud0IWmAT50cEWwWtxU443I4b21AA/edit" target="_blank" rel="noopener">
                        Anto's DFDB - Google Docs
                        </Link>
                    </li>
                    <li>
                        DFDB Flowchart:{" "}
                        <Link href="https://rouxl.es/images/DFDB.png" target="_blank" rel="noopener">
                        Anto's DFDB - Google Docs
                        </Link>
                    </li>
                    <li>
                        BU Guide:{" "}
                        <Link href="https://www.reddit.com/r/Cubers/comments/69rubn/made_a_roux_4c_cycle_bu_recog_guide/" target="_blank" rel="noopener">
                        Alex's BU Guide - Reddit
                        </Link>
                    </li>
                    <li>
                        EZ4c Tutorial:{" "}
                        <Link href="https://www.youtube.com/watch?v=pWCTCA9ZM-A" target="_blank" rel="noopener">
                        GodCubing's EZ4c Tutorial - YouTube
                        </Link>
                    </li>
                    <li>
                        BU Diagram:{" "}
                        <Link href="https://drive.google.com/file/d/1Z_oF4Sv1A9YvTzHFD78wp_kGHGmO4Hrm/view" target="_blank" rel="noopener">
                        GodCubing's EZ4c Diagram- Google Drive
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">6-Flips</Typography>
                    <ul>
                    <li>
                        6-Flip M-U EOLR:{" "}
                        <Link href="https://www.youtube.com/watch?v=awvvDPldYUA" target="_blank" rel="noopener">
                        Kavin's 6-Flip Repertoire - YouTube
                        </Link>
                    </li>
                    <li>
                        6-Flip Alg-Based EOLR:{" "}
                        <Link href="https://www.youtube.com/watch?v=TaopkUfmFF4" target="_blank" rel="noopener">
                        Knut's 6-Flip Alg Cases - YouTube
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={5}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                <Typography variant="h6">EOLRb</Typography>
                    <ul>
                    <li>
                        EOLRb doc:{" "}
                        <Link href="https://docs.google.com/document/d/1OQ7hcB06bYbr8eH9SLTW2W5tozk9_nJ5MzqNgxHOnUk/edit?tab=t.0" target="_blank" rel="noopener">
                        EOLR & EOLRb - Google Docs
                        </Link>
                    </li>
                    <li>
                        EOLRb Trainer:{" "}
                        <Link href="https://onionhoney.github.io/roux-trainers/#eopair" target="_blank" rel="noopener">
                        EOLRb Trainer - onionhoney
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={6}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                <Typography variant="h6">Misc 4c</Typography>
                    <ul>
                    <li>
                        LRb Backtracking:{" "}
                        <Link href="https://www.youtube.com/watch?v=4zIAXfUr5vM" target="_blank" rel="noopener">
                        Dylan's LRb Backtracking - YouTube
                        </Link>
                    </li>
                    <li>
                        4c^3:{" "}
                        <Link href="https://www.youtube.com/watch?v=BpkkDfBrD9A" target="_blank" rel="noopener">
                        Dylan's 4c^3 - YouTube
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
        </Box>
    );
}