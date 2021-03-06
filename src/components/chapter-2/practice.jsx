import React, { useState } from 'react';
import Chapter4Scene from './chapter-4.scene';
import "./practice.css"
import QuestionComponent from './question';
import ThreeJSComponent from './three.scene';
const Practice = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const next = () => {
        setQuestionIndex(questionIndex + 1);
    }
    const previous = () => {
        setQuestionIndex(questionIndex - 1);
    }
    if (props.partId <= 3) {
        return (
            <div className="container container-practice d-flex flex-column justify-content-center">
                <div className="row row-main-content">
                    <div className="col-12 col-md-8">
                        <ThreeJSComponent questionList={props.questions} index={questionIndex}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <QuestionComponent questionList={props.questions} index={questionIndex} handleNext={next} handlePrev={previous}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container container-practice d-flex flex-column justify-content-center">
                <div className="row row-main-content">
                    <div className="col-12 col-md-8">
                        <Chapter4Scene questionList={props.questions} index={questionIndex}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <QuestionComponent questionList={props.questions} index={questionIndex} handleNext={next} handlePrev={previous}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Practice;