import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <>
     <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
      <Experience/>
    </Canvas>
    </>
   
  );
}

export default App;