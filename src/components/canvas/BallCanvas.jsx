import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Float } from '@react-three/drei'
import CanvasLoader from '../Loader'
import BallModel from './BallModel'

const BallCanvas = ({ icon }) => {
  const groupRef = useRef()
  return (
    <Canvas
    // frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <BallModel imgUrl={icon} groupRef={groupRef} />
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default BallCanvas