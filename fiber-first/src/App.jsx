import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'
import { Experience } from "./Components/Experience"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas camera={{
      fov: 95,
      position: [-10.14, 30, 22.3]
    }}>
      <Experience />
    </Canvas>
  )
}

export default App
