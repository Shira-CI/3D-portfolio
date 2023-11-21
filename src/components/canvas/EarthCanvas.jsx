import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import CanvasLoader from '../Loader'
import EarthModel from './EarthModel'
import useIsInViewPort from '../../hooks/UseIsInViewPort'


const EarthCanvas = () => {
  const canvasRef = useRef(null)
  const isIntersecting = useIsInViewPort(canvasRef)
  return (
    <span ref={canvasRef} >
    {isIntersecting && (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthModel />
      </Suspense>
    </Canvas>
 )}
   </span>
  )
}

export default EarthCanvas