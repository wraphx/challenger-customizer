/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Challenger.glb 
*/

import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Challenger(props) {
  const { nodes, materials } = useGLTF('models/Challenger.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }



  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 || overlay==34 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
        <mesh geometry={nodes.Object_10.geometry} material={materials['3_wheel.002']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.glass_01} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.glass_02} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.headlight_front_02} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.disk} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.glass_03} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.headlight_back_02} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.headlight_back_01} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.mirror} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.salon} />
        <mesh geometry={nodes.Object_2.geometry} material={materials['3_support_black.002']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.headlight_back_03} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.headlight_front_01} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.base} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.grid} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['3_support.002']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['3_support_color.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.back} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.back} />
      </group>
    </group>
  )
}

useGLTF.preload('/Challenger.glb')
