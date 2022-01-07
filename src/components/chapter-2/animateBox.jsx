import { Billboard, Text } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import Tree from './model/tree.model';
import House from './model/house.model';
import Match from './model/match.model';
import Bulb from './model/bulb.model';
import Rock from './model/rock.model';
import Human from './model/human.model';

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

const generateSpacePos = (totalObj, firstObj, lastObj) => {
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

export default function AnimateBox({totalObj, totalSpace, space, object, firstObj=null, lastObj=null}) {
    const [xPos, setX] = useState(() => generatePos(totalObj));
    const [yPos] = useState(0);
    const [xSpace, setXSpace] = useState(() => generateSpacePos(totalObj, firstObj, lastObj));
    const [ySpace] = useState(-0.8);

    useEffect(() => {
        setX(() => generatePos(totalObj));
        setXSpace(() => generateSpacePos(totalObj));
    }, [totalObj])

    return (
        <>
            {
                xPos.map((x, index) => {
                    let switchObj = object;
                    if (firstObj !== null && index === 0) {
                        switchObj = firstObj;
                    }
                    if (lastObj !== null && index === totalObj - 1) {
                        switchObj = lastObj;
                    }
                    switch(switchObj) {
                        case "tree":
                            return <Tree key={index} position={[x, yPos, 0]} />
                        case "house":
                            return <House key={index} position={[x, yPos - 0.4, 0]} />
                        case "bulb":
                            return <Bulb key={index} position={[x, yPos - 0.4, 0]} />
                        case "match":
                            return <Match key={index} position={[x, yPos - 0.2, 0]} />
                        case "rock":
                            return <Rock key={index} position={[x, yPos - 0.2, 0]} />
                        case "human":
                            return <Human key={index} position={[x, yPos - 0.1, 0]} />
                        default:
                            return null;
                    }
                })
            }
            {
                xSpace.map((x, index) => (
                    <group key={index}>
                        {index === Math.floor(xSpace.length/2) &&
                        <Billboard follow={true} lockX={false} lockY={false} lockZ={false} position={[x, ySpace + 0.3, 0]}>
                            <Text fontSize={0.5} outlineWidth={'5%'} outlineColor="#000000" outlineOpacity={1} font='/AndikaNewBasic-B.ttf'>
                                {space}
                            </Text>
                        </Billboard>
                        }
                        <mesh key={index} position={[x, ySpace, 0]}>
                            <boxGeometry args={[1.95, 0.1, 0.1]} />
                        </mesh>
                    </group>
                ))
            }
            <group>
                <Billboard follow={true} lockX={false} lockY={false} lockZ={false} position={[0, ySpace - 0.7, 0]}>
                    <Text fontSize={0.5} outlineWidth={'5%'} outlineColor="#000000" outlineOpacity={1} font='/AndikaNewBasic-B.ttf'>
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