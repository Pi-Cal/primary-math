import React from 'react';
import {PartLayout} from '../../part.layout'
import { Example } from './tabs/example';
import { Exercise } from './tabs/exercise';

export const Chapter1TimeCalculator = () => {
    return(
        <PartLayout exam={<Example/>} exer={<Exercise/>}/>
    )
}