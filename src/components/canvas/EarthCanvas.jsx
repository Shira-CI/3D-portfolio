import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'
import EarthModel from './EarthModel'
import RobotModel from './RobotModel'
import useIsInViewPort from '../../hooks/UseIsInViewPort'
import DynCanvas from './DynCanvas'


const EarthCanvas = () => {
  const earthProps = {
    camera: {
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    },
    gl: { preserveDrawingBuffer: true },
    model: 'earth'
  }

  return (
    <DynCanvas props={earthProps} />
  )
}

export default EarthCanvas