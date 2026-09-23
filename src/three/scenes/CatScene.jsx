import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import Cat from '../models/Cat.jsx'

export default function CatScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 2, -3]} intensity={0.6} />

      <Suspense fallback={null}>
        <Center>
          <Cat />
        </Center>
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableDamping
        minDistance={3}
        maxDistance={10}
      />
    </Canvas>
  )
}
