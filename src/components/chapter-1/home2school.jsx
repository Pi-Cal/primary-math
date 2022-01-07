import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Home2School = ({frame = 2}) => {
    useEffect(() => {
        let scene = new THREE.Scene();
        let canvasExampleChapter1 = document.getElementById("canvasExampleChapter1Part2");

        let renderer = new THREE.WebGLRenderer({
            canvas: canvasExampleChapter1,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.8);
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
        camera.position.z = 40;

        let loader = new GLTFLoader();

        loader.load("/models/school/home2school.glb", (glb) => {
            glb.scene.position.y = -16;
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
        <div className='h-100'>
        {
            //TODO -- Quoc -- Part 2
        }
            <canvas id="canvasExampleChapter1Part2" className='w-100 h-100'/>
        </div>
    )
}