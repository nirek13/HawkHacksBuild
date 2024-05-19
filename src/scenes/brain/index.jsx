import { useGLTF } from '@react-three/drei';
import { React, useLayoutEffect, useRef } from 'react'
import BrainApp from './brainapp'
import gsap from 'gsap'
import Geometry from './components/shaders/InstancedUniformMesh';

const Brain = () => {
  return (
    <div className="brainapp" style={{height: '100vh', width: '90%', margin: '0 auto'}}>
      <BrainApp />
      <Geometry/>
    </div>
  )
}

useGLTF.preload('./brain/brain.glb')

export default Brain