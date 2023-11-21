import React, { useRef } from 'react'
import DynCanvas from './DynCanvas'

const BallCanvas = ({ icon }) => {
  const groupRef = useRef()

  const BallProps = {
    dpr: [1, 2],
    gl: { preserveDrawingBuffer: true },
    model: 'ball'
  }
  return (
    <DynCanvas props={BallProps} imgUrl={icon} groupRef={groupRef}/>
  )
}

export default BallCanvas