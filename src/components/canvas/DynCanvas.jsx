import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import RobotModel from './RobotModel'
import EarthModel from './EarthModel'
import useIsInViewPort from '../../hooks/UseIsInViewPort'
import StarsModel from './StarsModel'
import BallModel from './BallModel'

const DynCanvas = ({ props, imgUrl }) => {
    const [isMobile, setIsMobile] = useState(false)
    const canvasRef = useRef(null)
    const isIntersecting = useIsInViewPort(canvasRef)

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
    const dpr = props.dpr ? props.dpr : undefined
    return (
        <span ref={canvasRef} >
            {isIntersecting && (
                <Canvas
                    frameloop='always'
                    shadows
                    camera={props.camera}
                    gl={props.gl ? props.gl : null}
                    dpr={dpr}
                >
                    <Suspense fallback={<CanvasLoader />}>
                        <OrbitControls enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                        {props.model === 'robot' && <RobotModel isMobile={isMobile} />}
                        {props.model === 'earth' && <EarthModel />}
                        {props.model === 'stars' && <StarsModel />}
                        {props.model === 'ball' && <BallModel imgUrl={imgUrl} />}
                    </Suspense>
                    <Preload all />
                </Canvas>
            )}
        </span>
    )
}

export default DynCanvas