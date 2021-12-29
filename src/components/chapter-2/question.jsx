/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function shuffleArray(array) {
    const newArray = [...array];
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

const QuestionComponent = ({questionList, index, handlePrev, handleNext}) => {
    const [shuffleChoices, setShuffleChoices] = useState([]);
    const [answer, setAnswer] = useState(null); 
    const [messageTrue, setMessageTrue] = useState('');
    const [messageFalse, setMessageFalse] = useState('');
    useEffect(() => {
        setShuffleChoices(shuffleArray(questionList[index].choices));
        let radio = document.querySelector('input[type=radio][name=question]:checked');
        if (radio != null) radio.checked = false;
    }, [index])

    const previous = () => {
        handlePrev();
        setMessageFalse('');
        setMessageTrue('');
    }
    const next = () => {
        handleNext();
        setMessageFalse('');
        setMessageTrue('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answer === questionList[index].answer) {
            setMessageTrue('Chính xác!');
        } else {
            setMessageFalse('Chưa chính xác!');
        }
    }
    const handleChange = (event) => {
        setMessageFalse('');
        setMessageTrue('');
        setAnswer(event.target.value);
    }
    return (
        <div className="w-100 h-100 d-flex flex-column justify-content-between">
            <Form onSubmit={handleSubmit}>
                <h1>{`Câu hỏi ${index + 1}`}</h1>
                <Form.Text>Lựa chọn phương án trả lời đúng nhất</Form.Text>
                <Form.Group>
                    <Form.Label>{questionList[index].problem}</Form.Label>
                    <div onChange={handleChange}>
                    {
                        shuffleChoices.map((choice, index) => (
                            <Form.Check
                                key={index} 
                                name="question" 
                                type="radio" 
                                value={choice} 
                                label={choice} />
                        ))
                    }
                    </div>
                    <Form.Text className="fs-4 text-success">{messageTrue}</Form.Text>
                    <Form.Text className="fs-4 text-danger">{messageFalse}</Form.Text>
                </Form.Group>
                <Button type="submit" variant="primary">Trả lời</Button>
            </Form>
            <div className="mt-1 d-flex justify-content-between">
                <Button variant="outline-success" onClick={previous} disabled={index === 0}>Câu trước</Button>
                <Button variant="outline-success" onClick={next} disabled={index === questionList.length - 1}>Câu tiếp</Button>
            </div>
        </div>
    )
}

export default QuestionComponent;