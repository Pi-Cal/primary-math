import React, {useState} from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import  ChapterTest from './chapter-test';
import { Chapter1 } from './chapter1.time.page';
import { Chapter2 } from './chapter2.tree-interval';
import './home.css';


export const Home = () => {

    return(
        <div className='home-container wrapper'>
            <Image src='background/home-background.png' alt='' className='home-bg-img' />
            <div className="chapters">
                <Chapter1/>
                <Chapter2/>
                <ChapterTest abc='123' xyz='456' time='9:30'/>
                <ChapterTest abc='321' xyz='789' time='9:50'/>
            </div>
        </div>
    )
}