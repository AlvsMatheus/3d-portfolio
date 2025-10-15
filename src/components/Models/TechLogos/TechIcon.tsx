import { Environment, Float, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"

type TechIconProps = {
  model: {
    modelPath: string
    scale?: number 
    rotation?: number[]
    name?: string
  }
}

const TechIcon = ({ model }: TechIconProps) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === "interactive Developer") {
      scene.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.name === "Object_5"
        ) {
          child.material = new THREE.MeshStandardMaterial({
            color: "red",
          })
        }
      })
    }
  }, [scene, model.name])

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float
        speed={5.5}
        rotationIntensity={0.5}
        floatIntensity={0.9}
      >
        <group scale={model.scale} rotation={(model.rotation || [0, 0, 0]) as [number, number, number]}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
