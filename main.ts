namespace SpriteKind {
    export const super_enemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.super_enemy, function (sprite, otherSprite) {
    projectile.destroy(effects.disintegrate, 100)
    tiles.placeOnRandomTile(galorian, sprites.dungeon.floorDarkDiamond)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e . . . . . . . . 
        . . e 2 4 4 5 4 e . . . . . . . 
        . . e 4 4 4 d 4 5 e . . . . . . 
        . . e 2 4 4 5 4 e . . . . . . . 
        . . e e e e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, riley_mcroke, 50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . e 4 5 4 4 4 2 e . . . . . . 
        . e 5 4 d 4 4 4 4 e . . . . . . 
        . . e 4 5 4 4 4 2 e . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, riley_mcroke, -50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . e 5 e . . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . e 5 d 5 e . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . e 2 4 2 e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, riley_mcroke, 0, -50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e 2 4 2 e . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . e 5 d 5 e . . . . . . 
        . . . . . e 4 4 4 e . . . . . . 
        . . . . . . e 5 e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, riley_mcroke, 0, 50)
})
function level_2 () {
    riley_mcroke.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d 1 1 1 1 1 1 1 1 d . . . 
        . . d 1 1 9 9 9 9 9 9 1 1 d . . 
        . . d 1 9 9 9 9 6 6 9 9 1 d . . 
        . . d 1 9 9 9 9 6 6 6 9 1 d . . 
        . . d 1 9 9 9 9 9 6 6 9 1 d . . 
        . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
        . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
        . . d 1 1 9 9 9 9 9 9 1 1 d . . 
        . . . d 1 1 1 1 1 1 1 1 d . . . 
        . . b b c 1 1 5 e 1 1 b b c . . 
        . . b d b 1 1 7 e 1 1 b d b . . 
        . . b b b 1 1 1 1 1 1 b b b . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `)
    tiles.setTilemap(tiles.createTilemap(hex`1000100002070707070702070707070707070706020505050505020505050505050505080205050505050302020302020202020202050505050505050502050505050508020505050505050505020505050505080205050505050505050205050505050802050505050505050502050505050302030202020302020202030202020202080a0505050205050505020505050505080a0505050205050505020505050505080a0505050205050505020505050505050a0505050205050505020505050505080a0505050205050505020505050505080a0505050205050505020505050505080a05050502050505050302020202020301020202030909090909090909090904`, img`
        . 2 . . . 2 . 2 . . . . . . . . 
        . 2 . . . 2 . 2 2 2 2 2 2 2 2 2 
        . 2 . . . 2 . . . . . . . . . . 
        . 2 . . . 2 2 2 2 . 2 2 2 2 2 2 
        . 2 . . . . . . 2 . 2 . . . . . 
        . 2 . . . . . . 2 . 2 . . 2 2 2 
        . 2 2 2 2 2 2 2 2 . 2 2 2 2 . . 
        . . . . . . . . . . . . . . . 2 
        2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 
        . . . 2 . 2 . . 2 . 2 . . . . . 
        . . . 2 . 2 . . 2 . 2 . . . . . 
        . . . 2 . 2 . . 2 . 2 . . . . . 
        . . . 2 . 2 . . 2 . 2 . . . . . 
        . . . 2 . 2 . . 2 . 2 2 2 2 2 2 
        2 2 2 2 . 2 . . 2 . . . . . . . 
        . . . . . 2 . . 2 2 2 2 2 2 2 . 
        `, [myTiles.transparency16,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest], TileScale.Sixteen))
    tiles.placeOnRandomTile(riley_mcroke, sprites.dungeon.collectibleBlueCrystal)
    galorian = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 f f 6 6 f f 6 6 . . . 
        . . . 6 6 f f 6 6 f f 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 b b 6 6 6 6 . . . 
        . . . 6 6 6 6 b b 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . 9 6 b b b b b b b b 6 9 . . 
        . . 6 d b b a a a b b b d 6 . . 
        . . 6 6 b b b a a a b b 6 6 . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b . . b b . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(galorian, sprites.dungeon.floorDark2)
    galorian.follow(riley_mcroke, 50)
    gerogar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 9 9 9 9 9 9 9 9 8 . . . 
        . . . 8 9 9 9 9 9 6 6 9 8 . . . 
        . . . 8 9 9 9 9 9 9 6 9 8 . . . 
        . . . 8 9 9 9 9 9 9 9 9 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . 9 6 8 8 a a a b 8 8 6 9 . . 
        . . 6 d 8 8 b a a a 8 8 d 6 . . 
        . . 6 6 8 8 8 8 8 8 8 8 6 6 . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        `, SpriteKind.super_enemy)
    tiles.placeOnRandomTile(gerogar, sprites.dungeon.floorDarkDiamond)
    gerogar.follow(riley_mcroke, 30)
    info.startCountdown(28)
}
function level_1 () {
    riley_mcroke.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d 1 1 1 1 1 1 1 1 d . . . 
        . . d 1 1 9 9 9 9 9 9 1 1 d . . 
        . . d 1 9 9 9 9 6 6 9 9 1 d . . 
        . . d 1 9 9 9 9 6 6 6 9 1 d . . 
        . . d 1 9 9 9 9 9 6 6 9 1 d . . 
        . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
        . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
        . . d 1 1 9 9 9 9 9 9 1 1 d . . 
        . . . d 1 1 1 1 1 1 1 1 d . . . 
        . . b b c 1 1 5 e 1 1 b b c . . 
        . . b d b 1 1 7 e 1 1 b d b . . 
        . . b b b 1 1 1 1 1 1 b b b . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `)
    tiles.setTilemap(tiles.createTilemap(hex`100010000d0506060606060606060606060606070105080808080808080808080505050c010508080808080808080808050b0b02010508080808050505050505050808020105050505050508080808080b0808020108080808080508080808080808080201080808080805050505080808080802010808080808080808050808080808020c0508080808080808050808080808020105080808080808080505050508080201050808080808080805080805080802010508030808080808050808050808020105050505050505050508080508080201080808080808080808080805080802010808080808080808080808050505050a090909090909090909090909090904`, img`
        . . 2 . . . . . . . . 2 2 2 2 2 
        2 . 2 . . . . . . . . 2 . . . . 
        2 . 2 . . 2 2 2 2 2 2 2 . 2 2 2 
        2 . 2 2 2 2 . . . . . . . 2 . . 
        2 . . . . . . 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 . 2 2 2 2 . . . . . 
        . . . 2 . 2 . . . . 2 . . . . . 
        2 2 2 2 2 2 2 2 2 . 2 . . . . . 
        . . 2 . . . . . 2 . 2 2 2 2 . . 
        2 . 2 . . . . . 2 . . . . 2 . . 
        2 . 2 . . . . . 2 . 2 2 . 2 . . 
        2 . 2 2 2 2 2 2 2 . 2 2 . 2 . . 
        2 . . . . . . . . . 2 2 . 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 2 2 2 2 . 
        `, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark2,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight2,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
    tiles.placeOnRandomTile(riley_mcroke, sprites.dungeon.collectibleBlueCrystal)
    galorian = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 f f 6 6 f f 6 6 . . . 
        . . . 6 6 f f 6 6 f f 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 b b 6 6 6 6 . . . 
        . . . 6 6 6 6 b b 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . 9 6 b b b b b b b b 6 9 . . 
        . . 6 d b b a a a b b b d 6 . . 
        . . 6 6 b b b a a a b b 6 6 . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b . . b b . . . . . 
        `, SpriteKind.Enemy)
    galorian.follow(riley_mcroke, 50)
    tiles.placeOnRandomTile(galorian, sprites.dungeon.floorDark2)
    info.startCountdown(23)
}
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy(effects.disintegrate, 100)
    tiles.placeOnRandomTile(galorian, sprites.dungeon.floorDark2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    level_2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(galorian, sprites.dungeon.floorDark2)
    tiles.placeOnRandomTile(riley_mcroke, sprites.dungeon.collectibleBlueCrystal)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.super_enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(gerogar, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(riley_mcroke, sprites.dungeon.collectibleBlueCrystal)
    info.changeLifeBy(-1)
})
let gerogar: Sprite = null
let galorian: Sprite = null
let projectile: Sprite = null
let riley_mcroke: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111ddddd
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd111111111111111111111ddddd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ddd1111111ddd11111111111ddddd
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ddd1111111ddd11111111111ddddd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ddd11111111111ddddd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111
    ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111
    ffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ddd11
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ddd11
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ddd11
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("galore´s attack 2", "by flame22903 ")
game.setDialogTextColor(15)
game.showLongText(" fight against the aliens, reach the other side of the planet and escape", DialogLayout.Bottom)
riley_mcroke = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . d 1 1 1 1 1 1 1 1 d . . . 
    . . d 1 1 9 9 9 9 9 9 1 1 d . . 
    . . d 1 9 9 9 9 6 6 9 9 1 d . . 
    . . d 1 9 9 9 9 6 6 6 9 1 d . . 
    . . d 1 9 9 9 9 9 6 6 9 1 d . . 
    . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
    . d 1 1 9 9 9 9 9 9 9 9 1 1 d . 
    . . d 1 1 9 9 9 9 9 9 1 1 d . . 
    . . . d 1 1 1 1 1 1 1 1 d . . . 
    . . b b c 1 1 5 e 1 1 b b c . . 
    . . b d b 1 1 7 e 1 1 b d b . . 
    . . b b b 1 1 1 1 1 1 b b b . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(riley_mcroke, 85, 85)
info.setLife(3)
scene.cameraFollowSprite(riley_mcroke)
level_1()
