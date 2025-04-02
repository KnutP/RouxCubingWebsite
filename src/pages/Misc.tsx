import * as React from 'react';
import { Box, Tabs, Tab, Typography, useMediaQuery, useTheme, IconButton, Link  } from '@mui/material';
import { Link as LinkIcon } from "@mui/icons-material";
import { TabPanel } from './Rouxsources';
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from '../components/WindowDimensions'


export default function MiscTabs() {
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
        const queryParams = "mainTab=4&subTab="+value.toString();
        
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Websites</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Youtube Channels</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Social Media</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Roux Acronyms and Definitions</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>OH Fingertricks</Box>
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
            </Tabs>
            <TabPanel value={subTab} index={0}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Rouxer Websites</Typography>
                    <ul>
                    <li>
                        Gilles Roux:{" "}
                        <Link href="http://grrroux.free.fr/method/Intro.html" target="_blank" rel="noopener">
                        http://grrroux.free.fr/method/Intro.html
                        </Link>
                    </li>
                    <li>
                        Kian Mansour:{" "}
                        <Link href="https://sites.google.com/view/kianroux/home" target="_blank" rel="noopener">
                        https://sites.google.com/view/kianroux/home
                        </Link>
                    </li>
                    <li>
                        Anto Kam:{" "}
                        <Link href="https://rouxl.es/" target="_blank" rel="noopener">
                        https://rouxl.es/
                        </Link>
                    </li>
                    <li>
                        Athefre:{" "}
                        <Link href="https://sites.google.com/site/athefre/main" target="_blank" rel="noopener">
                        https://sites.google.com/site/athefre/main
                        </Link>
                    </li>
                    <li>
                        Mark Fiend:{" "}
                        <Link href="http://www.markfiend.com/roux.html" target="_blank" rel="noopener">
                        http://www.markfiend.com/roux.html
                        </Link>
                    </li>
                    <li>
                        Speedsolving Wiki Page:{" "}
                        <Link href="https://www.speedsolving.com/wiki/index.php/Roux_method" target="_blank" rel="noopener">
                        https://www.speedsolving.com/wiki/index.php/Roux_method
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Rouxer Youtube Channels</Typography>
                    <ul>
                    <li>
                        TODO:{" "}
                        <Link href="https://sites.google.com/view/kianroux/home" target="_blank" rel="noopener">
                        https://sites.google.com/view/kianroux/home
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={2}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Social Media</Typography>
                    <ul>
                    <li>
                        Discord:{" "}
                        <Link href="https://discord.gg/VJunGCZBGZ" target="_blank" rel="noopener">
                        https://discord.gg/VJunGCZBGZ
                        </Link>
                    </li>
                    <li>
                        Facebook Group:{" "}
                        <Link href="https://www.facebook.com/groups/1482303418674425/" target="_blank" rel="noopener">
                        https://www.facebook.com/groups/1482303418674425/
                        </Link>
                    </li>
                    <li>
                        Subreddit:{" "}
                        <Link href="https://www.reddit.com/r/rouxcubing/" target="_blank" rel="noopener">
                        https://www.reddit.com/r/rouxcubing/
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={3}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Roux Acronyms and Definitions</Typography>
                    <ul>
                    <li>
                        <b>4a</b> - Edge Orientation, first step of LSE.
                    </li>
                    <li>
                        <b>4b</b> - Place the UL-UR edges, second step of LSE.
                    </li>
                    <li>
                        <b>4c</b> - Solve the M-slice, last step of LSE.
                    </li>
                    <li>
                        <b>BU (recognition)</b> - Back-Up (edge). A recognition method for 4c cases by tracking the BU edge state.
                    </li>
                    <li>
                        <b>CMLL</b> - Corners (disregarding M-slice) of Last Layer.
                    </li>
                    <li>
                        <b>CPFB</b> - Corners-Permuted First Block. A method for solving FB that also permutes the corners of the cube, leading to better CMLL cases.
                    </li>
                    <li>
                        <b>DFDB</b> - Down-Front Down-Back (edges). Refers to a technique for recognizing LSE 4c cases by tracking the locations of the DF and DB edges.
                    </li>
                    <li>
                        <b>EO</b> - Edge Orientation, first step of LSE.
                    </li>
                    <li>
                        <b>EOLR</b> - A technique to combine the Edge Orientation and pairing the top Left (UL) and Right (UR) edges into a single step.
                    </li>
                    <li>
                        <b>EOLRb</b> - An extension of EOLR to also solve the ULUR edges into their final locations.
                    </li>
                    <li>
                        <b>EOLRc</b> - The mythical one-look LSE, solves EOLRb and 4c.
                    </li>
                    <li>
                        <b>FB</b> - First Block, the first step in the Roux method.
                    </li>
                    <li>
                        <b>L10P</b> - Last 10 Pieces. Refers to the CMLL and LSE stages of the Roux method.
                    </li>
                    <li>
                        <b>LR</b> - Left-Right (edges). Usually refers to ULUR.
                    </li>
                    <li>
                        <b>LSE</b> - Last 6 Edges. Refers to the last step in the Roux method.
                    </li>
                    <li>
                        <b>MC</b> - Misoriented Centers. A technique for solving LSE cases.
                    </li>
                    <li>
                        <b>Midori (Midori-sama, Lord Midori, The Fluffiest, Cutest, Master of Roux, God-King of Rouxers,
                             Bestest Coach, Bestower of Skill, fast™)</b>{" - "}
                             <Link href="https://www.youtube.com/watch?v=pwRMbsdIWHE" target="_blank" rel="noopener">
                             Zhouheng Sun's cat.
                             </Link>
                             {" "}<img src={require("../img/midori.jpg")} style={{ height: '16px'}} />
                    </li>
                    <li>
                        <b>NMB</b> - Non-Matching Blocks. A technique used for SB where the the block is built using a different bottom color than FB.
                    </li>
                    <li>
                        <b>NMC</b> - Non-Matching Centers. A technique used in F2B where the blocks are built without the correct center and the centers are then solved later, usually before CMLL.
                    </li>
                    <li>
                        <b>NMCMLL</b> - Non-Matching CMLL. CMLL cases when non-matching blocks are used.
                    </li>
                    <li>
                        <b>Pinkie Pie</b> - A method of solving CMLL and EO at the same time, by pairing ULUR on the D-face before CMLL, then using OLLCP to solve both CMLL and EO.
                    </li>
                    <li>
                        <b>SB</b> - Second Block, the second step in the Roux method.
                    </li>
                    <li>
                        <b>TCMLL/Tic-Tac</b> - An extension of CMLL to solve the top four corners and twist the the bottom right corner to the correct orientation.
                    </li>
                    <li>
                        <b>UFUB</b> - Up-Front Up-Back (edges). Usually refers to solving the FB edges instead of LR edges in LSE, often as a means of skipping the dots 4c case.
                    </li>
                    <li>
                        <b>ULUR</b> - Up-Left Up-Right (edges). Solved during step 4b of LSE.
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">OH Fingertricks</Typography>
                    <ul>
                    <li>
                        Anto's OH fingertricks:{" "}
                        <Link href="https://youtu.be/4WK0cORg6CQ?si=Ia-tSyYTZCN1JhvB" target="_blank" rel="noopener">
                        https://youtu.be/4WK0cORg6CQ?si=Ia-tSyYTZCN1JhvB
                        </Link>
                    </li>
                    <li>
                        Kavin's OH LSE fingertricks:{" "}
                        <Link href="https://www.youtube.com/watch?v=5xJCt4VQYFo" target="_blank" rel="noopener">
                        https://www.youtube.com/watch?v=5xJCt4VQYFo
                        </Link>
                    </li>
                    <li>
                        Kian's OH fingertricks:{" "}
                        <Link href="https://www.youtube.com/watch?v=ggNmk4mv6Y0" target="_blank" rel="noopener">
                        https://www.youtube.com/watch?v=ggNmk4mv6Y0
                        </Link>
                    </li>
                    <li>
                        Kian's OH dots execution:{" "}
                        <Link href="https://www.youtube.com/watch?v=hwXX6GYIHq4" target="_blank" rel="noopener">
                        https://www.youtube.com/watch?v=hwXX6GYIHq4
                        </Link>
                    </li>
                    <li>
                        Patrick Ponce's OH fingertricks:{" "}
                        <Link href="https://youtu.be/36ohLrCmWV8" target="_blank" rel="noopener">
                        https://youtu.be/36ohLrCmWV8
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
        </Box>
    );
}