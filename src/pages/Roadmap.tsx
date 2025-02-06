import * as React from 'react';
import { Box, Typography, Paper, Step, Stepper, StepButton, Button } from '@mui/material';


export default function Roadmap() {


    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>


            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: 1.5, my: 2, padding: 1 }}>
                    <Typography variant="h3">Roadmap to Sub-X</Typography>
                </Box>
            </Paper>

            <Paper elevation={1}>
                <Box sx={{ width: '100%', padding: 1}}>
                <Typography variant="h6">TODO: make roadmap</Typography>
                20, 15, 12, 10, 8
                https://www.youtube.com/playlist?list=PLBHocHmPzgIh_ioQur_FmQ8vdRykjQJbn  
                </Box>

                <Box sx={{ width: '100%', padding: 4}}>
                    <HorizontalRoadmapStepper></HorizontalRoadmapStepper>
                </Box>
                
            </Paper>


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
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    );
  }