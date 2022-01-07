/* eslint-disable react-hooks/exhaustive-deps */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import AnimateBox from './animateBox';

const ThreeJSComponent = ({index, questionList}) => {
    return (
        <div className="w-100 h-100 canvas-container">
            <Suspense fallback={<Spinner />}>
                <Canvas camera={{position: [0, 0, 10]}}>
                    <color attach="background" args={["#63acff"]} />
                    <OrbitControls />
                    <ambientLight intensity={-1} />
                    <AnimateBox {...questionList[index].scene}/>
                </Canvas>
            </Suspense>
        </div>
    )
}

export default ThreeJSComponent;