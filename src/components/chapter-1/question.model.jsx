import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "./chapter-1.css";

export const QuestionModel = () => {
  const [figSecond, setFigSecond] = useState(null);
  const [figMinute, setFigMinute] = useState(null);
  const [figHour, setFigHour] = useState(null);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log(hour, minute, second);
    if (figHour)
      figHour.rotation.y =
        ((hour * Math.PI) / 6 +
          (minute * Math.PI) / (6 * 60) +
          (second * Math.PI) / (360 * 60)) *
        -1;
    if (figMinute)
      figMinute.rotation.y =
        ((minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)) * -1;
    if (figSecond) figSecond.rotation.y = ((second * Math.PI) / 30) * -1;
  }, [hour, minute, second]);

  useEffect(() => {
    let scene = new THREE.Scene();
    let clockCanvas = document.getElementById("clock-canvas");

    let renderer = new THREE.WebGLRenderer({
      canvas: clockCanvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
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

    let clock = new THREE.Clock();

    loader.load("/models/clocks/Clock2.glb", (glb) => {
      const loadObject = async () => {
        await glb.scene.traverse((child) => {
          if (child.name == "Hours") {
            setFigHour({ ...child });
          }
          if (child.name == "Minutes") {
            setFigMinute({ ...child });
          }
          if (child.name == "Seconds") {
            setFigSecond({ ...child });
          }
        });
        scene.add(glb.scene);
        animate();
      };
      loadObject();
    });

    var animate = () => {
      requestAnimationFrame(animate);
      let delta = clock.getDelta();
      if (camera) {
        renderer.render(scene, camera);
      }
    };
  }, []);

  const handleSecondFigEvent = () => {
    console.log("Clicked Seconds");
  };

  return (
    <Container className="h-100 bg-warning">
      <Row className="d-flex justify-content-center align-items-center overflow-hidden w-100">
        {
          //TODO Them mo hinh 3D tuong ung question
          <canvas id="clock-canvas"></canvas>
        }
      </Row>

      <Row>
        <Col md="4">
          <label htmlFor="hour-range" className="form-label">
            Hour
          </label>
          <input
            type="range"
            className="form-range"
            id="hour-range"
            min="0"
            max="12"
            onChange={(e) => setHour(e.target.value)}
            defaultValue={0}
          ></input>
        </Col>
        <Col md="4">
          <label htmlFor="minute-range" className="form-label">
            Minute
          </label>
          <input
            type="range"
            className="form-range"
            id="minute-range"
            min="0"
            max="60"
            onChange={(e) => setMinute(e.target.value)}
            defaultValue={0}
          ></input>
        </Col>
        <Col md="4">
          <label htmlFor="second-range" className="form-label">
            Second
          </label>
          <input
            type="range"
            className="form-range"
            id="second-range"
            min="0"
            max="60"
            onChange={(e) => setSecond(e.target.value)}
            defaultValue={0}
          ></input>
        </Col>
      </Row>
    </Container>
  );
};
