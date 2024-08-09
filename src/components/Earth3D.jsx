import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Earth3D = ({ isDarkMode }) => {
  const mountRef = useRef(null);
  const earthRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isMobile ? 60 : 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    const earthVertexShader = `
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const earthFragmentShader = `
      uniform sampler2D globeTexture;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
        vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
        vec3 globeColor = texture2D(globeTexture, vUv).xyz;
        gl_FragColor = vec4(globeColor + atmosphere, 1.0);
      }
    `;

    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        globeTexture: { value: loader.load(isDarkMode ? '/images/earth-night.jpg' : '/images/earth-day.jpg') }
      }
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthRef.current = earth;
    scene.add(earth);

    const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const cloudMaterial = new THREE.ShaderMaterial({
      uniforms: {
        cloudTexture: { value: loader.load('/images/earth-clouds.jpg') }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D cloudTexture;
        varying vec2 vUv;
        void main() {
          vec4 cloudColor = texture2D(cloudTexture, vUv);
          gl_FragColor = vec4(cloudColor.rgb, cloudColor.r * 0.4);
        }
      `,
      transparent: true
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earth.add(clouds);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = isMobile ? 2000 : 5000;
    const posArray = new Float32Array(particlesCnt * 3);

    for(let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (isMobile ? 3 : 5);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.003 : 0.005,
      color: 0x49ef4,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    camera.position.z = isMobile ? 2.5 : 3;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001;
      clouds.rotation.y += 0.0012;
      particlesMesh.rotation.y += 0.0005;

      controls.update();
      if (mountRef.current) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isDarkMode, isMobile]);

  useEffect(() => {
    if (earthRef.current) {
      const texture = new THREE.TextureLoader().load(isDarkMode ? '/images/earth-night.jpg' : '/images/earth-day.jpg');
      earthRef.current.material.uniforms.globeTexture.value = texture;
    }
  }, [isDarkMode]);

  return <div ref={mountRef} className='w-full h-full' />;
};

export default Earth3D;