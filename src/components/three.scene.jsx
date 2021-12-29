/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSComponent = ({index, questionList}) => {
    const ref = useRef();
    useEffect(() => {
        console.log("Current question: ", questionList[index]);
        const width = ref.current.clientWidth;
        const height = ref.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        const canvas = document.getElementById("practice-canvas");
        const canvasList = document.getElementsByTagName("canvas");
        if (canvasList.length > 0) {
            canvas.replaceChild(renderer.domElement, canvasList[0]);
        } else {
            canvas.appendChild(renderer.domElement);
        }
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }, [index])
    return <div ref={ref} className="w-100 h-100" id="practice-canvas"></div>
}

export default ThreeJSComponent;