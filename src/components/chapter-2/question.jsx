/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SuccessAnimation, FailAnimation } from '../animation';


function shuffleArray(array) {
    const newArray = [...array];
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const QuestionComponent = ({questionList, index, handlePrev, handleNext}) => {
    const [answer, setAnswer] = useState(null); 
    const [showSuccessAnimation, setSuccessAnimation] = useState(false);
    const [showFailAnimation, setFailAnimation] = useState(false);
    const navigate = useNavigate();
    const previous = () => {
        if (index > 0) handlePrev();
    }
    const next = () => {
        if (index < questionList.length - 1) handleNext();
        else navigate("/");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answer === questionList[index].answer) {
            setSuccessAnimation(true);
        } else {
            setFailAnimation(true);
        }
    }
   
    return (
        <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
            <Form onSubmit={handleSubmit} className="h-100">
                <h4>{`Câu ${index + 1}`}</h4>
                <Form.Label className="quiz-request h-30 mb-3 ms-1 me-1 p-3">{questionList[index].problem}</Form.Label>
                {
                    (() => {
                        switch (questionList[index].type) {
                            case 'multiple-choice':
                                return <>
                                    <Form.Text>Lựa chọn phương án trả lời đúng nhất</Form.Text>
                                    <MultipleChoice choices={questionList[index].choices} setAnswer={setAnswer} />
                                </>
                            case 'input':
                                return <>
                                    <Form.Text>Nhập đáp án</Form.Text>
                                    <InputChoice answer={questionList[index].answer} setAnswer={setAnswer} />
                                </> 
                            default:
                                return <div></div>;
                        }
                    })()
                }
                <label htmlFor='submit-btn' className="mt-2 w-100 rounded-pill">
                    <div className="btn btn-primary w-100 rounded-pill">Kiểm tra đáp án</div>
                </label>
                <button id="submit-btn" type="submit" hidden />
            </Form>
            <div className="d-flex justify-content-between">
                <Button variant="outline-success" onClick={previous} disabled={index === 0}>Câu trước</Button>
                <Button variant="outline-success" onClick={next}>
                    {index !== questionList.length - 1? "Câu tiếp" : "Hoàn thành"}
                </Button>
            </div>
            <SuccessAnimation show={showSuccessAnimation} onHide={()=>setSuccessAnimation(false)}/>
            <FailAnimation show={showFailAnimation} onHide={()=>setFailAnimation(false)}/>
        </div>
    )
}


const MultipleChoice = ({choices, setAnswer}) => {
    const [shuffleChoices, setShuffleChoices] = useState(() => shuffleArray(choices));
    const [choiceIndex, setChoiceIndex] = useState(-1);

    useEffect(() => {
        setShuffleChoices(() => shuffleArray(choices));
        let radio = document.querySelector('input[type=radio][name=question]:checked');
        let label = document.getElementsByClassName('choosen');
        if (label.length > 0) label[0].classList.remove('choosen');
        if (radio != null) radio.checked = false;
    }, [choices])

    const handleChoice = (e) => {
        setChoiceIndex(parseInt(e.target.id));
        setAnswer(e.target.value);
    }
    return (
        <>
            {
                shuffleChoices.map((choice, index) => (
                    <Form.Check key={index} type="radio">
                        <Form.Check.Input 
                            id={index + 1} 
                            type="radio" 
                            name="question" 
                            value={choice} 
                            onChange={handleChoice} 
                            hidden
                        />
                        <Form.Check.Label 
                            htmlFor={index + 1} 
                            className={`answer-list mb-0 ${choiceIndex === index + 1 && 'choosen'}`}
                        >
                            {choice}
                        </Form.Check.Label>
                    </Form.Check>
                ))
            }
        </>
    )
}


const InputChoice = ({answer, setAnswer}) => {
    const unit = answer.match(/[^0-9]+/g)[0];
    const handleChoice = (e) => {
        setAnswer(`${e.target.value}${unit}`);
    }
    return (
        <div className="d-flex align-items-center">
            <Form.Control type="number" onChange={handleChoice} min={0} className="w-50"/>
            <div className="ms-1">{unit}</div>
        </div>
    )
}

export default QuestionComponent;