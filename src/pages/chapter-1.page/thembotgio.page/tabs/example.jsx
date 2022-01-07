import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Home2School } from '../../../../components/chapter-1/home2school';
import { Clock } from '../../../../components/chapter-1/part-2.clock.model';
import { ExampleFormControl } from '../../../../components/chapter-1/part-2.example.form';
import './part-2.tabs.css'

export const Example = () => {

    const [time, setTime] = useState({hour: 0, minute: 0, second: 0});
    const [intervalTime, setIntervalTime] = useState({hour: 0, minute: 0, second: 0});
    const [isAddTime, setIsAddTime] = useState(true);

    useEffect(()=> {
        console.log("Time: ", time);
        console.log("Interval: ", intervalTime);
        console.log("Mode: ", isAddTime);
    },[time, intervalTime, isAddTime])
    return(
        <Container className='vh-80 bg-success'>
            <Row className='h-100'>
                <Col md='9' className='h-100'>
                    <Row className='h-25' md='2' xs='2'>
                        <Col>
                            <Clock time={time} canvasName='startClock-example' scale={0.4} clockLabel='Giờ bắt đầu'/>
                        </Col>
                        <Col>
                            <Clock time={time} timeInterval={intervalTime} isAddTime={isAddTime} canvasName='endClock-example' scale={0.4} clockLabel='Giờ kết thúc'/>
                        </Col>
                    </Row>
                    <Row className='h-75'>
                        <Home2School/>
                    </Row>
                </Col>
                <Col md='3' className='bg-light'>
                    <ExampleFormControl setMode={setIsAddTime} setTime={setTime} setIntervalTime={setIntervalTime}/>
                </Col>
            </Row>
            
        </Container>
    )
}