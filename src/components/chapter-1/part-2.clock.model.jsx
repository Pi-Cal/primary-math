import React, {useEffect} from 'react';
import { Container, Row} from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Clock = (props) => {

  const {time, timeInterval, isAddTime, canvasName='clock-canvas', scale = 1, clockLabel='', } = props

  useEffect(() => {
    let scene = new THREE.Scene();
    let clockCanvas = document.getElementById(canvasName);

    let renderer = new THREE.WebGLRenderer({
      canvas: clockCanvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.6 * scale, window.innerHeight * 0.6 * scale);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.gammaOutput = true;

    let light = new THREE.AmbientLight();
    scene.add(light);

    let camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.y = 3;

    new OrbitControls(camera, renderer.domElement);

    let loader = new GLTFLoader();

    let figHour, figMinute, figSecond, timeIntervalToSecond = timeInterval.hour * 3600 + timeInterval.minute * 60 + timeInterval.second, changeSecond = timeIntervalToSecond / 200
    loader.load("/models/clocks/Clock2.glb", (glb) => {
      const loadObject = async () => {
        await glb.scene.traverse((child) => {
          if (child.name === "Hours") {
            figHour = {...child}
            child.rotation.y =
                ((time.hour * Math.PI) / 6 +
                    (time.minute * Math.PI) / (6 * 60) +
                    (time.second * Math.PI) / (360 * 60)) *
                -1;
          }
          if (child.name === "Minutes") {
            figMinute = {...child}
            child.rotation.y =
                ((time.minute * Math.PI) / 30 + (time.second * Math.PI) / (30 * 60)) * -1;
          }
          if (child.name === "Seconds") {
            figSecond = {...child}
            child.rotation.y = ((time.second * Math.PI) / 30) * -1;
          }
        });
        scene.add(glb.scene);
        animate();
      };
      loadObject();
    });

    if (changeSecond === 0) changeSecond = 1

    function changeTime(){
      if (changeSecond ===0) return
      if (changeSecond > timeIntervalToSecond) changeSecond = timeIntervalToSecond
      timeIntervalToSecond -= changeSecond
      if (isAddTime === true){
        time.second += changeSecond
        time.minute += Math.trunc(time.second/60)
        time.hour += Math.trunc(time.minute/60)

        time.second = time.second % 60
        time.minute = time.minute % 60
        time.hour = time.hour % 12
      } else {
        time.second -= changeSecond
        if (time.second < 0){
          let t = (Math.trunc((time.second * -1)/60) + 1)
          if ((time.second*-1) % 60 === 0) t--
          time.minute -= t
          time.second += t*60
        }
        if (time.minute < 0){
          let t = (Math.trunc((time.minute * -1)/60) + 1)
          if ((time.minute*-1) % 60 === 0) t--
          time.hour -= t
          time.minute += t*60
        }
        if (time.hour < 0) {
          time.hour += 24
        }

        time.second = time.second % 60
        time.minute = time.minute % 60
        time.hour = time.hour % 12
      }

      setTimeout(changeTime, 50)
    }
    changeTime()

    var animate = () => {
      requestAnimationFrame(animate);
      figSecond.rotation.y = ((time.second * Math.PI) / 30) * -1;
      figMinute.rotation.y =
          ((time.minute * Math.PI) / 30 + (time.second * Math.PI) / (30 * 60)) * -1;
      figHour.rotation.y =
          ((time.hour * Math.PI) / 6 +
              (time.minute * Math.PI) / (6 * 60) +
              (time.second * Math.PI) / (360 * 60)) *
          -1;
      if (camera) {
        renderer.render(scene, camera);
      }
    };
  }, []);

  return (
      <Container className="h-100">
        <Row className="text-white clock-name fs-5 fw-bold text-center d-flex justify-content-center mb-2">
          {clockLabel}
        </Row>
        <Row className="d-flex justify-content-center align-items-center overflow-hidden mb-3">
          {
            //TODO Them mo hinh 3D tuong ung question
            <canvas id={canvasName} className='w-100 h-100'/>
          }
        </Row>
      </Container>
  );
}