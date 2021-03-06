let app
let player

window.onload = function() {
    app = new PIXI.Application({
        width: 800,
        width: 600,
        backgroundColor: 0xAAAAAA
    })

    document.body.appendChild(app.view)
    window.addEventListener('keyup', switchContainer)

   // CREATE SCREENS

   titleScreen = new PIXI.Container()
   mainScreen = new PIXI.Container()
   endScreen = new PIXI.Container()

   mainScreen.visible = false
   endScreen.visible = false

   app.stage.addChild(titleScreen)
   app.stage.addChild(mainScreen)
   app.stage.addChild(endScreen)

    // SETUP TITLE SCREEN
    let redRect = new PIXI.Graphics()
    redRect.beginFill(0xff0000)
    redRect.drawRect(0,0,app.view.width, app.view.height)
    titleScreen.addChild(redRect)

    let text1 = new PIXI.Text('Title Screen')
    text1.anchor.set(0.5)
    text1.x = app.view.width/2
    text1.y = app.view.height/2
    text1.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3
    })
    titleScreen.addChild(text1)


    // SETUP main SCREEN
    let greenRect = new PIXI.Graphics()
    greenRect.beginFill(0x00ff00)
    greenRect.drawRect(0,0,app.view.width, app.view.height)
    mainScreen.addChild(greenRect)

    let text2 = new PIXI.Text('Main Screen')
    text2.anchor.set(0.5)
    text2.x = app.view.width/2
    text2.y = app.view.height/2
    text2.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3
    })
    mainScreen.addChild(text2)

     // SETUP end SCREEN
   let blueRect = new PIXI.Graphics()
   blueRect.beginFill(0x0000ff)
   blueRect.drawRect(0,0,app.view.width, app.view.height)
   endScreen.addChild(blueRect)
   let text3 = new PIXI.Text('End Screen')
    text3.anchor.set(0.5)
    text3.x = app.view.width/2
    text3.y = app.view.height/2
    text3.style = new PIXI.TextStyle({
        fill: 0x000000,
        fontSize: 40,
        fontFamily: "Arial",
        fontStyle: "bold",
        stroke: 0xFFFFFF,
        strokeThickness: 3
    })
    endScreen.addChild(text3)
}

function switchContainer(e) {
    switch (e.key) {
        case "1":
            titleScreen.visible = true
            mainScreen.visible = false
            endScreen.visible = false
            break
        case "2":
            titleScreen.visible = false
            mainScreen.visible = true
            endScreen.visible = false
            break
        case "3":
            titleScreen.visible = false
            mainScreen.visible = false
            endScreen.visible = true
            break
    }
}