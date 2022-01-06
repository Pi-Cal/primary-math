import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './example.css'
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const Example = () => {
    let [figSecond, setFigSecond] = useState(null);
    let [figMinute, setFigMinute] = useState(null);
    let [figHour, setFigHour] = useState(null);
    let [hour, setHour] = useState(0);
    let [minute, setMinute] = useState(0);
    let [second, setSecond] = useState(0);
    const [timeNow, setTimeNow] = useState(0)

    let rotation = "null";

    useEffect(() => {
        if (figHour){
            figHour.rotation.x = 0
            figHour.rotation.z = 0
            figHour.rotation.y =
                ((hour * Math.PI) / 6 +
                    (minute * Math.PI) / (6 * 60) +
                    (second * Math.PI) / (360 * 60)) *
                -1;
        }

        if (figMinute){
            figMinute.rotation.x = 0
            figMinute.rotation.z = 0
            figMinute.rotation.y =
                ((minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)) * -1;
        }
        if (figSecond) {
            figSecond.rotation.x = 0
            figSecond.rotation.z = 0
            figSecond.rotation.y = ((second * Math.PI) / 30) * -1;
        }
    }, [hour, minute, second]);

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
        }
        function changeTime() {
            if (document.getElementById("buttonControl").getAttribute("class") === "false") return
            let date = new Date
            let hour = formatTime(date.getHours())
            let minute = formatTime(date.getMinutes())
            let second = formatTime(date.getSeconds())

            setHour(date.getHours())
            setMinute(date.getMinutes())
            setSecond(date.getSeconds())

            document.getElementById("hour-1").setAttribute("class","num-"+hour.substr(0,1))
            document.getElementById("hour-2").setAttribute("class","num-"+hour.substr(1,1))
            document.getElementById("minute-1").setAttribute("class","num-"+minute.substr(0,1))
            document.getElementById("minute-2").setAttribute("class","num-"+minute.substr(1,1))
            document.getElementById("second-1").setAttribute("class","num-"+second.substr(0,1))
            document.getElementById("second-2").setAttribute("class","num-"+second.substr(1,1))
            document.getElementById("check").innerText = 'x' + figSecond.rotation.x + '\ny' + figSecond.rotation.y + '\nz' + figSecond.rotation.z
            setTimeout(changeTime, 1000)
        }
        if (timeNow === 1) changeTime();
    },[timeNow] )

    //canvasClock
    useEffect(() => {
        //Scene
        let scene = new THREE.Scene()
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
        camera.position.z = 2;

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
            // clockModel.getChildByName("Seconds").rotation.x = 0
            // clockModel.getChildByName("Seconds").rotation.z = 0
            document.getElementById("check").innerText = 'x' + clockModel.getChildByName("Seconds").rotation.x + '\ny' + clockModel.getChildByName("Seconds").rotation.y + '\nz' + clockModel.getChildByName("Seconds").rotation.z
        })

        const animate = () => {
            requestAnimationFrame(animate)
            let rotation = document.getElementById("check").getAttribute("class")
            if (oldRotation !== rotation) {
                controls.detach()
                if (rotation !== "null"){
                    oldRotation = rotation
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
        if (rotation === value) {
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
                <button className={"randomTime"} id={"randomTime"}>Thời gian ngẫu nhiên</button>
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