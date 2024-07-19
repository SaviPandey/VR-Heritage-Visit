import React from 'react'
import ScriptTag from 'react-script-tag';
import Protected from './protected/protected';
import'./css/razer.css'

const Razer = () => {
  return (
    <Protected >
    <div className='donation-main'>
    <h1>DONATE HERE </h1>
    <form>
      <ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NymJYzEjiPU4ez" async />
      </form>
    </div>
    </Protected>
  )
}

export default Razer