import React from 'react';
import Layout from './chapter-2.layout';
import Example from '../components/example';
import Practice from '../components/practice';
import { useParams } from 'react-router-dom';
import { FakeData } from '../data/chapter-2.data';
const ChapterPart = () => {
    const { partId } = useParams();
    const practiceQuestionList = FakeData[parseInt(partId) - 1].questions;
    console.log(practiceQuestionList);
    return (
        <Layout>
            <Example tabKey="example" name="Ví dụ" />
            <Practice tabKey="practice" name="Luyện tập" questions={practiceQuestionList}/>
        </Layout>
    )
}

export default ChapterPart;