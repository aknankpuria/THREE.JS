import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import React from 'react'

const RotatingCube = () => {
  const meshref = React.useRef();
  useFrame(() => {
    if(!meshref.current) return
    meshref.current.rotation.x += 0.01
    meshref.current.rotation.y += 0.01
  })
  return (
    <mesh ref={meshref}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={'#468585'} emmisive={'#468585'} />
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{width: '100vw', height: '100vh' , display: 'flex'
    , justifyContent: 'center' , alignItems: 'center' }}>
      hello three.js
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]}  intensity={10} color={'#9CDBA6'} />

      <color attach="background" args={['#f0f0f0']} />

      <RotatingCube />  
      </Canvas>
  )
}

export default App