import React from 'react';
import {Tabs, Tab } from 'react-bootstrap';
import { PartLayout } from '../../part.layout';
import { Example } from './tabs/example';
import { Exercise } from './tabs/exercise';

export const Chapter1Recognitions = () => {
    return(
        <PartLayout exam={<Example/>} exer={<Exercise/>}/>
    )
}