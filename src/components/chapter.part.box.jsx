import React from 'react';
import {useNavigate} from 'react-router-dom'

export const ChapterPartBox = (props) => {
    const {label, navto} = props;

    const navigate = useNavigate();

    return(
        <div 
            className='part-box'
            onClick={() => navigate(`${navto}`)}
        >
            {label}
        </div>
    )
}