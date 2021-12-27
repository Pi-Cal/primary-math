import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { FakeData } from '../data/chapter-1.data';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { PartTest } from './part-test';


const ChapterTest = ({abc, xyz, time}) => {

    const [count, setCount] = useState(0);
    const [catStr, setCatStr] = useState('');

    useEffect(()=> {
        setCatStr(`${abc} - ${xyz}`)
    },[])

    return(
        <div>
            <Badge>{abc}</Badge>
            <h1>{catStr}</h1>
            <PartTest time={time}/>
            <PartTest time='9:45'/>
        </div>
    )
}

export default ChapterTest