import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './example.css'
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export const Example = () => {
    let [figSecond, setFigSecond] = useState(null);
    let [figMinute, setFigMinute] = useState(null);
    let [figHour, setFigHour] = useState(null);
    let hour = 0, minute = 0, second = 0, SecondRotationY = 0, MinuteRotationY = 0, HourRotationY = 0
    const [timeNow, setTimeNow] = useState(0)

    let rotation = "null";

    function renderClock() {
        if (hour === 12) hour = 0
        if (minute === 60) minute = 0
        if (second === 60) second = 0
        if (figHour){
            let newHour = hour + (minute * (1/60))
            if (newHour <= 3) {
                figHour.rotation.x = 0
                figHour.rotation.z = 0
                figHour.rotation.y = newHour * (Math.PI / 6) * -1
            }else if (newHour >= 9) {
                figHour.rotation.x = 0
                figHour.rotation.z = 0
                figHour.rotation.y = (60 - newHour) * (Math.PI / 6)
            } else if (newHour < 6) {
                figHour.rotation.x = - Math.PI
                figHour.rotation.z = - Math.PI
                figHour.rotation.y = (30 - newHour) * (Math.PI / 6) * -1
            } else {
                figHour.rotation.x = - Math.PI
                figHour.rotation.z = Math.PI
                figHour.rotation.y = (newHour - 30) * (Math.PI / 6) + 0.01
            }
        }

        if (figMinute){
            let newMinute = minute + (second * (1/60))
            if (newMinute <= 15) {
                figMinute.rotation.x = 0
                figMinute.rotation.z = 0
                figMinute.rotation.y = newMinute * (Math.PI / 30) * -1
            }else if (newMinute >= 45) {
                figMinute.rotation.x = 0
                figMinute.rotation.z = 0
                figMinute.rotation.y = (60 - newMinute) * (Math.PI / 30)
            } else if (newMinute < 30) {
                figMinute.rotation.x = - Math.PI
                figMinute.rotation.z = - Math.PI
                figMinute.rotation.y = (30 - newMinute) * (Math.PI / 30) * -1
            } else {
                figMinute.rotation.x = - Math.PI
                figMinute.rotation.z = Math.PI
                figMinute.rotation.y = (newMinute - 30) * (Math.PI / 30) + 0.01
            }
        }
        if (figSecond) {
            if (second <= 15) {
                figSecond.rotation.x = 0
                figSecond.rotation.z = 0
                figSecond.rotation.y = second * (Math.PI / 30) * -1
            }else if (second >= 45) {
                figSecond.rotation.x = 0
                figSecond.rotation.z = 0
                figSecond.rotation.y = (60 - second) * (Math.PI / 30)
            } else if (second < 30) {
                figSecond.rotation.x = - Math.PI
                figSecond.rotation.z = - Math.PI
                figSecond.rotation.y = (30 - second) * (Math.PI / 30) * -1
            } else {
                figSecond.rotation.x = - Math.PI
                figSecond.rotation.z = Math.PI
                figSecond.rotation.y = (second - 30) * (Math.PI / 30) + 0.02
            }
            HourRotationY = figHour.rotation.y
            MinuteRotationY = figMinute.rotation.y
            SecondRotationY = figSecond.rotation.y
            renderTime(hour,minute,second)
        }
    }

    async function randomTime() {
        hour = Math.round(Math.random() * 12)
        minute = Math.round(Math.random() * 60)
        second = Math.round(Math.random() * 60)
        renderClock()
    }

    function renderTime(h,m,s) {
        let hour = formatTime(h)
        let minute = formatTime(m)
        let second = formatTime(s)
        document.getElementById("hour-1").setAttribute("class","num-"+hour.substr(0,1))
        document.getElementById("hour-2").setAttribute("class","num-"+hour.substr(1,1))
        document.getElementById("minute-1").setAttribute("class","num-"+minute.substr(0,1))
        document.getElementById("minute-2").setAttribute("class","num-"+minute.substr(1,1))
        document.getElementById("second-1").setAttribute("class","num-"+second.substr(0,1))
        document.getElementById("second-2").setAttribute("class","num-"+second.substr(1,1))
    }

    function formatTime(value){
        if (value < 10) return '0' + value;
        return value.toString()
    }

    //Time now
    useEffect(() => {
        if (timeNow === 0) {
            document.getElementById("buttonControl").setAttribute("class","false")
            document.getElementById("TextTimeNow").style.color = "red"
            document.getElementById("randomTime").style.display = "block"
            document.getElementById("checkboxTime").style.marginTop = "50px"
            document.getElementById("divKnob").style.display = "block"
        }
        else {
            document.getElementById("buttonControl").setAttribute("class","true")
            document.getElementById("TextTimeNow").style.color = "blue"
            document.getElementById("checkboxTime").style.marginTop = "133px"
            document.getElementById("randomTime").style.display = "none"
            document.getElementById("divKnob").style.display = "none"
            changeControl(0,"null")
        }
        function changeTime() {
            if (document.getElementById("buttonControl").getAttribute("class") === "false") return
            let date = new Date


            hour = date.getHours()
            minute = date.getMinutes()
            second = date.getSeconds()
            renderClock()

            setTimeout(changeTime, 1000)
        }
        if (timeNow === 1) changeTime();
    },[timeNow] )

    //canvasClock
    useEffect(() => {
        //Scene
        let scene = new THREE.Scene()
        scene.add(new THREE.GridHelper(1000, 10, 0x888888, 0x444444))
        let canvasExampleChapter1 = document.getElementById("canvasClockExampleChapter1")

        //Render
        let renderer = new THREE.WebGLRenderer({
            canvas: canvasExampleChapter1,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.8)
        renderer.setClearColor(0x000000, 0)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.gammaOutput = true

        //Light
        // let pointLight = new THREE.PointLight(0xffffff,1,50)
        // pointLight.position.set(0,0,10)
        let light = new THREE.AmbientLight();
        scene.add(light);

        //Camera
        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth * 0.6 / window.innerHeight * 0.8,
            1,
            1000
        );
        camera.position.z = 1.75;

        let controls = new TransformControls(camera, renderer.domElement)
        controls.setMode('rotate')
        scene.add(controls)

        //Models
        let clockModel;
        let loader = new GLTFLoader();
        loader.load("/models/clocks/Clock2.glb", async (glb) => {
            clockModel = glb.scene
            await glb.scene.traverse((child) => {
                if (child.name === "Hours") {
                    setFigHour({...child});
                }
                if (child.name === "Minutes") {
                    setFigMinute({...child});
                }
                if (child.name === "Seconds") {
                    setFigSecond({...child});
                }
            });
            scene.add(glb.scene);
            glb.scene.rotation.x = Math.PI / 2
        });

        // new OrbitControls(camera, renderer.domElement)

        window.addEventListener('resize', function() {
            let width = window.innerWidth
            let height = window.innerHeight
            renderer.setSize(width * 0.4, height * 0.8)
            camera.aspect = (width * 0.4) / (height * 0.8)
            camera.updateProjectionMatrix();
        }, );

        let oldRotation = "null";

        controls.addEventListener('objectChange', () => {
            let newSecond, newMinute, newHour
            if (clockModel.getChildByName("Seconds").rotation.y <= 0 && Math.abs(clockModel.getChildByName("Seconds").rotation.z) <= 2) {
                newSecond = (clockModel.getChildByName("Seconds").rotation.y * -1) / (Math.PI / 30)
            } else if (clockModel.getChildByName("Seconds").rotation.y <=0 && Math.abs(clockModel.getChildByName("Seconds").rotation.z) > 2){
                newSecond = 30 - (clockModel.getChildByName("Seconds").rotation.y * -1) / (Math.PI / 30)
            } else if (clockModel.getChildByName("Seconds").rotation.y > 0 && Math.abs(clockModel.getChildByName("Seconds").rotation.z) > 2){
                newSecond = 30 + clockModel.getChildByName("Seconds").rotation.y / (Math.PI / 30)
            } else newSecond = 60 - clockModel.getChildByName("Seconds").rotation.y / (Math.PI / 30)

            if (clockModel.getChildByName("Minutes").rotation.y <= 0 && Math.abs(clockModel.getChildByName("Minutes").rotation.z) <= 2) {
                newMinute = (clockModel.getChildByName("Minutes").rotation.y * -1) / (Math.PI / 30)
            } else if (clockModel.getChildByName("Minutes").rotation.y <=0 && Math.abs(clockModel.getChildByName("Minutes").rotation.z) > 2){
                newMinute = 30 - (clockModel.getChildByName("Minutes").rotation.y * -1) / (Math.PI / 30)
            } else if (clockModel.getChildByName("Minutes").rotation.y > 0 && Math.abs(clockModel.getChildByName("Minutes").rotation.z) > 2){
                newMinute = 30 + clockModel.getChildByName("Minutes").rotation.y / (Math.PI / 30)
            } else newMinute = 60 - clockModel.getChildByName("Minutes").rotation.y / (Math.PI / 30)

            if (clockModel.getChildByName("Hours").rotation.y <= 0 && Math.abs(clockModel.getChildByName("Hours").rotation.z) <= 2) {
                newHour = (clockModel.getChildByName("Hours").rotation.y * -1) / (Math.PI / 6)
            } else if (clockModel.getChildByName("Hours").rotation.y <=0 && Math.abs(clockModel.getChildByName("Hours").rotation.z) > 2){
                newHour = 6 - (clockModel.getChildByName("Hours").rotation.y * -1) / (Math.PI / 6)
            } else if (clockModel.getChildByName("Hours").rotation.y > 0 && Math.abs(clockModel.getChildByName("Hours").rotation.z) > 2){
                newHour = 6 + clockModel.getChildByName("Hours").rotation.y / (Math.PI / 6)
            } else newHour = 12 - clockModel.getChildByName("Hours").rotation.y / (Math.PI / 6)

            newHour = Math.round(newHour)
            newSecond = Math.round(newSecond)
            newMinute = Math.round(newMinute)
            if (newSecond === 60) newSecond = 0
            if (newMinute === 60) newMinute = 0
            if (newHour === 12) newHour = 0
            renderTime(newHour, newMinute, newSecond)
        })

        const animate = () => {
            requestAnimationFrame(animate)
            let rotation = document.getElementById("check").getAttribute("class")
            if (oldRotation !== rotation) {
                controls.detach()
                oldRotation = rotation
                if (rotation !== "null"){
                    controls.attach(clockModel.getChildByName(rotation))
                }
            }
            if (camera) {
                renderer.render(scene, camera)
            }
        };
        animate()
    }, [])

    function changeControl(num, value){
        if (num === 0) {
            document.getElementById("check").setAttribute("class","null")
            document.getElementById("button1").setAttribute("class","buttonTime button1")
            document.getElementById("button2").setAttribute("class","buttonTime button2")
            document.getElementById("button3").setAttribute("class","buttonTime button3")
            return;
        }
        if (rotation === value) {
            if (value === "null") return;
            rotation = "null"
            document.getElementById("check").setAttribute("class","null")
            document.getElementById("button" + num).setAttribute("class","buttonTime button"+num)
            return
        }
        rotation = value
        document.getElementById("check").setAttribute("class",value)
        document.getElementById("button1").setAttribute("class","buttonTime button1")
        document.getElementById("button2").setAttribute("class","buttonTime button2")
        document.getElementById("button3").setAttribute("class","buttonTime button3")
        document.getElementById("button" + num).setAttribute("class","buttonTime chooseButton"+num)
    }

    return(
        <Container className='Container'>
        {
            //TODO -- Quoc
        }
        <Row>
            <Col className={"time"}>
                <div className="digital-watch">
                    <svg width="0" height="0" viewBox="0 0 0 0">
                        <defs>
                            <g id="unit-h">
                                <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"/>
                            </g>
                            <g id="unit-v">
                                <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"/>
                            </g>
                        </defs>
                    </svg>
                    <div className="hour">
                        <svg id="hour-1" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                        <svg id="hour-2" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                    </div>
                    <div className="minute">
                        <svg id="minute-1" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                        <svg id="minute-2" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                    </div>
                    <div className="second">
                        <svg id="second-1" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                        <svg id="second-2" className="num-0" width="26" height="48" viewBox="0 0 260 480">
                            <use xlinkHref="#unit-h" className="segment a" x="30" y="0"/>
                            <use xlinkHref="#unit-v" className="segment b" x="220" y="30"/>
                            <use xlinkHref="#unit-v" className="segment c" x="220" y="250"/>
                            <use xlinkHref="#unit-h" className="segment d" x="30" y="440"/>
                            <use xlinkHref="#unit-v" className="segment e" x="0" y="250"/>
                            <use xlinkHref="#unit-v" className="segment f" x="0" y="30"/>
                            <use xlinkHref="#unit-h" className="segment g" x="30" y="220"/>
                        </svg>
                    </div>
                </div>
                <button className={"randomTime"} id={"randomTime"} onClick={() => randomTime()}>Thời gian ngẫu nhiên</button>
                <div className={"checkboxTime"} id={"checkboxTime"}>
                <label className="switch">
                    <input type={"checkbox"} id="buttonControl" className={"true"} onClick={() => setTimeNow(1 - timeNow)}/>
                    <span className="slider"/>
                </label>
                <p id="TextTimeNow" className={"TimeNow"}>Thời gian thực</p>
                </div>
            </Col>
            <Col className={"clock"}>
                <canvas id="canvasClockExampleChapter1" className={"canvasClock"}/>
            </Col>
            <Col className={"knob"} id={"knob"}>
                <div id={"divKnob"}>
                <p className={"controlText"}>Điều khiển </p>
                <button className={"buttonTime button1"} id={"button1"} onClick={() => changeControl("1","Hours")}>Kim giờ</button>
                <button className={"buttonTime button2"} id={"button2"} onClick={() => changeControl("2","Minutes")}>Kim phút</button>
                <button className={"buttonTime button3"} id={"button3"} onClick={() => changeControl("3","Seconds")}>Kim giây</button>
                </div>
                <p id={"check"} className={"null"}/>
            </Col>
        </Row>

        </Container>
    )
}