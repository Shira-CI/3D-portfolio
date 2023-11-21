import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Float } from '@react-three/drei'
import CanvasLoader from '../Loader'
import BallModel from './BallModel'
import useIsInViewPort from '../../hooks/UseIsInViewPort'


const BallCanvas = ({ icon }) => {
  const groupRef = useRef()
  const canvasRef = useRef(null)
  const isIntersecting = useIsInViewPort(canvasRef)
  return (
    <span ref={canvasRef} >
      {isIntersecting && (
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <BallModel imgUrl={icon} groupRef={groupRef} />
            <OrbitControls enableZoom={false} />
          </Suspense>
          <Preload all />

        </Canvas>
      )}
    </span>
  )
}

export default BallCanvas