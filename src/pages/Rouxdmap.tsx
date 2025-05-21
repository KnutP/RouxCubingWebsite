import * as React from 'react';
import { Box, Typography, Paper, Step, Stepper, StepButton, Button, Link } from '@mui/material';


export default function Roadmap() {


    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', maxWidth:'1440px' }}>

            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
                    <Typography variant="h3">Rouxdmap to Sub-X</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>

            <Box sx={{ width: '100%', padding: 2}}>
                <Typography variant="h4">Video Roadmap:</Typography>
                <ul>
                <li>
                    <Link href="https://www.youtube.com/playlist?list=PLBHocHmPzgIh_ioQur_FmQ8vdRykjQJbn" target="_blank" rel="noopener">
                    Kian's "Why You're Not Sub-X With Roux" series - YouTube
                    </Link>
                </li>
                </ul>
                <Typography variant="h4">Text Roadmap</Typography>
                <Typography variant="h6" gutterBottom>
                    Coming soon!
                </Typography>

                
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