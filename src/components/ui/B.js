import React from 'react'
import C from './C'

export default function B(props) {
  return (
    <>
    <div>B Component {props.message}</div>
    <C message={props.message}/>
    </>
  )
}
