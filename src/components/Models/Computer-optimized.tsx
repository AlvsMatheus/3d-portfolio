import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    Cube000_ComputerDesk_0001_1: THREE.Mesh
    Cube000_ComputerDesk_0001_2: THREE.Mesh
  }
  materials: {
    ['ComputerDesk.001']: THREE.MeshStandardMaterial
    ['FloppyDisk.001']: THREE.MeshStandardMaterial
  }
}

export function Computer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/computer-optimized.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized.glb')
