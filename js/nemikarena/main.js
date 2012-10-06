$(function() {
    var container;
    var camera, scene, renderer;
    var group;
    var time = 0;

    init();
    animate();
    //console.log("Stuff is initialized.");
                
    keypress.combo("a", function() {
        console.log("You pressed a.");
    });
});

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1500;

    scene = new THREE.Scene();

    var sprite_map = THREE.ImageUtils.loadTexture("//ateoto.github.com/img/sprite.png");

    var sprite = new THREE.Sprite({ map: sprite_map, alignment: THREE.SpriteAlignment.topLeft });
    sprite.position.set(150, 150, 0);
    scene.add(sprite);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColorHex(0x000000, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame( animate );
    render();
    //stats.update();
}

function render() {
    renderer.render(scene, camera);
}