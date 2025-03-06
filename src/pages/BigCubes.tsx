import * as React from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery, useTheme, IconButton, Link } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from '../components/WindowDimensions'


export default function BigCubesTabs() {
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
        const queryParams = "mainTab=3&subTab="+value.toString();
        
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Big Cube Tutorials</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>M-slice Edge Pairing</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Parity</Box>
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
            </Tabs>
            <TabPanel value={subTab} index={0}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Big Cube Tutorials</Typography>
                    <ul>
                    <li>
                        Meyer Tutorial:{" "}
                        <Link href="https://www.youtube.com/watch?v=-L86AodUUzE" target="_blank" rel="noopener">
                        Kian's Meyer Tutorial - YouTube
                        </Link>
                    </li>
                    <li>
                        Meyer and Lewis Tutorial:{" "}
                        <Link href="https://www.youtube.com/watch?v=g8ct_J3RRPc" target="_blank" rel="noopener">
                        Blobinati's Meyer and Lewis Tutorial - YouTube
                        </Link>
                    </li>
                    <li>
                        CR4:{" "}
                        <Link href="https://docs.google.com/document/d/150UxosBFn5Trhi16wa4qv2u06mTweXHSsDH6iv5JeRc/edit" target="_blank" rel="noopener">
                        CriticalCubing's CR4 Tutorial - Google Docs
                        </Link>
                    </li>
                    <li>
                        Stadler:{" "}
                        <Link href="https://www.speedcubing.ch/l%C3%B6sungsanleitungen/4x4-stadler-methode/" target="_blank" rel="noopener">
                        Original Stadler Method Site (German)
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">M-Slice Edge Pairing</Typography>
                    <ul>
                    <li>
                        Example Solves:{" "}
                        <Link href="https://www.youtube.com/watch?v=UtxCyOa4-6A" target="_blank" rel="noopener">
                        Michal's 5x5 M-slice example solve - YouTube
                        </Link>
                    </li>
                    <li>
                        Example Solves:{" "}
                        <Link href="https://youtu.be/HjRBCxYdckE?si=gBROfBDLwEWBwo3u" target="_blank" rel="noopener">
                        Knut's 4x4 M-slice example solves - YouTube
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Parity</Typography>
                    <ul>
                    <li>
                        Parity CMLL:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1KY3DT86JLpPUDb98km4ck_hrpdRooC8vg2U8Y1zJipk/edit#gid=2015768980" target="_blank" rel="noopener">
                        TDM's Parity CMLL - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Parity 4c:{" "}
                        <Link href="https://docs.google.com/document/d/1iT22CcA3wGJHfoAQPriFbNNaTYJoUKYUOskYINH5Ypw/edit?tab=t.0" target="_blank" rel="noopener">
                        TDM's Parity 4c - Google Docs
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
        </Box>
    );
}