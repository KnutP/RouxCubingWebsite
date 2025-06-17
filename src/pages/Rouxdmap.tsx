import * as React from 'react';
import { Box, Typography, Paper, Step, Stepper, StepButton, Button, Link } from '@mui/material';
import { List, ListItem, ListItemText, Divider, Icon, ListItemButton, ListItemIcon, ListSubheader } from '@mui/material';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function Roadmap() {

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', maxWidth: '1440px' }}>

        <Paper elevation={1}>
          <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
            <Typography variant="h3">Rouxdmap to Sub-X</Typography>
          </Box>
        </Paper>

        <Paper elevation={1}>
        
          <Box sx={{ width: '100%', padding: 2 }}>
            <Typography variant="h4">Video Roadmap:</Typography>
            <ul>
              <li>
                <Link href="https://www.youtube.com/playlist?list=PLBHocHmPzgIh_ioQur_FmQ8vdRykjQJbn" target="_blank" rel="noopener">
                  Kian's "Why You're Not Sub-X With Roux" series - YouTube
                </Link>
              </li>
            </ul>
            <Typography variant="h4">Text Roadmap</Typography>
            <Typography>
              &nbsp;&nbsp;Coming soon!
            </Typography>
          </Box>

          <Divider orientation="horizontal" variant="middle" flexItem />

          <Box sx={{ width: '100%', padding: 2 }}>
            <Typography variant="h4">Roux Techniques Table</Typography>
            <Typography>&nbsp;&nbsp;A loose guide for when you should learn different Roux techniques.</Typography>

            <TableContainer component={Paper}>
              <Table size="small" aria-label="simple table">
                <colgroup>
                  <col style={{ width: '200px' }} />
                  <col style={{ width: '250px' }} />
                  <col style={{ width: '250px' }} />
                  <col style={{ width: '250px' }} />
                  <col style={{ width: '250px' }} />
                </colgroup>

                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell align="center">
                      <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=0')}>
                        <ListItemIcon>
                          <Icon sx={{ fontSize: 30, mr: '0px', display: 'flex' }}>
                            <img src={require("../img/f2b.png")} style={{ width: '100%' }} />
                          </Icon>
                        </ListItemIcon>
                        <Typography variant="h6" color="textSecondary">First Block</Typography>
                      </ListItemButton>
                    </TableCell>
                    <TableCell align="center">
                      <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=1')}>
                        <ListItemIcon>
                          <Icon sx={{ fontSize: 30, mr: '0px', display: 'flex' }}>
                            <img src={require("../img/f2b.png")} style={{ width: '100%' }} />
                          </Icon>
                        </ListItemIcon>
                        <Typography variant="h6" color="textSecondary">Second Block</Typography>
                      </ListItemButton>
                    </TableCell>
                    <TableCell align="center">
                      <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=0')}>
                        <ListItemIcon>
                          <Icon sx={{ fontSize: 30, mr: '0px', display: 'flex' }}>
                            <img src={require("../img/cmll.png")} style={{ width: '100%' }} />
                          </Icon>
                        </ListItemIcon>
                        <Typography variant="h6" color="textSecondary">CMLL</Typography>
                      </ListItemButton>
                    </TableCell>
                    <TableCell align="center">
                      <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=0')}>
                        <ListItemIcon>
                          <Icon sx={{ fontSize: 30, mr: '0px', display: 'flex' }}>
                            <img src={require("../img/solved.png")} style={{ width: '100%' }} />
                          </Icon>
                        </ListItemIcon>
                        <Typography variant="h6" color="textSecondary">LSE</Typography>
                      </ListItemButton>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="textSecondary">Basic</Typography>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=0')}>
                          <ListItemText primary="Square/line blockbuilding" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=0')}>
                          <ListItemText primary="Inspect full FB" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=1')}>
                          <ListItemText primary="Basic SB algs" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=0')}>
                          <ListItemText primary="Algs" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=6')}>
                          <ListItemText primary="Execution" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=0')}>
                          <ListItemText primary="EO flowchart" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="textSecondary">Intermediate</Typography>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=0')}>
                          <ListItemText primary="Inspect FB+DR" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=2')}>
                          <ListItemText primary="Nonlinear blockbuilding" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=2')}>
                          <ListItemText primary="Nonmatching centers" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=1')}>
                          <ListItemText primary="Multi-inserts" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=3')}>
                          <ListItemText primary="Multi-angle recognition" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=0')}>
                          <ListItemText primary="EOLR" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=3')}>
                          <ListItemText primary="DFDB" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=1')}>
                          <ListItemText primary="Misoriented centers" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=2')}>
                          <ListItemText primary="Dots skipping/UFUB" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="textSecondary" padding='none'>Advanced/Niche</Typography>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=2')}>
                          <ListItemText primary="CPFB" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=0&subTab=2')}>
                          <ListItemText primary="Non-matching blocks" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton dense onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=4')}>
                          <ListItemText primary="Pinkie Pie" />
                        </ListItemButton>
                        <Divider variant="middle" component="li" />
                        <ListItemButton dense onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=1&subTab=5')}>
                          <ListItemText primary="ACMLL/NMCMLL/TCMLL" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                    <TableCell align="center" padding='none'>
                      <List dense>
                        <ListItemButton onClick={() => window.open('https://rouxcubing.com/#/rouxsources?mainTab=2&subTab=0')}>
                          <ListItemText primary="EOLRb" />
                        </ListItemButton>
                      </List>
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>

          </Box>

          


          {/* <Box sx={{ width: '100%', padding: 1}}>
            <Typography variant="h6">TODO: make roadmap</Typography>
            20, 15, 12, 10, 8
            </Box>

            <Box sx={{ width: '100%', padding: 4}}>
                <HorizontalRoadmapStepper></HorizontalRoadmapStepper>
            </Box> */}

        </Paper>

      </Box>
    </Box>
  );
}

export function HorizontalRoadmapStepper() {
  const steps = ['Sub-60', 'Sub-30', 'Sub-20', 'Sub-15', 'Sub-12', 'Sub-10', 'Sub-8'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}