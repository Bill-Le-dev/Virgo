import * as THREE from 'three';

let scene, camera, renderer;

function init() {
    // Create a scene
    scene = new THREE.Scene();

    // Create a camera (perspective view)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a WebGL renderer and set the size
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube for some basic animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    }

    animate();
}

// Resize the renderer when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Initialize the scene
init();
