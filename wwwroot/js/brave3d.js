function brave3d() {
  
    var canvas = document.getElementById("renderCanvas");
    var engine = null;
    var scene = null;
    var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };

    var createScene = function () {

        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
        var scenecolor = new BABYLON.Color3.FromHexString("#000000");

        scene.clearColor = new BABYLON.Color3(1, 1, 1, 1);

        // Add a camera to the scene and attach it to the canvas
        var camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.2, 5, new BABYLON.Vector3(0, 0, 0), scene);

        camera.attachControl(canvas, true);
        camera.setTarget(BABYLON.Vector3.Zero());

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 6, 0), scene);

        //// Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;


        // GET COLOR  
        var h = document.getElementById('stringTB').value;
        var info = getBlockInfo(h);
        console.log("info = " + h);



        // SET COLOR
        var color = new BABYLON.Color3(1, 0, 0);
        var innercolor = "#c397f7";

        // OUTER Box
        var outerBox = BABYLON.MeshBuilder.CreateBox("outerBox", { height: 4, width: 4, depth: 4 }, scene);
        outerBox.position = new BABYLON.Vector3(0, 6, 0);
        var mat = new BABYLON.StandardMaterial("mat", scene);
        var texture = new BABYLON.Texture("images/map2.png", scene);
        mat.diffuseColor = new BABYLON.Color3.FromHexString(innercolor);
        mat.opacityTexture = texture;
        outerBox.material = mat;

        // INNER BOX
        var innerBox = BABYLON.MeshBuilder.CreateBox("innerBox", { height: 2, width: 2, depth: 2 }, scene);
        innerBox.position = new BABYLON.Vector3(0, 6, 0);
        var mat0 = new BABYLON.StandardMaterial("mat0", scene);
        mat0.diffuseColor = new BABYLON.Color3.FromHexString(innercolor);
        innerBox.material = mat0;


        // Pedistal
        var pedistalBox = BABYLON.MeshBuilder.CreateBox("pedistalBox", { height: 5, width: 5, depth: 5 }, scene);
        pedistalBox.position = new BABYLON.Vector3(0, 2.5, 0);
        var mat1 = new BABYLON.StandardMaterial('mat1', scene);
        mat1.diffuseColor = new BABYLON.Color3("black");
        pedistalBox.material = mat1;
        console.log(innercolor);
        console.log(color);
        //console.log(innercolor);

        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 20, height: 20 }, scene);
        var backgroundMaterial = new BABYLON.BackgroundMaterial("backgroundMaterial", scene);
        backgroundMaterial.diffuseTexture = new BABYLON.Texture("images/brekkie-art.jpg", scene);
        backgroundMaterial.diffuseTexture.uScale = 1.0;
        backgroundMaterial.diffuseTexture.vScale = 1.0;
        backgroundMaterial.shadowLevel = 0.4;
        ground.material = backgroundMaterial;


        // Skybox
        //var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size: 100.0 }, scene);
        //var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        //skyboxMaterial.backFaceCulling = false;
        //var files = [
        //    "textures/Space/space_left.jpg",
        //    "textures/Space/space_up.jpg",
        //    "textures/Space/space_front.jpg",
        //    "textures/Space/space_right.jpg",
        //    "textures/Space/space_down.jpg",
        //    "textures/Space/space_back.jpg",
        //];
        //skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture.CreateFromImages(files, scene);
        //skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        //skyboxMaterial.disableLighting = true;
        //skybox.material = skyboxMaterial;

        return scene;

    };

    engine = createDefaultEngine();
    if (!engine) throw 'engine should not be null.';
    scene = createScene();

    engine.runRenderLoop(function () {
        if (scene) {
            scene.render();
        }
    });

    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });

}
