var bgimg
var gameState="wait"
var bgimg1,logo,logoimg,about,level1item1,level1item2,level1item3
var level1item1img,level2item1img,level3item1img
var level1obs1,level1obs2,level1obs3,level1obs4,level1obs5
var level1obs1img,level1obs2img,level1obs3img,level1obs4img,level1obs5img

function preload(){
bgimg=loadImage("magicbook.gif")
bgimg1=loadImage("mysterybg.jpg")
logoimg=loadImage("logo.png")
playbg=loadImage("bgcastle.jpg")
level1item1img=loadImage("map.png")
level1item2img=loadImage("time.png")
level1item3img=loadImage("bino.png")
level1obs1img=loadImage("obs2.png")
level1obs2img=loadImage("obs3.png")
level1obs3img=loadImage("obs5.png")



}

function setup(){
    createCanvas(windowWidth-20,windowHeight-20)
  //  book=createSprite(width/4,height/1.25)
//book.addImage(bgimg)
//book.scale=.7

logo=createSprite(width/2,height/2.5)
logo.addImage(logoimg)
logo.scale=1.25

level1item1=createSprite((Math.round(random(250,width-100))),(Math.round(random(100,height-50))))

level1item1.addImage(level1item1img)
level1item1.scale=0.1
level1item1.visible=false

level1item2=createSprite((Math.round(random(100,width-100))),(Math.round(random(100,height-100))))
level1item2.addImage(level1item2img)
level1item2.scale=0.25
level1item2.visible=false

level1item3=createSprite((Math.round(random(80,width-80))),(Math.round(random(100,height-80))))
level1item3.addImage(level1item3img)
level1item3.scale=0.25
level1item3.visible=false

    play = createImg("play.png")
    play.position(width/3,height/1.3)
    play.size(250,150)
    

    about=createImg("about.png")
    about.position(width/3+300,height/1.3)
    about.size(230,150)

}

function draw(){
background(bgimg1)


play.mousePressed(()=>{
    gameState="Level 1"

})

if(gameState==="Level 1"){
    background(playbg)
    logo.visible=false
    play.hide()
    about.hide()
    level1item1.visible=true
    level1item2.visible=true
    level1item3.visible=true

}
drawSprites()
}