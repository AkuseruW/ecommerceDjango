import React from 'react'
import CheckoutSteps from '../../components/Stepper';


function Payment() {
  return (
    <div className='container'>
      <CheckoutSteps isValidStep1={true} isValidStep2={true} isValidStep3={true}/>
        
    </div>
  )
}

export default Payment