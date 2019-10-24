import React from 'react'

export default function Submit(props){
    return(
        <button className='btn' {...props}>
            Submit
            {props.children}
        </button>
    )
}