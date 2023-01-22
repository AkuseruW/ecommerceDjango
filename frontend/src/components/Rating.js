import React from 'react'
import { HiStar } from "react-icons/hi2";

function Rating({ value, text, color }) {
    return (
        <div className='rating'>
            <span>
                <i style={color} className={
                    value >= 1
                        ? <HiStar />
                        : value >= 0.5

                }>

                </i>
            </span>
        </div>
    )
}

export default Rating