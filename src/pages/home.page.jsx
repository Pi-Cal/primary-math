import React from 'react';
import { Image } from 'react-bootstrap';
import { Chapter1 } from './chapter1.time.page';
import { Chapter2 } from './chapter2.tree-interval';
import './home.css';


export const Home = () => {

    return(
        <div className='home-container wrapper'>
            <Image src={process.env.PUBLIC_URL +'/background/home-background.png'} alt='' className='home-bg-img' />
            <div className="chapters">
                <Chapter1/>
                <Chapter2/>
            </div>
        </div>
    )
}