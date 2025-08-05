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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>OH Fingertricks</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Example Solves</Box>
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
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>Roux Acronyms and Definitions</Box>
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
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Roux Wiki Pages</Typography>
                    <ul>
                    <li>
                        Speedsolving Wiki Page:{" "}
                        <Link href="https://www.speedsolving.com/wiki/index.php/Roux_method" target="_blank" rel="noopener">
                        Roux page - speedsolving.com
                        </Link>
                    </li>
                    <li>
                        Ruwix Wiki Page:{" "}
                        <Link href="https://ruwix.com/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/" target="_blank" rel="noopener">
                        Roux page - ruwix.com
                        </Link>
                    </li>
                    <li>
                        Roux Wikicube Page:{" "}
                        <Link href="https://rubiks.fandom.com/wiki/Roux_Method" target="_blank" rel="noopener">
                        Roux page - rubiks.fandom.com
                        </Link>
                    </li>
                    </ul>
                    <Typography variant="h6">Roux Websites</Typography>
                    <ul>
                    <li>
                        Gilles Roux:{" "}
                        <Link href="http://grrroux.free.fr/method/Intro.html" target="_blank" rel="noopener">
                        grrroux.free.fr/method/Intro.html
                        </Link>
                    </li>
                    <li>
                        Kian Mansour:{" "}
                        <Link href="https://sites.google.com/view/kianroux/home" target="_blank" rel="noopener">
                        sites.google.com/view/kianroux/home
                        </Link>
                    </li>
                    <li>
                        Anto Kam:{" "}
                        <Link href="https://rouxl.es/" target="_blank" rel="noopener">
                        rouxl.es
                        </Link>
                    </li>
                    <li>
                        Athefre:{" "}
                        <Link href="https://sites.google.com/site/athefre/main" target="_blank" rel="noopener">
                        sites.google.com/site/athefre/main
                        </Link>
                    </li>
                    <li>
                        Mark Fiend:{" "}
                        <Link href="http://www.markfiend.com/roux.html" target="_blank" rel="noopener">
                        markfiend.com/roux.html
                        </Link>
                    </li>
                    <li>
                        CubingMethods:{" "}
                        <Link href="https://www.cubingmethods.com/en/roux" target="_blank" rel="noopener">
                        cubingmethods.com/en/roux
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={1}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Rouxer Youtube Channels</Typography>
                </Box>
                <ul>
                    <li>
                        Abhijeet Ghodgaonkar:{" "}
                        <Link href="https://www.youtube.com/@abhijeetghodgaonkar" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Akash Sreedharan:{" "}
                        <Link href="https://www.youtube.com/@akashsreedharan" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Alexey Tsvetkov:{" "}
                        <Link href="https://www.youtube.com/@alexeytsvetkov6526" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Anto Kam:{" "}
                        <Link href="https://www.youtube.com/@Rouxles" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        CriticalCubing:{" "}
                        <Link href="https://www.youtube.com/@criticalcubing" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Dwyane Ramos:{" "}
                        <Link href="https://www.youtube.com/@dwyaneramos4208" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Dylan Govic:{" "}
                        <Link href="https://www.youtube.com/@dylangovic" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Eden Robinson-Rechavi:{" "}
                        <Link href="https://www.youtube.com/@EdenRobinson-Rechavi" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Eff:{" "}
                        <Link href="https://www.youtube.com/@effperm" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Fahmi Aulia Rachman:{" "}
                        <Link href="https://www.youtube.com/@Fommy-Cubing" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Fouzan Zayn:{" "}
                        <Link href="https://youtube.com/@fouzanzayn" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Hamish Bassig:{" "}
                        <Link href="https://www.youtube.com/@hamishbassig" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Iuri Grangeiro:{" "}
                        <Link href="https://www.youtube.com/@iurigrang" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Jose Briggs (Shadowslice):{" "}
                        <Link href="https://www.youtube.com/@Shadowslice" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Joshua Marais:{" "}
                        <Link href="https://youtube.com/@joshuamaraisstuff" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Jihu Mun:{" "}
                        <Link href="https://www.youtube.com/@jihu1011" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Kangaroux:{" "}
                        <Link href="https://www.youtube.com/@TheBrutux168" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Kavin Tangtartharakul (Guroux):{" "}
                        <Link href="https://www.youtube.com/@guroux" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Kian Mansour:{" "}
                        <Link href="https://www.youtube.com/@Kian_Mansour" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Knut Peterson:{" "}
                        <Link href="https://www.youtube.com/@KnutPeterson" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Kymo Hendriks:{" "}
                        <Link href="https://www.youtube.com/@kyh148" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Louis de Mendonça (TDM):{" "}
                        <Link href="https://www.youtube.com/@TDM028" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Magnus Lensch:{" "}
                        <Link href="https://www.youtube.com/@magnuslensch" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        MOG Cubing:{" "}
                        <Link href="https://www.youtube.com/@MOGCubing" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Nicholas Archer:{" "}
                        <Link href="https://www.youtube.com/@nicholas4093" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Rayyan Ali:{" "}
                        <Link href="https://youtube.com/@r0ubiks" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Richard Peng:{" "}
                        <Link href="https://youtube.com/@notrichardpeng" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Ruel Franz :{" "}
                        <Link href="https://www.youtube.com/@trianglescube" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Sean Patrick Villanueva:{" "}
                        <Link href="https://www.youtube.com/@SeanVillCubing" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Shawn Boucké (SpeedCubeReview):{" "}
                        <Link href="https://www.youtube.com/@SpeedCubeReview" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Takumi Kato:{" "}
                        <Link href="https://www.youtube.com/@_wilwil" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Teri McAcy:{" "}
                        <Link href="https://www.youtube.com/@teriww" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Tyler Gee:{" "}
                        <Link href="https://youtube.com/@concavecuber3053" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Viljo Elo:{" "}
                        <Link href="https://www.youtube.com/@ViljoElo" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Zhouheng Sun:{" "}
                        <Link href="https://www.youtube.com/@onionhoney1" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    </ul>
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
            <TabPanel value={subTab} index={4}>
                <Box sx={{ width: tabWidth, padding: 2 }}>
                    <Typography variant="h6">Example Solves</Typography>
                    <ul>
                    <li>
                        Kian's Example Solves:{" "}
                        <Link href="https://www.youtube.com/playlist?list=PLBHocHmPzgIjAxbZuzs1cWGLqCxykhOyz" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Guroux's Example Solves:{" "}
                        <Link href="https://youtube.com/playlist?list=PLXiPs1z2Pwm5QPrtqB5J5rJ2DH6tbBU8T&si=8LbiD3iBycB9pIGZ" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        CriticalCubing's Example Solves:{" "}
                        <Link href="https://www.youtube.com/playlist?list=PLqatB_kou3Nb9afWaL7ZJyP_5PhiU0Bf7" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Anto's OH Example Solves:{" "}
                        <Link href="https://www.youtube.com/watch?v=V6KIVvStcQY" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Kangaroux's Example Solves:{" "}
                        <Link href="https://www.youtube.com/playlist?list=PL_rFXDH_hdudEspzR7g_DITZOzj47WFyO" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Onionhoney FB+dr Example Solves:{" "}
                        <Link href="https://www.youtube.com/watch?v=PTGK37AL50E" target="_blank" rel="noopener">
                        YouTube
                        </Link>
                    </li>
                    <li>
                        Example Solves Archive:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/1XfbJ7zC_GRNjeLxmcUX_lyGmNhLqb-coG8Jl94UGOGA/edit?fbclid=IwAR1txVyIkGt4KhylUAwdURpkxUz7XJLxEm6oCXeTegtkKp1UIS32qvu1KJE&gid=0#gid=0" target="_blank" rel="noopener">
                        Google Sheets
                        </Link>
                    </li>
                    </ul>

                    <Typography variant="h6">Reconstructions</Typography>
                    <ul>
                    <li>
                        Roux Reconstruction Database:{" "}
                        <Link href="https://docs.google.com/spreadsheets/d/16OiJavT44OOGgxPjxk8sJ4NvTnfqM8oz2miVH0rB3bs/edit?gid=320848681#gid=320848681" target="_blank" rel="noopener">
                        Google Sheets
                        </Link>
                    </li>
                    <li>
                        Anto's Reconstructions:{" "}
                        <Link href="https://www.reddit.com/r/rouxles/" target="_blank" rel="noopener">
                        Reddit
                        </Link>
                    </li>
                    </ul>
                </Box>
            </TabPanel>
            <TabPanel value={subTab} index={5}>
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
            
        </Box>
    );
}