/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/brain/brain.glb 
*/
import { InstancedUniformsMesh } from 'three-instanced-uniforms-mesh'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { extend } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { PerspectiveCamera, BoxGeometry, Color, MathUtils, Object3D, Scene, ShaderMaterial, Vector3, WebGLRenderer } from 'three'
import { fragmentShader, vertexShader } from './shaders/shaders.js'
import { instance } from 'three/examples/jsm/nodes/Nodes.js'

extend({ InstancedUniformsMesh })
export default function Brain(props) {
  const containerRef = useRef(null);
  const container = containerRef.current;

  const { nodes, scene, materials } = useGLTF('./brain/brain.glb')
  materials[""].metalness = 0;

  const brain = scene.children[0]
  const { hover, setHover } = useState(0);

  const colors = [
    new Color(0xEAE0DA),
    new Color(0xFFF8E3),
    new Color(0xF1F1F1),
    new Color(0xF2EFE5),
    new Color(0x7286D3),
    new Color(0xFD8A8A)
  ]

  const geometry = new BoxGeometry(0.004, 0.004, 0.004, 1, 1, 1)
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uPointer: { value: new Vector3() },
      uColor: { value: new Color() },
      uRotation: { value: 0 },
      uSize: { value: 0 },
      uHover: { value: hover },
    }
  })

  const instancedMesh = new InstancedUniformsMesh(geometry, material, brain.geometry.attributes.position.count)

  const dummy = new Object3D()
  const positions = brain.geometry.attributes.position.array
  for(let i = 0; i < positions.length; i += 3){
    dummy.position.set(
      positions[i + 0],
      positions[i + 1],
      positions[i + 2]
    )
    dummy.updateMatrix()

    instancedMesh.setMatrixAt(i / 3, dummy.matrix)
    instancedMesh.setUniformAt('uRotation', i / 3, MathUtils.randFloat(-1, 1))
    instancedMesh.setUniformAt('uSize', i / 3, MathUtils.randFloat(0.3, 3))
    let colorIndex = MathUtils.randInt(0, colors.length - 1)
    instancedMesh.setUniformAt('uColor', i / 3, colors[colorIndex])
  }

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Brain_Model.geometry} material={nodes.Brain_Model.material} />
    </group>
  )
}

useGLTF.preload('./brain/brain.glb')