import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loading() {
  return (
    <RotatingLines
      strokeColor='#FC4747'
      strokeWidth='5'
      animationDuration='1.4'
      width='50'
      visible={true}
    />
  )
}

export default Loading
