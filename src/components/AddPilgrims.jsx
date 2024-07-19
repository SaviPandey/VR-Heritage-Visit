import React, { useState,useEffect } from 'react'
import { Container,Stepper,Step,StepButton,Stack,Button,Box } from '@mui/material'
import InLocation from './InLocation'
import AddImages from './AddImages'
import AddDetails from './AddDetails'
import { useValue } from '../App'
import { Send } from '@mui/icons-material';
import { createPilgrim } from './createPilgrim'

const AddPilgrims = ({ setPage }) => {
    const {
        state: { images, details,location, currentUser },
     dispatch,
    } = useValue();
    const [activeStep,setActiveStep] = useState(0)
    const [steps,setSteps] = useState([
        {label:'Location',completed:false},
        {label:'Details',completed:false},
        {label:'Images',completed:false}
    ])
    const [showSubmit, setShowSubmit] = useState(false);
    
    const CheckDisabled = () => {
        if(activeStep < steps.length - 1 ) return false
        const index = findUnfinished()
        if(index !== -1 ) return false
        return true
    }
    const findUnfinished = () => {
        return steps.findIndex(step => !step.completed)
    }

    const handleNext = () => {
        if(activeStep < steps.length - 1){
            setActiveStep(activeStep => activeStep + 1)
        }else{
            const stepIndex = findUnfinished()
            setActiveStep(stepIndex)
        }
    }

    useEffect(() => {
        if (images.length) {
          if (!steps[2].completed) setComplete(2, true);
        } else {
          if (steps[2].completed) setComplete(2, false);
        }
      }, [images]);
      useEffect(() => {
        if (details.title.length > 4 && details.description.length > 9) {
          if (!steps[1].completed) setComplete(1, true);
        } else {
          if (steps[1].completed) setComplete(1, false);
        }
      }, [details]);
      useEffect(() => {
        if (location.lng || location.lat) {
          if (!steps[0].completed) setComplete(0, true);
        } else {
          if (steps[0].completed) setComplete(0, false);
        }
      }, [location]);
      const setComplete = (index, status) => {
        setSteps((steps) => {
          steps[index].completed = status;
          return [...steps];
        });
      };
      useEffect(() => {
        if (findUnfinished() === -1) {
          if (!showSubmit) setShowSubmit(true);
        } else {
          if (showSubmit) setShowSubmit(false);
        }
      }, [steps]);

      const handleSubmit = () => {
        const pilgrim = {
          lng: location.lng,
          lat: location.lat,
          price: details.price,
          title: details.title,
          description: details.description,
          images,
        };
        createPilgrim(pilgrim, currentUser, dispatch, setPage);
      };
  return (
    <Container sx={{my:4}}>
        <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        sx={{mb:3}}>
        
        {steps.map((step,index) => (
            <Step key={step.label} completed={step.completed}>
                <StepButton onClick={() => setActiveStep(index)}>
                    {step.label}
                </StepButton>
            </Step>
        ))}
        </Stepper>
        <Box
        sx={{pb:7}}>
            {{
                0:<InLocation />,
                1:<AddDetails />,
                2:<AddImages />
            }[activeStep]}
        
        <Stack
        direction="row"
        sx={{pt:2 , justifyContent:'space-around'}}>
            <Button
            color='inherit'
            disabled={!activeStep}
            onClick={() => setActiveStep(activeStep => activeStep - 1)}>
                Back
            </Button>
            <Button
            disabled={CheckDisabled()}
            onClick={handleNext}>

            Next</Button>
        </Stack>
        {showSubmit && (
          <Stack sx={{ alignItems: 'center' }}>
            <Button
              variant="contained"
              endIcon={<Send />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        )}
        </Box>
    </Container>
  )
}

export default AddPilgrims