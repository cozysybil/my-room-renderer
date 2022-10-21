console.log("Hello ThreeJs");

// create a screen
const scene = new THREE.Scene()

// create the shape : BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
const geometry = new THREE.BoxGeometry(1, 1, 1);
// create how it look
const material = new THREE.MeshBasicMaterial({ color: 'pink' });
// create a obj
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// create a camera : PerspectiveCamera(fov, aspect, near, far)
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// move the camera out from the cube
camera.position.z = 3
// move to see the cube
camera.position.x = 1
camera.position.y = 1
scene.add(camera);

// select a canvas from index.js
const canvas = document.querySelector('.webgl')
// create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

// render the scene and the camera
renderer.render(scene, camera)
