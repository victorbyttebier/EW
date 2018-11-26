AFRAME.registerComponent('image-part', {

    init: function () {

        // Create a texture loader so we can load our image file
        const loader = new THREE.TextureLoader();

        // Load an image file into a custom material
        const material = new THREE.MeshLambertMaterial({
            //map: loader.load('https://source.unsplash.com/random')
            map: loader.load('../assets/goat.jpg')

        });

        // create a plane geometry for the image with a width of 10
        // and a height that preserves the image's aspect ratio
        const geometry = new THREE.PlaneGeometry(1, 1);

        // combine our image geometry and material into a mesh
        const mesh = new THREE.Mesh(geometry, material);

        // set the position of the image mesh in the x,y,z dimensions
        mesh.position.set(0, 0, 0)

        mesh.rotation.x = -Math.PI / 2


        this.el.object3D.add(mesh)
        return

    }
})


AFRAME.registerPrimitive('a-image-part', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        'image-part': {},
    }
}))
