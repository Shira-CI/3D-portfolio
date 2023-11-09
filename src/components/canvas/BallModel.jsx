import React from 'react'
import { Decal, Float, useTexture, PresentationControls } from '@react-three/drei'

const BallModel = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={2}
      rotationIntensity={2}
      floatIntensity={4}
      floatingRange={[0, 0]}
    >
      <PresentationControls
        enabled={true}
        global={false}
        cursor={true}
        snap={true}
      >

        <mesh castShadow receiveShadow scale={2.75}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 0.06]} />
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />

          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </PresentationControls>
    </Float>

  )
}

export default BallModel