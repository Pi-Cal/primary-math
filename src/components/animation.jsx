import React from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import {animated, useTransition} from 'react-spring'
import './animation.css'

export const SuccessAnimation = ({show, onHide}) => {

    const transition = useTransition(show, {
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0},
        onRest: ()=>setTimeout(()=>onHide(), 3000)
    })

    return(
        transition((style, show)=>
            show && 
            <animated.div style={{...style}} className='animation-container position-absolute w-100 text-center text-white'>
                <lottie-player 
                    src="https://assets10.lottiefiles.com/packages/lf20_kf95m1dj.json"  
                    background="transparent"  speed="1"
                    loop autoplay
                    class='left-animation'
                ></lottie-player>
                <div className='success-text'>Chính xác</div>
                <lottie-player 
                    src="https://assets10.lottiefiles.com/packages/lf20_kf95m1dj.json"  
                    background="transparent"  speed="1"  
                    loop autoplay
                    class='right-animation'
                    style={{right: '0'}}
                ></lottie-player>
            </animated.div>
        )
        
    )
}

export const FailAnimation = ({show, onHide}) => {

    const transition = useTransition(show, {
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0},
        onRest: ()=>setTimeout(()=>onHide(), 3000)
    })

    return(
        transition((style, show)=>
            show && 
            <animated.div style={{...style}} className='animation-container position-absolute w-100 text-center text-white'>
                <lottie-player 
                    src="https://assets4.lottiefiles.com/packages/lf20_ccxfskpm.json"  
                    background="transparent"  speed="1"
                    loop autoplay
                    class='left-animation'
                    style={{left: '-20%', top: '-180%'}}
                ></lottie-player>
                <div className='success-text'>Sai mất rồi</div>
                <lottie-player 
                    src="https://assets4.lottiefiles.com/packages/lf20_t9nbbl1t.json"  
                    background="transparent"  speed="1"  
                    loop autoplay
                    class='right-animation'
                    style={{right: '-20%', top: '-50%'}}
                ></lottie-player>
            </animated.div>
        )
    )
}