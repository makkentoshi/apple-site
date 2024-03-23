// Desc: ModelView component for displaying the 3D model of the phone

import { PerspectiveCamera, View } from "@react-three/drei";
import { AmbientLight } from "three";
import Lights from "./Lights";
import { Suspense } from "react";
import { IPhone } from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2
      } ? "right-[-100%] : ''`}
    >
      <ambientLight intensity={0.3}></ambientLight>

      <PerspectiveCamera makeDefault position={[0, 0, 4]}></PerspectiveCamera>

      <Lights></Lights>

      <Suspense fallback={<div>Loading...</div>}>
        <IPhone></IPhone>
      </Suspense>
    </View>
  );
};

export default ModelView;
