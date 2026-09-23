import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { MathUtils } from 'three'
import { catModel } from '../../data/models.js'

export default function Cat(props) {
  const group = useRef()
  const { scene, animations } = useGLTF(catModel.url)
  const { actions, names } = useAnimations(animations, group)

  // uses the animation on file .gltf
  useEffect(() => {
    const action = actions[names[0]]
    action?.reset().fadeIn(0.5).play()
    return () => action?.fadeOut(0.5)
  }, [actions, names])

  // the cat smoothly follows the mouse. (pointer goes -1 to 1)
  useFrame((state, delta) => {
    if (!group.current) return
    const { x, y } = state.pointer
    const t = 1 - Math.exp(-4 * delta)
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, x * 0.6, t)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -y * 0.3, t)
  })

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(catModel.url)
