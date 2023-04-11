import React, { useCallback, useState } from 'react';
import UseCount from './UseCount';

export default function Incre() {

    let [number , count ] = UseCount()
    let [number1 , count1 ] = UseCount()
    let [number2 , count2 ] = UseCount()

  return (

    <>
        <button onClick={count}>click me</button>
        <br />
        {number}
    <br />
        <button onClick={count1}>click me</button>
        <br />
        {number1}
        <br />
        <button onClick={count2}>click me</button>
        <br />
        {number2}
    
    </>
  )
}
