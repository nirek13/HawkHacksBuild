import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Brain from './components/Brain'
import InstancedUniformMesh from './components/shaders/InstancedUniformMesh'

export default function BrainApp() {
  return (
    <Canvas>
        <ambientLight/>
        <OrbitControls enableRotate={true} autoRotate={true}/>
        <Suspense fallback={null}>
            <Brain />
            {/* <InstancedUniformMesh /> */}
        </Suspense>
    </Canvas>
  )
}
