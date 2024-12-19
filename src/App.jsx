import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1, 3], fov: 50 }} shadows>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;