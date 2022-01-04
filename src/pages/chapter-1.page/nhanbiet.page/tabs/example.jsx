import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls} from "three/examples/jsm/controls/DragControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './tabs.css'

export const Example = () => {
    useEffect(() => {
        let scene = new THREE.Scene();
        let canvasExampleChapter1 = document.getElementById("canvasExampleChapter1");

        let renderer = new THREE.WebGLRenderer({
            canvas: canvasExampleChapter1,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaOutput = true;

        let light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        let pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.y = 10
        pointLight.position.x = 5
        scene.add(pointLight)

        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 5;

        let loader = new GLTFLoader();

        loader.load("/models/clocks/Clock2.glb", (glb) => {
            scene.add(glb.scene);
            new DragControls([glb.scene], camera, renderer.domElement);
            animate();
        });

        new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            if (camera) {
                renderer.render(scene, camera);
            }
        };
    }, []);

    return(
        <Container className='vh-80 bg-danger'>
        {
            //TODO -- Quoc
        }
        <canvas id="canvasExampleChapter1"/>
        </Container>
    )
}