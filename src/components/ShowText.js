import React, { useState } from 'react'
import UseToggle from './UseToggle'


export default function ShowText() {

    let [show,toggle] = UseToggle()
  return (
    <div>
        <button onClick={toggle}>
            {show ? 'hide' : 'show'}
        </button>
        {show && "hiddenn text"}
    </div>
  )
}
