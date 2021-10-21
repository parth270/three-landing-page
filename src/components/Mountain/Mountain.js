import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Mountain = (props) => {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, "textures/mountain.jpg");
  const displacementMap = useLoader(TextureLoader, "textures/displacement.png");
  const alpha = useLoader(TextureLoader, "textures/alpha.jpeg");

  let mouseY=0;

  const animateTerrain=(e)=>{
    mouseY=e.clientY;
  }
  document.addEventListener('mousemove',animateTerrain);
  useFrame(({ clock }) => {
    mesh.current.rotation.z = 0.5 * clock.getElapsedTime();
    mesh.current.material.displacementScale=3 + mouseY*0.003;
  });

  return (
    <mesh ref={mesh} rotation={[181, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={props.args} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        displacementMap={displacementMap}
        alphaMap={alpha}
        transparent={true}
        depthTest={false}
        displacementScale={0.6}
        color={props.color}
      />
    </mesh>
  );
};

export default Mountain;
