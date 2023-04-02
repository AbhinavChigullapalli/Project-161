AFRAME.registerComponent("bowling-balls", {
    init:function(){
        this.shootBullet()
    },
    shootBullet:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry", {
                    primitve:"sphere",
                    radius:0.1
                })
                ball.setAttribute("material", "color", "black")
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                ball.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
                var camera = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
}) 