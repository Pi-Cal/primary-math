import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import './part-2.tabs.css'

export const Example = () => {
    useEffect(() => {
        let scene = new THREE.Scene();
        let canvasExampleChapter1 = document.getElementById("canvasExampleChapter1Part2");

        let renderer = new THREE.WebGLRenderer({
            canvas: canvasExampleChapter1,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaOutput = true;

        let light = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(light);

        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 30;
        camera.position.y = 5

        let loader = new GLTFLoader();

        loader.load("/models/school/home2school.glb", (glb) => {
            scene.add(glb.scene);
            glb.scene.rotation.y = - Math.PI / 2
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
            //TODO -- Quoc -- Part 2
        }
        <canvas id="canvasExampleChapter1Part2"/>
        </Container>
    )
}