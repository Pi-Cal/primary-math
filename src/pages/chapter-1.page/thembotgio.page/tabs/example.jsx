import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Home2School } from '../../../../components/chapter-1/home2school';
import { Clock } from '../../../../components/chapter-1/part-2.clock.model';
import './part-2.tabs.css'

export const Example = () => {

    const [startTime, setStartTime] = useState({hour: 0, minute: 0, second: 0});
    const [endTime, setEndTime] = useState({hour: 0, minute: 0, second: 0});
    const [frame, setFrame] = useState(2000);

    return(
        <Container className='vh-80 bg-success'>
            <Row className='h-100'>
                <Col md='9' className='h-100'>
                    <Row className='h-25'>
                        <Col md={6}>
                            <Clock time={startTime} canvasName='startClock' scale={0.4} clockLabel='Giờ bắt đầu'/>
                        </Col>
                        <Col md={6}>
                            <Clock time={endTime} canvasName='endClock' scale={0.4} clockLabel='Giờ kết thúc'/>
                        </Col>
                    </Row>
                    <Row className='h-75'>
                        <Home2School/>
                    </Row>
                </Col>
                <Col md='3' className='bg-warning'>

                </Col>
            </Row>
            
        </Container>
    )
}