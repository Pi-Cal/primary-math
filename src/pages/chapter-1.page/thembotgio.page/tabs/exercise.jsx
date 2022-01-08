import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, ProgressBar, Image } from 'react-bootstrap';
import './part-2.tabs.css'
import {FakeData} from '../../../../data/chapter-1.data'
import { useNavigate } from 'react-router-dom';
import {animated, useTransition, useSpring} from '@react-spring/web'
import { QuestionModel } from '../../../../components/chapter-1/part-1.question.model';
import { Question } from '../../../../components/chapter-1/part-2.question';

export const Exercise = () => {

    const [loading, setLoading] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [questions] = useState(()=>{
        const array = [...FakeData[1].question]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return [...array]
    });
    const [start, setStart] = useState(false);
    const [startTime, setStartTime] = useState({hour:0, minute:0, second: 0})
    const [endTime, setEndTime] = useState({hour:0, minute:0, second: 0})

    const navigate = useNavigate();

    const handleNext = async () => {
        if(loading) return;
        setLoading(true);
        await (() => {
            if (currentQuiz < questions.length - 1) setCurrentQuiz(currentQuiz + 1)
            else navigate('/')
        })()
        setLoading(false);
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

    const convertString2Time = (str) => {
        const timeArr = str.split(':');
        return({
            hour: timeArr[0],
            minute: timeArr[1],
            second: 0
        })
    }

    useEffect(()=>{
        if(questions[currentQuiz].startTime) 
            setStartTime({...convertString2Time(questions[currentQuiz].startTime)})
        else setStartTime({hour: 0, minute: 0, second: 0});
        if(questions[currentQuiz].endTime) 
            setEndTime({...convertString2Time(questions[currentQuiz].endTime)})
        else setEndTime({hour: 0, minute: 0, second: 0});
    },[currentQuiz])

    const loadingEffect = useSpring({
        from: {opacity:0},
        to: {opacity: 1}
    })

    return(
        <Container className='position-relative'>
            {
            transitions((style, start)=>
                !start ? (<animated.div style={style}><Start setStart={setStart}/></animated.div>) : 
                (<animated.div style={style}>
                <Row className='vh-80'>
                    <Col md='8' className='bg-success d-flex justify-content-center align-items-center'>
                        {
                        !loading && <Row style={{...loadingEffect}}>
                            <Col md='6'>
                                <QuestionModel 
                                    setTime={setStartTime} 
                                    time={startTime} 
                                    editable={questions[currentQuiz].type == 'rotate-start'}
                                    canvasName={'start-clock'}
                                    scale={0.5}
                                    clockLabel='Giờ bắt đầu'
                                />
                            </Col>
                            <Col md='6'>
                                <QuestionModel 
                                    setTime={setEndTime} 
                                    time={endTime} 
                                    editable={questions[currentQuiz].type == 'rotate-end'}
                                    canvasName={'end-clock'}
                                    scale={0.5}
                                    clockLabel='Giờ kết thúc'
                                />
                            </Col>
                        </Row>}
                    </Col>
                    <Col md='4' className='bg-light'>
                        <Row className='h-90 position-relative'>
                            <Question startTime={startTime} endTime={endTime} question={questions[currentQuiz]}/>
                        </Row>
                        <ProgressBar 
                            striped variant="dark" animated
                            now={(currentQuiz+1)*100/questions.length} 
                        />
                        <Row className='h-10'>
                            <Col md='6' xs='6' className='d-flex justify-content-start align-items-center'>
                                {
                                    <Button variant='outline-secondary' onClick={handlePrev} className='rounded-pill'>
                                        Quay lại
                                    </Button>
                                }
                            </Col>
                            <Col md='6' xs='6' className='d-flex justify-content-end align-items-center'>
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
            <Image src={process.env.PUBLIC_URL + '/background/clock-background.png'} alt='' className='clock-bg-img vh-80' />
            <div className='btn-container position-absolute'>
                <div className='practice-slogan mb-3'>Ready?</div>
                <Button onClick={()=>setStart(true)} className='start-btn rounded-pill w-100' variant='success'>Bắt đầu</Button> 
            </div>
        </div>
    )
}