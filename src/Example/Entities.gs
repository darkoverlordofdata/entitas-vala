/**
 * Entities.gs
 *
 * Entity factory
 *
 */
[indent=4]
uses Entitas
uses GLib

namespace ShmupWarz

    const Tau : double = 2 * Math.PI

    enum Enemy
        Enemy1
        Enemy2
        Enemy3


    enum Layer
        DEFAULT
        BACKGROUND
        TEXT
        LIVES
        MINES
        ACTORS_1
        ACTORS_2
        ACTORS_3
        PLAYER
        BULLET
        PARTICLE
        HUD

    enum Effect
        PEW
        ASPLODE
        SMALLASPLODE

    /**
    *  Create Background
    */
    def createBackground() : Entity
        return World.instance.createEntity("background"
            ).addPosition(0, 0 
            ).addScale(2, 1
            ).addResource("res/images/BackdropBlackLittleSparkBlack.png", null, true)

    /**
    *  Create Player
    */
    def createPlayer() : Entity
        return World.instance.createEntity("player"
            ).setPlayer(true
            ).addBounds(43
            ).addHealth(100, 100
            ).addVelocity(0, 0
            ).addLayer(Layer.PLAYER
            ).addPosition(SCREEN_WIDTH/2, SCREEN_HEIGHT-80
            ).addResource("res/images/fighter.png", null, false)

    /**
    *  Create Bullet
    */
    def createBullet(x : double, y : double) : Entity
        var r = (double) 0xad
        var g = (double) 0xaf
        var b = (double) 0x2f
        var m = 255.0
        var a = 255.0
        var s = 10.0
        return World.instance.createEntity("bullet"
            ).setBullet(true
            ).addHealth(1.5, 1.5
            ).addPosition(x, y
            ).addVelocity(0, -800
            ).addTint(0xAD, 0xFF, 0x2F, 255
            ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
            ).addBounds(5
            ).addExpires(1
            ).addLayer(Layer.BULLET
            ).addResource("res/images/bullet.png", null, false
            ).addSoundEffect(Effect.PEW)

    /**
    *  Create Particle
    */
    def createParticle(x : double, y : double) : Entity
        var radians = World.random.next_double() * Tau
        var magnitude = World.random.int_range(0, 200)
        var velocityX = magnitude * Math.cos(radians)
        var velocityY = magnitude * Math.sin(radians)
        var scale = World.random.double_range(0.1, 1.0)
        return World.instance.createEntity("particle"
            ).addPosition(x, y
            ).addVelocity(velocityX, velocityY
            ).addExpires(1
            ).addLayer(Layer.PARTICLE
            ).addScale(scale, scale
            ).addTint(0xFA, 0xFA, 0xD2, 255
            ).addResource("res/images/star.png", null, false)

    /**
    *  Create Explosion
    */
    def createExplosion(x: double, y: double) : Entity
        var r = (double) 0xaa
        var g = (double) 0xaa
        var b = (double) 0xa2
        var m = 255.0
        var a = 255.0
        var s = 10.0
        return World.instance.createEntity("explosion"
            ).addPosition(x, y
            ).addExpires(1.0
            ).addLayer(Layer.PARTICLE
            ).addScale(0.5, 0.5
            ).addSoundEffect(Effect.ASPLODE
            ).addScaleTween(0.001, 0.5, -3, false, true
            ).addTint(0xFA, 0xFA, 0xD2, 255
            ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
            ).addResource("res/images/explosion.png", null, false)

    /**
    *  Create Small Explosion
    */
    def createBang(x: double, y: double) : Entity
        var r = (double) 0xae
        var g = (double) 0xa8
        var b = (double) 0xaa
        var m = 255.0
        var a = 255.0
        var s = 10.0
        return World.instance.createEntity("explosion"
            ).addPosition(x, y
            ).addExpires(1.0
            ).addLayer(Layer.PARTICLE
            ).addScale(1.0, 1.0
            ).addSoundEffect(Effect.SMALLASPLODE
            ).addScaleTween(0.001, 1.0, -3, false, true
            ).addTint(0xEE, 0xE8, 0xAA, 255
            ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
            ).addResource("res/images/bang.png", null, false)

    /**
    *  Create Small Enemy
    */
    def createEnemy1() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 200
        return World.instance.createEntity("enemy1"
            ).setEnemy(true
            ).addBounds(20
            ).addHealth(10, 10
            ).addVelocity(0, 40
            ).addLayer(Layer.ACTORS_1
            ).addPosition(x, y
            ).addText("", null
            ).addResource("res/images/enemy1.png", null, false)


    /**
    *  Create Medium Sized Enemy
    */
    def createEnemy2() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 100
        return World.instance.createEntity("enemy2"
            ).setEnemy(true
            ).addBounds(40
            ).addHealth(20, 20
            ).addVelocity(0, 30
            ).addLayer(Layer.ACTORS_2
            ).addPosition(x, y
            ).addText("", null
            ).addResource("res/images/enemy2.png", null, false)


    /**
    *  Create Large Enemy
    */
    def createEnemy3() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 50
        return World.instance.createEntity("enemy3"
            ).setEnemy(true
            ).addBounds(70
            ).addHealth(60, 60
            ).addVelocity(0, 20
            ).addLayer(Layer.ACTORS_3
            ).addPosition(x, y
            ).addText("", null
            ).addResource("res/images/enemy3.png", null, false)




