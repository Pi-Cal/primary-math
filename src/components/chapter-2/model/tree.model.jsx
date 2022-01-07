/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tree(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/object/tree.glb')
  return (
    <group ref={group} {...props}>
      <group
        position={[...props.position]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.002, 0.002, 0.002]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ID17.geometry}
          material={materials['Leaves.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ID17_1.geometry}
          material={materials.Log_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ID17_2.geometry}
          material={materials.Log_top}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/object/tree.glb')