// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/components/stepper.scss'

// function CheckoutSteps({ step1, step2, step3, step4 }) {
//     return (
//         <nav className="checkout-steps">
//             <Link
//                 className={`checkout-steps-item ${step1 ? "active" : "disabled"}`}
//                 to="/cart"
//             >
//                 Cart
//             </Link>
//             <Link
//                 className={`checkout-steps-item ${step2 ? "active" : "disabled"}`}
//                 to="/shipping"
//             >
//                 Shipping
//             </Link>
//             <Link
//                 className={`checkout-steps-item ${step3 ? "active" : "disabled"}`}
//                 to="/payment"
//             >
//                 Payment
//             </Link>
//             <Link
//                 className={`checkout-steps-item ${step4 ? "active" : "disabled"}`}
//                 to="/placeorder"
//             >
//                 Place Order
//             </Link>
//         </nav>
//     );
// }

// export default CheckoutSteps;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { Link } from 'react-router-dom';

// const steps = [
//   { name: 'Cart', link: '/cart' },
//   { name: 'Shipping', link: '/shipping' },
//   { name: 'Payment', link: '/payment' },
//   { name: 'Place Order', link: '/placeorder' }
// ];

// export default function CheckoutSteps({ step1, step2, step3, step4 }) {
//   const activeStep = step4 ? 3 : step3 ? 2 : step2 ? 1 : step1 ? 0 : -1;
//   return (
//     <Box sx={{ width: '70%' }}>
//       <Stepper nonLinear activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={step.name}>
//             <StepLabel>
//               <Link
//                 className={`checkout-steps-item ${activeStep >= index ? "active" : "disabled"}`}
//                 to={step.link}
//               >
//                 {step.name}
//               </Link>
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }



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

export default function CheckoutSteps({ isValidStep1, isValidStep2, isValidStep3, isValidStep4 }) {
  const activeStep = isValidStep4 ? 3 : isValidStep3 ? 2 : isValidStep2 ? 1 : isValidStep1 ? 0 : -1;

  return (
    <Box sx={{ width: '70%' }}>
      <Stepper  activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.name}>
            <StepLabel>
              <Link
                className={`checkout-steps-item ${activeStep >= index ? "active" : "disabled"}`}
                to={step.link}
                onClick={(e) => {
                  if (!step.isValid) {
                    e.preventDefault();
                  }
                }}
              >
                {step.name}
              </Link>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}


