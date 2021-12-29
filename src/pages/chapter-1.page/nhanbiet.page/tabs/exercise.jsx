import React from 'react';
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Question } from '../../../../components/chapter-1/chapter1.question';
import { QuestionModel } from '../../../../components/chapter-1/question.model';
import './tabs.css'

export const Exercise = () => {

    //TODO
    const rowRef = useRef();

    return(
        <Container>
            <Row className='vh-80' ref={rowRef}>
                <Col md='8' className='bg-dark'>
                    <QuestionModel rowRef={rowRef} />
                </Col>
                <Col md='4' className='bg-success'>
                    <Question />
                </Col>
            </Row>
        </Container>
    )
}