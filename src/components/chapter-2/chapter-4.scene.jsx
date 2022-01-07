/* eslint-disable react-hooks/exhaustive-deps */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Tree from './model/tree.model';
import House from './model/house.model';
import Rock from './model/rock.model';
import Bulb from './model/bulb.model';
import Human from './model/human.model';
import Match from './model/match.model';

const yPos = 0.5;
const generatePos = (width, height) => {
    let res = [];
    if (width % 2 !== 0) {
        for (let i = Math.ceil(-width / 2); i <= Math.floor(width / 2); i++) {
            res.push([i, yPos, 0]);
            res.push([i, yPos, height - 1]);
        }
        for (let i = 1; i < height - 1; i++) {
            res.push([Math.ceil(-width / 2), yPos, i]);
            res.push([Math.floor(width / 2), yPos, i]);
        }
    } else {
        for (let i = - (width - 1) / 2; i <= width / 2; i++) {
            res.push([i, yPos, 0]);
            res.push([i, yPos, height - 1]);
        }
        for (let i = 1; i < height - 1; i++) {
            res.push([-(width - 1) / 2, yPos, i]);
            res.push([(width - 1) / 2, yPos, i]);
        }
    }
    return res;
}

const Chapter4Scene = ({index, questionList}) => {
    const scene = questionList[index].scene;
    const [width, setWidth] = useState(scene.widthObj);
    const [height, setHeight] = useState(scene.heightObj);
    const [obj, setObj] = useState(scene.object);
    const [pos, setPos] = useState(() => generatePos(width, height))
    
    useEffect(() => {
        let newScene = questionList[index].scene;
        setWidth(newScene.widthObj);
        setHeight(newScene.heightObj);
        setObj(newScene.object);
        setPos(() => generatePos(newScene.widthObj, newScene.heightObj));
    }, [index])

    return (
        <div className="w-100 h-100 canvas-container">
            <Suspense fallback={<Spinner />}>
                <Canvas camera={{position: [-5, 10, 12]}}>
                    <color attach="background" args={["#63acff"]} />
                    <OrbitControls />
                    <ambientLight intensity={-1} />
                    {
                        pos.map((item, index) => {
                            switch (obj) {
                                case "tree":
                                    return <Tree position={[item[0], yPos, item[2]]} />
                                case "house":
                                    return <House position={[item[0], yPos - 0.4, item[2]]} />
                                case "match":
                                    return <Match position={[item[0], yPos - 0.3, item[2]]} />
                                case "rock":
                                    return <Rock position={[item[0], yPos - 0.1, item[2]]} />
                                case "bulb":
                                    return <Bulb position={[item[0], yPos - 0.5, item[2]]} />
                                case "human":
                                    return <Human position={[item[0], yPos - 0.1, item[2]]} />
                                default:
                                    return null
                            }
                        })
                    }
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[2 * (width - 1), 0.1, 0.1]} />
                    </mesh>
                    <mesh position={[width - 1, 0, height - 1]} rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[2 * (height - 1), 0.1, 0.1]} />
                    </mesh>
                    <mesh position={[0, 0, (height - 1) * 2]}>
                        <boxGeometry args={[2 * (width - 1), 0.1, 0.1]} />
                    </mesh>
                    <mesh position={[-width + 1, 0, height - 1]} rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[2 * (height - 1), 0.1, 0.1]} />
                    </mesh>
                </Canvas>
            </Suspense>
        </div>
    )
}

export default Chapter4Scene;