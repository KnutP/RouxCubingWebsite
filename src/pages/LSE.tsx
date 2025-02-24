import * as React from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery, useTheme, IconButton, Link  } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";


export default function LSETabs() {
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
        const queryParams = "mainTab=2&subTab="+value.toString();
        
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
            </Tabs>
            <TabPanel value={subTab} index={0}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
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
                        Louis' full 2H EOLR (RH M moves) - Google Docs
                        </Link>
                    </li>
                    <li>
                        EOLR Algs(lefty M):{" "}
                        <Link href="https://docs.google.com/document/d/15At5K7N1Yg1Qfh0_KZyUJZhBqLJVmXdPvLN1hmrRYoc/edit" target="_blank" rel="noopener">
                        Louis' full 2H EOLR (LH M moves) - Google Docs
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Misoriented centers
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Dots skipping/UFUB
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={3}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Recognition - DFDB, BU
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
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
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    EOLRb
                </Box>
            </TabPanel>
        </Box>
    );
}