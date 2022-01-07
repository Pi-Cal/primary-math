import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Home2School } from '../../../../components/chapter-1/home2school';
import { Clock } from '../../../../components/chapter-1/part-2.clock.model';

export const Example = () => {

    return(
        <Container className='vh-80 bg-danger'>
            <Row>
                <Col md='9'>
                    <Row className='h-25 bg-success'>
                        <Col md={6}>
                            <Clock canvasName='startClock' scale={0.4} clockLabel='Giờ bắt đầu'/>
                        </Col>
                        <Col md={6}>
                        <Clock canvasName='endClock' scale={0.4} clockLabel='Giờ kết thúc'/>
                        </Col>
                    </Row>
                    <Row>
                        <Home2School/>
                    </Row>
                </Col>
                <Col md='3' className='bg-warning'>

                </Col>
            </Row>
            
        </Container>
    )
}