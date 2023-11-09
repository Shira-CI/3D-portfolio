import React , {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const EarthModel = () => {
    const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
    object={earth.scene}
    scale={2.25}
    position-y={0}
    rotation-y={0}
    />
  )
}

export default EarthModel