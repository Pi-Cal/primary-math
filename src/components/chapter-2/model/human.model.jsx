/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Human(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL +'/models/object/human.glb')
  return (
    <group ref={group} {...props} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.among_us_001.geometry}
        material={materials['red color']}
        position={[...props.position]}
        scale={[0.005, 0.005, 0.005]}
      />
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL +'/models/object/human.glb')
