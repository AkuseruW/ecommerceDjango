import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';

const steps = [
  { name: 'Cart', link: '/cart', isValid: true },
  { name: 'Shipping', link: '/shipping', isValid: false },
  { name: 'Payment', link: '/payment', isValid: false },
  { name: 'Place Order', link: '/placeorder', isValid: false }
];

export default function CheckoutSteps({ isValidStep1, isValidStep2, isValidStep3, isValidStep4, activeStep }) {
  return (
    <Box sx={{ width: '60%', margin: '0 auto' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.name}>
            <StepLabel>
              {activeStep >= index ? (
                <Link
                  className={`checkout-steps-item ${activeStep === index ? "active" : ""}`}
                  to={step.link}
                >
                  {step.name}
                </Link>
              ) : (
                <span className="checkout-steps-item disabled">{step.name}</span>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

