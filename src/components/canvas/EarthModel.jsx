import React , {Suspense} from 'react'
import {PresentationControls, useGLTF} from '@react-three/drei'

const EarthModel = () => {
    const earth = useGLTF('./planet/scene.gltf')

  return (
    <PresentationControls
    cursor={true}
  >
    <primitive
    object={earth.scene}
    scale={2.25}
    position-y={0}
    rotation-y={0}
    />
    </PresentationControls>
  )
}

export default EarthModel