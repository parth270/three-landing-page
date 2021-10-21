import React,{useRef,Suspense} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
// import {OrbitControls} from '@react-three/drei';
import Mountain from './components/Mountain/Mountain';

function App() {
  return (
    <>
      <div className="container" >
        <h1>Take the Treck</h1>
        <p>let's take a treck in the mountains, shall we? where nature have blessed us with fresh air, beautiful greenery and lakes</p>
        <button>Go Biking</button>
      </div>
      <div className="canvas">
        <Canvas camera={{position:[0,0,3],fov:75}} >
          <pointLight position={[0.2,10,4.4]} intensity={2} color="#00b3ff"/>
          <Suspense fallback={null} >
            <Mountain args={[3,3,64,64]} color={"gray"} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;