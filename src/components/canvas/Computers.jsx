import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const RobotModel = () => {
  const robot = useGLTF('./robot/scene.gltf')
  // const robot = useGLTF("./desktop_pc/scene.gltf")

  const [hovered, setHovered] = useState(false)


  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])



  return (
    <>

      <mesh >
        <hemisphereLight intensity={0.5} groundColor='black' />
        <pointLight intensity={2} />
        <spotLight
          position={[-20, 50, 10]}
          // position={[0, 0, 0]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={robot.scene}
          scale={2.5}
          // position={[-2, -2.8, 0]} 
          position={[3, -2.5, 2]}
          rotation={[-0.01, -0.2, 0.2]}
        />

      </mesh>
    </>
  )
}

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [-20, 10, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RobotModel />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RobotCanvas