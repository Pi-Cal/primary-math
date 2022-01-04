import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Col, Container, Row, Button, ProgressBar, Image } from 'react-bootstrap';
import { Question } from '../../../../components/chapter-1/part-1.question';
import { QuestionModel } from '../../../../components/chapter-1/part-1.question.model';
import './tabs.css'
import {FakeData} from '../../../../data/chapter-1.data'
import { useNavigate } from 'react-router-dom';
import {animated, useTransition} from '@react-spring/web'

export const Exercise = () => {

    //TODO

    const [time, setTime] = useState({hour: 0, minute: 0, second: 0});
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [questions] = useState(FakeData[0].question);
    const [start, setStart] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(questions[currentQuiz].type !== 'rotate') {
            const timeArr = questions[currentQuiz].correctAnswer.split(':');
            setTime({
                hour: parseInt(timeArr[0]),
                minute: parseInt(timeArr[1]),
                second: 0
            })
        } else {
            setTime({
                hour: 0,
                minute: 0,
                second: 0
            })
        }
    },[currentQuiz])

    const handleNext = () => {
        if (currentQuiz < questions.length - 1) setCurrentQuiz(currentQuiz + 1)
        else navigate('/')
    }

    const handlePrev = () => {
        if (currentQuiz > 0) setCurrentQuiz(currentQuiz - 1)
        else setStart(false);
    }

    const transitions = useTransition(start, {
        from : {opacity: 0, position:'absolute', width: '100%'},
        enter : {opacity: 1},
        leave : {opacity: 0}
    })


    return(
        <Container className='position-relative'>
            {
            transitions((style, start)=>
                !start ? (<animated.div style={style}><Start setStart={setStart}/></animated.div>) : 
                (<animated.div style={style}>
                <Row className='vh-80'>
                    <Col md='8' className=''>
                        <QuestionModel setTime={setTime} time={time} editable={questions[currentQuiz].type == 'rotate'}/>
                    </Col>
                    <Col md='4' className='bg-light'>
                        <Row className='h-90 position-relative'>
                            <Question question={questions[currentQuiz]} time={time}/>
                        </Row>
                        <ProgressBar 
                            striped variant="dark" animated
                            now={(currentQuiz+1)*100/questions.length} 
                        />
                        <Row className='h-10'>
                            <Col md='6' className='d-flex justify-content-start align-items-center'>
                                {
                                    <Button variant='outline-secondary' onClick={handlePrev} className='rounded-pill'>
                                        Quay lại
                                    </Button>
                                }
                            </Col>
                            <Col md='6' className='d-flex justify-content-end align-items-center'>
                                { 
                                <Button variant='outline-success' onClick={handleNext} className='rounded-pill'>
                                    {currentQuiz < questions.length - 1 ? 'Tiếp theo' : 'Hoàn thành'}
                                </Button>
                                }   
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
                </animated.div>)
            )
            }
        </Container>
    )
}

const Start = ({setStart}) => {
    return(
        <div className='start-container'>
            <Image src='/background/clock-background.png' alt='' className='clock-bg-img vh-80' />
            <div className='btn-container position-absolute'>
                <div className='practice-slogan mb-3'>Ready?</div>
                <Button onClick={()=>setStart(true)} className='start-btn rounded-pill w-100' variant='success'>Bắt đầu</Button> 
            </div>
        </div>
    )
}