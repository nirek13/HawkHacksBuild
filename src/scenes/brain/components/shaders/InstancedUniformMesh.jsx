// src/components/UniformMesh.js

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Geometry = () => {
  const geometry = new THREE.BufferGeometry();
  const { nodes, scene, materials } = useGLTF('./brain/brain.glb')
  const brain = scene.children[0]

  const positions = brain.geometry.attributes.position
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));


  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);

  return (
    <Canvas>
      <ambientLight />
      <OrbitControls enableRotate={true} autoRotate={true}/>
    </Canvas>
  );
};

export default Geometry;