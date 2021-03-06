let app
let girl
let pointerIsDown = false
let pointerIsOver = false

window.onload = function() {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0xAAAAAA
    })
    document.querySelector('#gameDiv').appendChild(app.view)
    app.loader.baseUrl = "sprites"
    app.loader
        .add("idle", "girl-normal.png")
        .add("down", "girl-down.png")
        .add("over", "girl-over.png")
        .add("upoutside", "girl-upoutside.png")
    
    app.loader.onComplete.add(doneLoading)
    app.loader.load()

    app.ticker.add(gameLoop)
    
}

function gameLoop(delta) {

}

function doneLoading() {
    girl = new PIXI.Sprite.from(app.loader.resources["idle"].texture)
    girl.anchor.set(0.5)
    girl.x = app.view.width / 2
    girl.y = app.view.height / 2

    girl.interactive = true
    girl.buttonMode = true

    girl.on('pointerup', doPointerUp)
    girl.on('pointerdown', doPointerDown)
    girl.on('pointerover', doPointerOver)
    girl.on("pointerout", doPointerOut)
    girl.on("pointerupoutside", doPointerUpOutside)

    app.stage.addChild(girl)
}

function doPointerUp() {
    if (pointerIsOver) {
        girl.texture = app.loader.resources['over'].texture
    } else {
        girl.texture = app.loader.resources['idle'].texture
    }
    pointerIsDown = false
}

function doPointerDown() {
    pointerIsDown = true
    girl.texture = app.loader.resources['down'].texture
}

function doPointerOver() {
    pointerIsOver = true
    girl.texture = app.loader.resources['over'].texture

}

function doPointerOut() {
    if (!pointerIsDown) {
        girl.texture = app.loader.resources['idle'].texture
        pointerIsDown = false
    }
}

function doPointerUpOutside() {
    girl.texture = app.loader.resources['idle'].texture
    pointerIsDown = false
    pointerIsOver = false
}

