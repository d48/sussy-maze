namespace SpriteKind {
    export const crewmate2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . f f f f f f f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f f 2 2 f f f f f f 2 2 f f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 2 f f f f f f 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f 2 2 2 2 f . 
        . f f 2 2 f f . . f f 2 2 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f f 2 2 2 2 2 f f . . . 
        . . . f f f 2 2 2 2 2 2 f f f . 
        . . f f 1 f 2 2 2 2 2 2 2 2 f . 
        . . f 1 1 f 2 2 2 2 2 2 2 2 f . 
        . . f 1 1 f 2 2 2 2 2 2 2 2 f . 
        . . f f f f 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 f f f . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setDialogTextColor(15)
    game.showLongText("you outrun the crewmate and jump off of a cliff", DialogLayout.Bottom)
    game.showLongText("at the bottom you find your loving wife waiting for you...", DialogLayout.Bottom)
    game.showLongText("the wife was so worried and didnt notice you dropping down and you overhear her converstaion with the other impostor.", DialogLayout.Bottom)
    game.showLongText("\"i feel so sorry for red, he doesnt know im having a secret affair with the yellow crewmate.\"", DialogLayout.Bottom)
    game.showLongText("you immediately get angry and tap her shoulder. ", DialogLayout.Bottom)
    game.showLongText("You slowly raise your knife above her head...", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level3`)
    game.showLongText("you chase your wife into your own house as yellow follows behind.", DialogLayout.Bottom)
    game.showLongText("\"HONEY IM SORRY, HE JUST KISSES BETTER\"", DialogLayout.Bottom)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 2 2 2 2 2 f f . . . . 
        . . . f 2 2 2 2 2 2 f f f . . . 
        . f f f 2 2 2 2 2 2 f 1 f f . . 
        . f 2 2 2 2 2 2 2 2 f 1 1 f . . 
        . f 2 2 2 2 2 2 2 2 f 1 1 f . . 
        . f 2 2 2 2 2 2 2 2 f f f f . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f f f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crewmate2, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.showLongText("the yellow crewmate catches up to you and starts to talk,", DialogLayout.Bottom)
    game.showLongText("\"look man, I just wanted to tell you your wife is waiting and very worried about you.\"", DialogLayout.Bottom)
    game.showLongText("he starts to reason with you and walks you back to your worried wife.", DialogLayout.Bottom)
    game.showLongText("SIKE YOU THOUGHT HE TAKES YOUR KNIFE AND STABS YOU IN THE BACK HAHAHAHAHA", DialogLayout.Bottom)
    game.over(false, effects.melt)
    music.wawawawaa.playUntilDone()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . f f f f f f f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f f 2 2 2 2 2 2 2 2 2 2 f f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f f 2 2 2 f . 
        . f 2 2 f f f 1 1 1 f f f 2 f . 
        . f 2 2 f 1 1 1 1 1 1 1 f 2 f . 
        . f 2 2 f f 1 1 1 1 1 f f 2 f . 
        . f 2 2 2 f f f f f f f 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f 2 2 2 2 f . 
        . f f 2 2 f f . . f f 2 2 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.showLongText("the yellow crewmate catches up to you and starts to talk,", DialogLayout.Bottom)
    game.showLongText("\"look man, I just wanted to tell you your wife is waiting and very worried about you.\"", DialogLayout.Bottom)
    game.showLongText("he starts to reason with you and walks you back to your worried wife.", DialogLayout.Bottom)
    game.showLongText("SIKE YOU THOUGHT HE TAKES YOUR KNIFE AND STABS YOU IN THE BACK HAHAHAHAHA", DialogLayout.Bottom)
    game.over(false, effects.melt)
    music.wawawawaa.playUntilDone()
})
let impostor: Sprite = null
game.splash("its smelly", "like funky")
music.powerUp.playUntilDone()
impostor = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f f 2 2 f f f f f f 2 2 f f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 2 f f f f f f 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
    . f 2 2 2 2 f f f f 2 2 2 2 f . 
    . f f 2 2 f f . . f f 2 2 f f . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.Player)
let crewmate = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f f 5 5 f f f f f f 5 5 f f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 5 f f f f f f 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f f 5 5 f f . . f f 5 5 f f . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let crewmate2 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f f 5 5 f f f f f f 5 5 f f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 5 f f f f f f 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f f 5 5 f f . . f f 5 5 f f . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.crewmate2)
controller.player1.moveSprite(impostor, 100, 100)
impostor.say("filler", 2000)
impostor.say("ngl red is pretty sus", 2000)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(impostor, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(crewmate, sprites.dungeon.collectibleRedCrystal)
tiles.placeOnRandomTile(crewmate2, sprites.castle.tileGrass2)
crewmate.follow(impostor, 70)
crewmate2.follow(impostor, 75)
scene.cameraFollowSprite(impostor)
