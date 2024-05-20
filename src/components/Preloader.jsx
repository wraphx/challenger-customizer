import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, Loader, OrbitControls } from "@react-three/drei"


import Configurator from "../components/Configurator";
import { Challenger } from "../vehicles/Challenger";
import React from 'react';
import * as typing from '../typer.json';
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typing.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Preloader = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setTimeout(() => {
                    setLoading(false);
                    setCompleted(true);
                }, 2000);
            });
    }, []);

    return (
        <div>
            {loading &&
                <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
                />
            }
            {completed &&
                <div className="App">
                    <Canvas shadows camera={{ position: [0, 0, 20], fov: 35 }}>
                        <color attach="background" args={['#15151a']} />
                        <Suspense fallback={null}>
                            <Challenger scale={3} position={[0, -1.1, 0]} />
                        </Suspense>
                        <hemisphereLight intensity={0.5} />
                        <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={0.5} far={20} />
                        <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                            <ringGeometry args={[0.9, 1, 4, 1]} />
                            <meshStandardMaterial color="white" roughness={0.75} />
                        </mesh>
                        <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                            <ringGeometry args={[0.9, 1, 3, 1]} />
                            <meshStandardMaterial color="white" roughness={0.75} />
                        </mesh>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

                        {/* <Environment preset="city" /> */}
                        <Environment resolution={512}  >
                            {/* Ceiling */}
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                            {/* Sides */}
                            <Lightformer intensity={10} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                            <Lightformer intensity={10} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                            {/* Key */}
                            <Lightformer form="ring" color="gray" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                        </Environment>
                        <ContactShadows position={[0, -0.8, 0.0]} opacity={0.75} scale={10} blur={2.5} far={0.8} />
                        {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
                        <OrbitControls autoRotate enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                    </Canvas>
                    <Configurator />
                </div>
            }
        </div>
    );
};

export default Preloader;
