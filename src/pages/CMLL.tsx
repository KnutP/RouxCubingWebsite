import * as React from 'react';
import { Box, Tabs, Tab, Typography, Link, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import ResponsiveIframe from '../components/ResponsiveIframe';
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from '../components/WindowDimensions'


export default function CMLLTabs() {
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
        const queryParams = "mainTab=1&subTab="+value.toString();
        
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>2H CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>OH CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>2-Look CMLL Algs</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Other CMLL</Box>
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
                <Box sx={{ width: tabWidth }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1uMmjhGZzPCxPPODiU-N7juNagW6QYh2HKSFpF7XB42A/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">2H CMLL Sheets</Typography>
                    <ul>
                    <li>
                        eff's 2H CMLL (embedded above):{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1uMmjhGZzPCxPPODiU-N7juNagW6QYh2HKSFpF7XB42A/edit#gid=1409661599" target="_blank" rel="noopener">
                        eff's 2H CMLL List - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Anto's 2H CMLL:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1uc5V3G-kRH3qV5b6Lq1yzTjnqSMS3D3dZcsCIOiJqcI/edit#gid=1409661599" target="_blank" rel="noopener">
                        Anto's 2H CMLL List - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Teri's 2H CMLL:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1sGeA4uf-f_hB4Ox7gCybm40SFy_e86_C7vP5LuD7WlE/edit#gid=1288079263" target="_blank" rel="noopener">
                        Teri's 2H CMLL - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Flamepelt's 2H CMLLs:{" "}
                        <Link href="https://www.youtube.com/watch?v=xHvPxLlfbzQ" target="_blank" rel="noopener">
                        Roux Method: The Best CMLL Algorithms and Fingertricks - YouTube
                        </Link>
                    </li>
                    <li>
                        Bas's CMLL Cheatsheet:{" "}
                        <Link href="https://basilio.dev/cubing/images/ALGS-CMLL.jpg" target="_blank" rel="noopener">
                        CMLL cheatsheet - basilio.dev/cubing
                        </Link>
                    </li>
                    <li>
                        CMLL Visualizer (shows EP and EO changes for each CMLL):{" "}
                        <Link href="https://badochov.github.io/cmll-visualiser/" target="_blank" rel="noopener">
                        https://badochov.github.io/cmll-visualiser/
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: tabWidth }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">OH CMLL Sheets</Typography>
                    <ul>
                    <li>
                        OH CMLL (embedded above):{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg/edit#gid=1409661599" target="_blank" rel="noopener">
                        OH CMLL List - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Sevilz OH CMLL:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/13B4247VUgoPhPsoEKktQVHsxiPFGuzAOmAXTxc-IsiY/edit" target="_blank" rel="noopener">
                        Sevilz OH CMLL - Google Sheets
                        </Link>
                    </li>
                    <li>
                        Iuri's OH CMLL execution:{" "}
                        <Link href="https://drive.google.com/drive/folders/1owfcX3SJSXQr5_Ly9Sex_4rSMLZ-gIEb" target="_blank" rel="noopener">
                        OH CMLL Execution - Google Drive
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: tabWidth }}>
                    <ResponsiveIframe src="https://docs.google.com/spreadsheets/d/1pful9u4oOiB2mzqICBZYJyHWF2VzTaRoha9fq8R8oTw/edit?usp=sharing?widget=true&amp;rm=minimal&amp;headers=false" />    
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={3}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">CMLL Recognition/Prediction</Typography>
                    <ul>
                    <li>
                        Athefre's CMLL Prediction Guides:{" "}
                        <Link href="https://sites.google.com/site/athefre/roux/cmll-prediction" target="_blank" rel="noopener">
                        CMLL Prediction - Aethefre's Site
                        </Link>
                    </li>
                    <li>
                        Multi-Angle CMLL Recognition:{" "}
                        <Link href="https://www.youtube.com/watch?v=vwBR-N29t3k" target="_blank" rel="noopener">
                        James Macdiarmid's Better CP Recog - YouTube
                        </Link>
                    </li>
                    <li>
                        Multi-Angle CMLL Recognition:{" "}
                        <Link href="https://www.youtube.com/watch?v=MKZ7JX-hW4g" target="_blank" rel="noopener">
                        Kian's Multi-Angle CMLL Recog - YouTube
                        </Link>
                    </li>
                    <li>
                        Multi-Angle CMLL Recognition:{" "}
                        <Link href="https://drive.google.com/drive/folders/1eysbDbEtKzKpwRBN_oih-xaKRBOjRIKA" target="_blank" rel="noopener">
                        CMLL Recog - Google Drive
                        </Link>
                    </li>
                    <li>
                        Iuri's L CMLL Recog:{" "}
                        <Link href="https://docs.google.com/document/d/1_GJF5lYnAWwxxkxLlBSnaHFayjEVd8-PG7tnDUwk71o/edit?tab=t.0#heading=h.oa3c40cij0jg" target="_blank" rel="noopener">
                        L CMLL Recog - Google Docs
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Pinkie Pie</Typography>
                    <ul>
                    <li>
                        Pinkie Pie Overview:{" "}
                        <Link href="https://www.youtube.com/watch?v=TPpZ-wzsZe4" target="_blank" rel="noopener">
                        Kian's Pinkie Pie Explanation - YouTube
                        </Link>
                    </li>
                    <li>
                        OLLCP Algs:{" "}
                        <Link href="https://speedcubedb.com/a/3x3/OLLCP" target="_blank" rel="noopener">
                        OLLCP - SCDB
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={5}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Other CMLL</Typography>
                    <ul>
                    <li>
                        NMCMLL:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1BUt299RvoSDdtUEEMnGALo7jVqHnuhZS64-KZZ6TEKI/edit#gid=0" target="_blank" rel="noopener">
                        NMCMLL List - Google Sheets
                        </Link>
                    </li>
                    <li>
                        NMCMLL Recognition:{" "}
                        <Link href="https://sites.google.com/site/athefre/roux/roux" target="_blank" rel="noopener">
                        NMCMLL - Athefre's Site
                        </Link>
                    </li>
                    <li>
                        ACMLL Tutorial:{" "}
                        <Link href="https://sites.google.com/site/athefre/roux/acmll" target="_blank" rel="noopener">
                        ACMLL - Athefre's Site
                        </Link>
                    </li>
                    <li>
                        ACMLL Algs:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1z3GGqY9_J4124mWYgYjH_QuwaqMiGVB1WHxL8IemVeU/edit#gid=933355716" target="_blank" rel="noopener">
                        ACMLL List - Google Sheets
                        </Link>
                    </li>
                    <li>
                        TCMLL:{" "}
                        <Link href="https://docs.google.com/document/d/10wenyuYdJhJd70lka0m01SdCK1OK2OgHGuaPCFMCQc4/edit?tab=t.0" target="_blank" rel="noopener">
                        Montu's TCMLL Algs - Google Docs
                        </Link>
                    </li>
                    <li>
                        TCMLL +  Tyrannical Caterpillar Explanation:{" "}
                        <Link href="https://www.youtube.com/watch?v=nJhj1uhtRvw" target="_blank" rel="noopener">
                        Kian's TCMLL Explanation - YouTube
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={6}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
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