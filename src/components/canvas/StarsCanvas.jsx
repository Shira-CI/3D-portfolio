import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import DynCanvas from './DynCanvas'

const StarsCanvas = () => {
  const starsProps = {
    camera: { position: [0, 0, 1] },
    model: 'stars'
  }
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <DynCanvas props={starsProps} />
    </div>
  )
}

export default StarsCanvas




