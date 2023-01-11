import React from 'react'
type ErrorField = {
    error : string
}
const ErrorForm = ({error}:ErrorField):JSX.Element => {
    // const {error} = props
  return (
    <span className="text-red-400 text-[14px] inline-block">{error.slice(0,1).toUpperCase() + error.slice(1)}</span>
  )
}

export default ErrorForm