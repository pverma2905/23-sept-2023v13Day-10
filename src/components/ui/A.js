'use client'
import React from 'react'
import B from './B'

export default function A(props) {
    console.log(props)
  return (
    <>
       <div> A Component {props.message}</div>
        <B message={props.message}/>
    </>
  )
}
