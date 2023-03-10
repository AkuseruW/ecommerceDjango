import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { saveShippingAddress } from '../../actions/cartActions'
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../../components/Stepper';
import '../../styles/checkout/shipping.scss'

function Shipping() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    dispatch(saveShippingAddress(data))
    navigate('/payment')
  }

  return (
    <div className="container">
      <CheckoutSteps
        isValidStep1={true}
        isValidStep2={true}
        activeStep={1}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: true })}
          />
          {errors.city && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country" {...register("country", { required: true })}>
            <option value="">Select Country</option>
            <option value="Belgium">Belgium</option>
            <option value="France">France</option>
            <option value="Swiss">Swiss</option>
            <option value="Luxemburg">Luxemburg</option>
          </select>
          {errors.country && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            {...register("postalCode", { required: true })}
          />
          {errors.postalCode && <span>This field is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Shipping