import React, {useEffect, useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './chapter-1.css'
import { SuccessAnimation, FailAnimation } from '../animation';

export const randonArr = (arr) => {
    const array = [...arr]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return [...array]
}

export const Question = ({question, startTime, endTime}) => {

    const [userAnswer, setUserAnswer] = useState('');
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
    const [showFailAnimation, setFailAnimation] = useState(false);

    const checkAns = (src, des) => {
        const cloneSrc = src.split(':');
        const cloneDes = des.split(':');
        return (parseInt(cloneSrc[0]) === parseInt(cloneDes[0]) && 
            parseInt(cloneSrc[1]) === parseInt(cloneDes[1])
        )
    }

    const handleSubmit = async ()=>{
        if (question.type == 'rotate-start') {
            const temp = `${startTime.hour > 12 ? (startTime.hour-12):startTime.hour}:${startTime.minute}`;
            if(checkAns(temp,question.correctAnswer)) setShowSuccessAnimation(true);
            else setFailAnimation(true);
        } else if (question.type == 'rotate-end') {
            const temp = `${endTime.hour > 12 ? (endTime.hour-12):endTime.hour}:${endTime.minute}`;
            if(checkAns(temp,question.correctAnswer)) setShowSuccessAnimation(true);
            else setFailAnimation(true);
        }else {
            if(checkAns(userAnswer, question.correctAnswer)) setShowSuccessAnimation(true);
            else setFailAnimation(true);
        }
    }

    return(
        <Container className='quiz-container position-relative'>
            <Row className='quiz-request mb-3 h-30 ms-1 me-1 p-3'>{question.request}</Row>
            <Row className='quiz-body d-flex justify-content-center h-50 align-items-center mb-3'>
            {
                (()=>{
                    switch(question.type) {
                        case 'input':
                            return <InputQuiz setUserAnswer={setUserAnswer}/>
                        case 'single-choice':
                            return <SingleChoice answer={question.answer}  setUserAnswer={setUserAnswer}/>
                        default:
                            return <div className='rotate-quiz'>Thao t??c v???i h??nh b??n</div>
                    }
                })()
            }
            </Row>
            <Row className='position-absolute submit-btn ps-4 pe-4 w-100'>
                <Button onClick={handleSubmit} className='rounded-pill'>Ki???m tra ????p ??n</Button>
            </Row>
            <SuccessAnimation show={showSuccessAnimation} onHide={()=>setShowSuccessAnimation(false)}/>
            <FailAnimation show={showFailAnimation} onHide={()=>setFailAnimation(false)}/>
        </Container>
    )
}

const SingleChoice = ({answer, setUserAnswer}) => {
    
    const [choiceIndex, setChoiceIndex] = useState('-1');
    const [cloneAns, setCloneAns] = useState(randonArr(answer))

    useEffect(()=>{
        setCloneAns([...randonArr(answer)])
    },[answer])

    const handleChoice = (e) => {
        setChoiceIndex(e.target.id)
        setUserAnswer(e.target.innerHTML);
    }


    return(
        <Row className='d-flex justify-content-center mb-3'>
        {
            cloneAns.map((ans, index) => {
                return <div 
                    key={index} 
                    className={`answer-list ${choiceIndex == index && 'choosen'}`} 
                    onClick={handleChoice} 
                    id={index}
                >
                    {ans}
                </div>
            })
        }
        </Row>
    )
} 
const InputQuiz = ({setUserAnswer}) => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);
    const [hourErrorMessage, setHourErrorMessage] = useState('');
    const [minuteErrorMessage, setMinuteErrorMessage] = useState('');
    const [generalErr, setGeneralErr] = useState('');

    useEffect(()=>{
        setUserAnswer(`${hourInput}:${minuteInput}`)
    },[hourInput, minuteInput])

    const handleHourInput = (e) => {
        let hour = e.target.value
        if (Math.floor(hour) != hour) {
            setGeneralErr('Ch??? nh???p s??? t??? nhi??n') 
            return
        }
        setGeneralErr('');
        if (hour > 23) {
            setHourErrorMessage('S??? gi??? kh??ng ???????c v?????t qu?? 23')
        } else {
            if (hour > 12) hour = hour - 12
            setHourErrorMessage('')
            setHourInput(hour);
        }
    }

    const handleMinuteInput = (e) => {
        const minute = e.target.value
        if (Math.floor(minute) != minute) {
            setGeneralErr('Ch??? nh???p s??? t??? nhi??n') 
            return;
        }
        setGeneralErr('')
        if (minute > 60) {
            setMinuteErrorMessage('S??? ph??t kh??ng ???????c v?????t qu?? 60')
        } else {
            setMinuteErrorMessage('')
            setMinuteInput(minute);
        }
    }

    return(
        <div>
            <div className="input-group mb-1">
                <input 
                    type="number" 
                    className="form-control" 
                    aria-label="Gi???"
                    onChange={handleHourInput}
                    min="0" step="1"
                >
                </input>
                <span className="input-group-text">Gi???</span>
                <input 
                    type="number" 
                    className="form-control" 
                    aria-label="Ph??t"
                    onChange={handleMinuteInput}
                    min="0" step="1"
                ></input>
                <span className="input-group-text">Ph??t</span>
            </div>
            <div className='err mb-3' style={{color: 'red'}}>
                <div>{hourErrorMessage}</div>
                <div>{minuteErrorMessage}</div>
                <div>{generalErr}</div>
            </div>
        </div>
    )
}