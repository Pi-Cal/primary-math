import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Clock = (props) => {

    const {time, timeInterval, idAddTime, canvasName='clock-canvas', scale = 1, clockLabel='', } = props

    const oldTime = useState({...time});

    useEffect(()=>{
        //TODO Cho dong ho quay tu vi tri cu den vi tri moi
    },[time])


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


    loader.load("/models/clocks/Clock2.glb", (glb) => {
      const loadObject = async () => {
        await glb.scene.traverse((child) => {
          if (child.name == "Hours") {
            child.rotation.y =
            ((time.hour * Math.PI) / 6 +
              (time.minute * Math.PI) / (6 * 60) +
              (time.second * Math.PI) / (360 * 60)) *
            -1;
          }
          if (child.name == "Minutes") {
            child.rotation.y =
              ((time.minute * Math.PI) / 30 + (time.second * Math.PI) / (30 * 60)) * -1;
          }
          if (child.name == "Seconds") {
            child.rotation.y = ((time.second * Math.PI) / 30) * -1;
          }
        });
        scene.add(glb.scene);
        animate();
      };
      loadObject();
    });

    var animate = () => {
      requestAnimationFrame(animate);
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
          <canvas id={canvasName} className='w-100 h-100'></canvas>
        }
    </Row>
    </Container>
  );
}