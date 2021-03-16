controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -75)
    projectile.startEffect(effects.halo)
})
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 . 2 2 . 2 . . . . . 
    . . . . . 2 . 2 2 . 2 . . . . . 
    . . . . 2 . 2 2 2 2 . 2 . . . . 
    . . . . 2 . 2 2 2 2 . 2 . . . . 
    . . . 2 . 2 2 2 2 2 2 . 2 . . . 
    . . . 2 . 2 . . . . 2 . 2 . . . 
    . . 2 . 2 2 . 2 2 . 2 2 . 2 . . 
    . . 2 . 2 2 . 2 2 2 2 2 . 2 . . 
    . 2 . 2 2 2 . 2 2 . 2 2 2 . 2 . 
    . 2 . 2 2 2 . . . . 2 2 2 . 2 . 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
