import { Suspense, useEffect, useState, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import RobotModel from './RobotModel'
import useIsInViewPort from '../../hooks/UseIsInViewPort'




const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const canvasRef = useRef(null)
  const isIntersecting = useIsInViewPort(canvasRef)

  // console.log(isIntersecting , 'robot')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)

    }
  }, [])


  return (
    // <>
    <span ref={canvasRef} >
      {isIntersecting && (
        <Canvas
          // frameloop='always'

          shadows
          camera={{ position: [-20, 10, 10], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <RobotModel isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </span>
  )
}



export default RobotCanvas