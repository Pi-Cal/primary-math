import { Billboard, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import Tree from './tree.model';

const generatePos = (totalObj) => {
    let res = [];
    if (totalObj % 2 !== 0) {
        for (let i = Math.ceil(-totalObj / 2); i <= Math.floor(totalObj / 2); i++) {
            res.push(i);
        }
    } else {
        for (let i = - (totalObj - 1) / 2; i <= totalObj / 2; i++) {
            res.push(i);
        }
    }
    return res;
}

const generateSpacePos = (totalObj) => {
    let res = [];
    if (totalObj % 2 === 0) {
        for (let i = -totalObj / 2 + 1; i <= totalObj / 2 - 1; i++) {
            res.push(i * 2);
        }
    } else {
        for (let i = - totalObj / 2 + 1; i <= totalObj / 2 - 1; i++) {
            res.push(i * 2);
        }
    }
    return res;
}

export default function AnimateBox({totalObj, totalSpace, space, type}) {
    const [xPos, setX] = useState(() => generatePos(totalObj));
    const [yPos, setY] = useState(0);
    const [xSpace, setXSpace] = useState(() => generateSpacePos(totalObj));
    const [ySpace, setYSpace] = useState(-0.8);

    useEffect(() => {
        setX(() => generatePos(totalObj));
        setXSpace(() => generateSpacePos(totalObj));
    }, [totalObj])

    /* useFrame(() => {
        if (yPos < 1) setPos(yPos + 0.02);
        if (ySpace > -2) setSpace(ySpace - 0.03);
    }) */
    return (
        <>
            {
                xPos.map((x, index) => (
                    <Tree key={index} position={[x, yPos, 0]} />
                ))
            }
            {
                xSpace.map((x, index) => (
                    <group key={index}>
                        <Billboard follow={true} lockX={false} lockY={false} lockZ={false} position={[x, ySpace + 0.3, 0]}>
                            <Text fontSize={0.5} outlineWidth={'5%'} outlineColor="#000000" outlineOpacity={1}>
                                {space}
                            </Text>
                        </Billboard>
                        <mesh key={index} position={[x, ySpace, 0]}>
                            <boxGeometry args={[1.95, 0.1, 0.1]} />
                        </mesh>
                    </group>
                ))
            }
            <group>
                <Billboard follow={true} lockX={false} lockY={false} lockZ={false} position={[0, ySpace - 0.7, 0]}>
                    <Text fontSize={0.5} outlineWidth={'5%'} outlineColor="#000000" outlineOpacity={1}>
                        {totalSpace}
                    </Text>
                </Billboard>
                <mesh position={[0, ySpace - 1, 0]}>
                    <boxGeometry args={[2 * (totalObj - 1), 0.1, 0.1]} />
                </mesh>
            </group>
        </>
    )
}