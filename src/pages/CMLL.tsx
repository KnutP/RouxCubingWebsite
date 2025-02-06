import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import ResponsiveIframe from '../components/ResponsiveIframe';
import { useSearchParams } from "react-router-dom";


export default function CMLLTabs() {
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
        const queryParams = "mainTab=1&subTab="+value.toString();
        
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>2-Look CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>2H CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>OH CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>CMLL Recognition</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Pinkie Pie</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>NMCMLL/ACMLL/TCMLL</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>CMLL Trainers</Box>
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
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1EdCeGlotJ76MyVw02_N1El_SXXSIMJRhYvZn4gZkQk8/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box> 
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1uc5V3G-kRH3qV5b6Lq1yzTjnqSMS3D3dZcsCIOiJqcI/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box> 
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={3}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    cmll recog - multi angle, ATCRM, etc  
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                    Pinkie Pie 
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={5}>
                <Typography variant="h6">NMCMLL</Typography>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)' }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1BUt299RvoSDdtUEEMnGALo7jVqHnuhZS64-KZZ6TEKI/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
                <Typography variant="h6">ACMLL</Typography>
                <Typography variant="h6">TCMLL</Typography>
            </TabPanel>
            <TabPanel value={subTab} index={6}>
                <Box sx={{ width: isMobile ? '100vw' : 'calc(100vw - 220px)', padding: 2 }}>
                <Typography variant="h6">CMLL Trainers</Typography>
                <Typography variant="body1">
                    (Includes some COLL/ZBLL trainers which can also be used for CMLL)
                </Typography>
                <ul>
                <li>
                <Typography variant="body1">
                    OnionHoney:{" "}
                    <Link href="https://onionhoney.github.io/roux-trainers/#cmll" target="_blank" rel="noopener">
                    onionhoney.github.io/roux-trainers/#cmll
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    Train Yu:{" "}
                    <Link href="https://tao-yu.github.io/Alg-Trainer/" target="_blank" rel="noopener">
                    tao-yu.github.io/Alg-Trainer
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    kSim 2:{" "}
                    <Link href="http://ksim.kirjava.xyz/" target="_blank" rel="noopener">
                    ksim.kirjava.xyz
                    </Link>
                </Typography>
                </li>
                <li>
                <Typography variant="body1">
                    Roman's ZBLL trainer:{" "}
                    <Link href="https://bestsiteever.ru/zbll/" target="_blank" rel="noopener">
                    bestsiteever.ru/zbll
                    </Link>
                </Typography>
                </li>
                </ul>
                </Box>
            </TabPanel>

        </Box>
    );
}