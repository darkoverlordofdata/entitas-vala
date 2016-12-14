/**
 * Entitas Generated Components and Extensions for Example
 *
 * do not edit this file
 */
[indent=4]
namespace Entitas

    const POOL_SIZE : int = 128

    /**
    * Component extensions
    */
    const components: array of string = {
        "BoundsComponent",
        "BulletComponent",
        "ColorTweenComponent",
        "DestroyComponent",
        "EnemyComponent",
        "ExpiresComponent",
        "FiringComponent",
        "HealthComponent",
        "LayerComponent",
        "LifeComponent",
        "MineComponent",
        "MouseComponent",
        "PlayerComponent",
        "PositionComponent",
        "ResourceComponent",
        "ScaleTweenComponent",
        "ScaleComponent",
        "ScoreComponent",
        "SoundEffectComponent",
        "TintComponent",
        "VelocityComponent",
        "ComponentsCount"
    }

    enum Component
        Bounds
        Bullet
        ColorTween
        Destroy
        Enemy
        Expires
        Firing
        Health
        Layer
        Life
        Mine
        Mouse
        Player
        Position
        Resource
        ScaleTween
        Scale
        Score
        SoundEffect
        Tint
        Velocity
        ComponentsCount



    class BoundsComponent : Object implements IComponent 
        radius : double 

    class BulletComponent : Object implements IComponent 
        active : bool = true

    class ColorTweenComponent : Object implements IComponent 
        redMin : double 
        redMax : double 
        redSpeed : double 
        greenMin : double 
        greenMax : double 
        greenSpeed : double 
        blueMin : double 
        blueMax : double 
        blueSpeed : double 
        alphaMin : double 
        alphaMax : double 
        alphaSpeed : double 
        redAnimate : bool 
        greenAnimate : bool 
        blueAnimate : bool 
        alphaAnimate : bool 
        repeat : bool 

    class DestroyComponent : Object implements IComponent 
        active : bool = true

    class EnemyComponent : Object implements IComponent 
        active : bool = true

    class ExpiresComponent : Object implements IComponent 
        delay : double 

    class FiringComponent : Object implements IComponent 
        active : bool = true

    class HealthComponent : Object implements IComponent 
        health : double 
        maximumHealth : double 

    class LayerComponent : Object implements IComponent 
        ordinal : int 

    class LifeComponent : Object implements IComponent 
        count : int 

    class MineComponent : Object implements IComponent 
        active : bool = true

    class MouseComponent : Object implements IComponent 
        x : double 
        y : double 

    class PlayerComponent : Object implements IComponent 
        active : bool = true

    class PositionComponent : Object implements IComponent 
        x : double 
        y : double 

    class ResourceComponent : Object implements IComponent 
        path : string 
        sprite : Object 
        bgd : bool 

    class ScaleTweenComponent : Object implements IComponent 
        min : double 
        max : double 
        speed : double 
        repeat : bool 
        active : bool 

    class ScaleComponent : Object implements IComponent 
        x : double 
        y : double 

    class ScoreComponent : Object implements IComponent 
        value : double 

    class SoundEffectComponent : Object implements IComponent 
        effect : int 

    class TintComponent : Object implements IComponent 
        r : int 
        g : int 
        b : int 
        a : int 

    class VelocityComponent : Object implements IComponent 
        x : double 
        y : double 



    /**
    * Entity extensions
    */
    class Entity : EntityBase

        construct(componentsEnum : array of string, totalComponents : int=32)
            super(componentsEnum, totalComponents)
            /* Preallocate component pools*/
            _boundsComponentPool = new Bag of BoundsComponent
            for var i=1 to POOL_SIZE
                _boundsComponentPool.push(new BoundsComponent())

            _bulletComponent = new BulletComponent()
            _colorTweenComponentPool = new Bag of ColorTweenComponent
            for var i=1 to POOL_SIZE
                _colorTweenComponentPool.push(new ColorTweenComponent())

            _destroyComponent = new DestroyComponent()

            _enemyComponent = new EnemyComponent()
            _expiresComponentPool = new Bag of ExpiresComponent
            for var i=1 to POOL_SIZE
                _expiresComponentPool.push(new ExpiresComponent())

            _firingComponent = new FiringComponent()
            _healthComponentPool = new Bag of HealthComponent
            for var i=1 to POOL_SIZE
                _healthComponentPool.push(new HealthComponent())
            _layerComponentPool = new Bag of LayerComponent
            for var i=1 to POOL_SIZE
                _layerComponentPool.push(new LayerComponent())
            _lifeComponentPool = new Bag of LifeComponent
            for var i=1 to POOL_SIZE
                _lifeComponentPool.push(new LifeComponent())

            _mineComponent = new MineComponent()
            _mouseComponentPool = new Bag of MouseComponent
            for var i=1 to POOL_SIZE
                _mouseComponentPool.push(new MouseComponent())

            _playerComponent = new PlayerComponent()
            _positionComponentPool = new Bag of PositionComponent
            for var i=1 to POOL_SIZE
                _positionComponentPool.push(new PositionComponent())
            _resourceComponentPool = new Bag of ResourceComponent
            for var i=1 to POOL_SIZE
                _resourceComponentPool.push(new ResourceComponent())
            _scaleTweenComponentPool = new Bag of ScaleTweenComponent
            for var i=1 to POOL_SIZE
                _scaleTweenComponentPool.push(new ScaleTweenComponent())
            _scaleComponentPool = new Bag of ScaleComponent
            for var i=1 to POOL_SIZE
                _scaleComponentPool.push(new ScaleComponent())
            _scoreComponentPool = new Bag of ScoreComponent
            for var i=1 to POOL_SIZE
                _scoreComponentPool.push(new ScoreComponent())
            _soundEffectComponentPool = new Bag of SoundEffectComponent
            for var i=1 to POOL_SIZE
                _soundEffectComponentPool.push(new SoundEffectComponent())
            _tintComponentPool = new Bag of TintComponent
            for var i=1 to POOL_SIZE
                _tintComponentPool.push(new TintComponent())
            _velocityComponentPool = new Bag of VelocityComponent
            for var i=1 to POOL_SIZE
                _velocityComponentPool.push(new VelocityComponent())


        /** Entity: Bounds methods*/

        /** @type Bounds */
        prop bounds : BoundsComponent
            get
                return (BoundsComponent)getComponent(Component.Bounds)

        /** @type boolean */
        prop hasBounds : bool
            get
                return hasComponent(Component.Bounds)
 
        def clearBoundsComponentPool()
            _boundsComponentPool.clear()

        /**
         * @param radius double
         * @return entitas.Entity
         */
        def addBounds(radius:double) : Entity
            var c = _boundsComponentPool.length > 0 ? _boundsComponentPool.pop() : new BoundsComponent()
            c.radius = radius
            addComponent(Component.Bounds, c)
            return this

        /**
         * @param radius double
         * @return entitas.Entity
         */
        def replaceBounds(radius:double) : Entity
            var previousComponent = hasBounds ? this.bounds : null
            var c = _boundsComponentPool.length>0? _boundsComponentPool.pop() : new BoundsComponent()
            c.radius = radius
            replaceComponent(Component.Bounds, c) 
            if previousComponent != null
                _boundsComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeBounds() : Entity
            var c = bounds
            removeComponent(Component.Bounds) 
            _boundsComponentPool.push(c)
            return this


        /** Entity: Bullet methods*/

        /** @type boolean */
        prop isBullet : bool
            get
                return hasComponent(Component.Bullet)
            set
                if value
                    addComponent(Component.Bullet, _bulletComponent)
                else
                    removeComponent(Component.Bullet)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setBullet(value : bool) : Entity
            isBullet = value
            return this


        /** Entity: ColorTween methods*/

        /** @type ColorTween */
        prop colorTween : ColorTweenComponent
            get
                return (ColorTweenComponent)getComponent(Component.ColorTween)

        /** @type boolean */
        prop hasColorTween : bool
            get
                return hasComponent(Component.ColorTween)
 
        def clearColorTweenComponentPool()
            _colorTweenComponentPool.clear()

        /**
         * @param redMin double
         * @param redMax double
         * @param redSpeed double
         * @param greenMin double
         * @param greenMax double
         * @param greenSpeed double
         * @param blueMin double
         * @param blueMax double
         * @param blueSpeed double
         * @param alphaMin double
         * @param alphaMax double
         * @param alphaSpeed double
         * @param redAnimate bool
         * @param greenAnimate bool
         * @param blueAnimate bool
         * @param alphaAnimate bool
         * @param repeat bool
         * @return entitas.Entity
         */
        def addColorTween(redMin:double,redMax:double,redSpeed:double,greenMin:double,greenMax:double,greenSpeed:double,blueMin:double,blueMax:double,blueSpeed:double,alphaMin:double,alphaMax:double,alphaSpeed:double,redAnimate:bool,greenAnimate:bool,blueAnimate:bool,alphaAnimate:bool,repeat:bool) : Entity
            var c = _colorTweenComponentPool.length > 0 ? _colorTweenComponentPool.pop() : new ColorTweenComponent()
            c.redMin = redMin
            c.redMax = redMax
            c.redSpeed = redSpeed
            c.greenMin = greenMin
            c.greenMax = greenMax
            c.greenSpeed = greenSpeed
            c.blueMin = blueMin
            c.blueMax = blueMax
            c.blueSpeed = blueSpeed
            c.alphaMin = alphaMin
            c.alphaMax = alphaMax
            c.alphaSpeed = alphaSpeed
            c.redAnimate = redAnimate
            c.greenAnimate = greenAnimate
            c.blueAnimate = blueAnimate
            c.alphaAnimate = alphaAnimate
            c.repeat = repeat
            addComponent(Component.ColorTween, c)
            return this

        /**
         * @param redMin double
         * @param redMax double
         * @param redSpeed double
         * @param greenMin double
         * @param greenMax double
         * @param greenSpeed double
         * @param blueMin double
         * @param blueMax double
         * @param blueSpeed double
         * @param alphaMin double
         * @param alphaMax double
         * @param alphaSpeed double
         * @param redAnimate bool
         * @param greenAnimate bool
         * @param blueAnimate bool
         * @param alphaAnimate bool
         * @param repeat bool
         * @return entitas.Entity
         */
        def replaceColorTween(redMin:double,redMax:double,redSpeed:double,greenMin:double,greenMax:double,greenSpeed:double,blueMin:double,blueMax:double,blueSpeed:double,alphaMin:double,alphaMax:double,alphaSpeed:double,redAnimate:bool,greenAnimate:bool,blueAnimate:bool,alphaAnimate:bool,repeat:bool) : Entity
            var previousComponent = hasColorTween ? this.colorTween : null
            var c = _colorTweenComponentPool.length>0? _colorTweenComponentPool.pop() : new ColorTweenComponent()
            c.redMin = redMin
            c.redMax = redMax
            c.redSpeed = redSpeed
            c.greenMin = greenMin
            c.greenMax = greenMax
            c.greenSpeed = greenSpeed
            c.blueMin = blueMin
            c.blueMax = blueMax
            c.blueSpeed = blueSpeed
            c.alphaMin = alphaMin
            c.alphaMax = alphaMax
            c.alphaSpeed = alphaSpeed
            c.redAnimate = redAnimate
            c.greenAnimate = greenAnimate
            c.blueAnimate = blueAnimate
            c.alphaAnimate = alphaAnimate
            c.repeat = repeat
            replaceComponent(Component.ColorTween, c) 
            if previousComponent != null
                _colorTweenComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeColorTween() : Entity
            var c = colorTween
            removeComponent(Component.ColorTween) 
            _colorTweenComponentPool.push(c)
            return this


        /** Entity: Destroy methods*/

        /** @type boolean */
        prop isDestroy : bool
            get
                return hasComponent(Component.Destroy)
            set
                if value
                    addComponent(Component.Destroy, _destroyComponent)
                else
                    removeComponent(Component.Destroy)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setDestroy(value : bool) : Entity
            isDestroy = value
            return this


        /** Entity: Enemy methods*/

        /** @type boolean */
        prop isEnemy : bool
            get
                return hasComponent(Component.Enemy)
            set
                if value
                    addComponent(Component.Enemy, _enemyComponent)
                else
                    removeComponent(Component.Enemy)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setEnemy(value : bool) : Entity
            isEnemy = value
            return this


        /** Entity: Expires methods*/

        /** @type Expires */
        prop expires : ExpiresComponent
            get
                return (ExpiresComponent)getComponent(Component.Expires)

        /** @type boolean */
        prop hasExpires : bool
            get
                return hasComponent(Component.Expires)
 
        def clearExpiresComponentPool()
            _expiresComponentPool.clear()

        /**
         * @param delay double
         * @return entitas.Entity
         */
        def addExpires(delay:double) : Entity
            var c = _expiresComponentPool.length > 0 ? _expiresComponentPool.pop() : new ExpiresComponent()
            c.delay = delay
            addComponent(Component.Expires, c)
            return this

        /**
         * @param delay double
         * @return entitas.Entity
         */
        def replaceExpires(delay:double) : Entity
            var previousComponent = hasExpires ? this.expires : null
            var c = _expiresComponentPool.length>0? _expiresComponentPool.pop() : new ExpiresComponent()
            c.delay = delay
            replaceComponent(Component.Expires, c) 
            if previousComponent != null
                _expiresComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeExpires() : Entity
            var c = expires
            removeComponent(Component.Expires) 
            _expiresComponentPool.push(c)
            return this


        /** Entity: Firing methods*/

        /** @type boolean */
        prop isFiring : bool
            get
                return hasComponent(Component.Firing)
            set
                if value
                    addComponent(Component.Firing, _firingComponent)
                else
                    removeComponent(Component.Firing)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setFiring(value : bool) : Entity
            isFiring = value
            return this


        /** Entity: Health methods*/

        /** @type Health */
        prop health : HealthComponent
            get
                return (HealthComponent)getComponent(Component.Health)

        /** @type boolean */
        prop hasHealth : bool
            get
                return hasComponent(Component.Health)
 
        def clearHealthComponentPool()
            _healthComponentPool.clear()

        /**
         * @param health double
         * @param maximumHealth double
         * @return entitas.Entity
         */
        def addHealth(health:double,maximumHealth:double) : Entity
            var c = _healthComponentPool.length > 0 ? _healthComponentPool.pop() : new HealthComponent()
            c.health = health
            c.maximumHealth = maximumHealth
            addComponent(Component.Health, c)
            return this

        /**
         * @param health double
         * @param maximumHealth double
         * @return entitas.Entity
         */
        def replaceHealth(health:double,maximumHealth:double) : Entity
            var previousComponent = hasHealth ? this.health : null
            var c = _healthComponentPool.length>0? _healthComponentPool.pop() : new HealthComponent()
            c.health = health
            c.maximumHealth = maximumHealth
            replaceComponent(Component.Health, c) 
            if previousComponent != null
                _healthComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeHealth() : Entity
            var c = health
            removeComponent(Component.Health) 
            _healthComponentPool.push(c)
            return this


        /** Entity: Layer methods*/

        /** @type Layer */
        prop layer : LayerComponent
            get
                return (LayerComponent)getComponent(Component.Layer)

        /** @type boolean */
        prop hasLayer : bool
            get
                return hasComponent(Component.Layer)
 
        def clearLayerComponentPool()
            _layerComponentPool.clear()

        /**
         * @param ordinal int
         * @return entitas.Entity
         */
        def addLayer(ordinal:int) : Entity
            var c = _layerComponentPool.length > 0 ? _layerComponentPool.pop() : new LayerComponent()
            c.ordinal = ordinal
            addComponent(Component.Layer, c)
            return this

        /**
         * @param ordinal int
         * @return entitas.Entity
         */
        def replaceLayer(ordinal:int) : Entity
            var previousComponent = hasLayer ? this.layer : null
            var c = _layerComponentPool.length>0? _layerComponentPool.pop() : new LayerComponent()
            c.ordinal = ordinal
            replaceComponent(Component.Layer, c) 
            if previousComponent != null
                _layerComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeLayer() : Entity
            var c = layer
            removeComponent(Component.Layer) 
            _layerComponentPool.push(c)
            return this


        /** Entity: Life methods*/

        /** @type Life */
        prop life : LifeComponent
            get
                return (LifeComponent)getComponent(Component.Life)

        /** @type boolean */
        prop hasLife : bool
            get
                return hasComponent(Component.Life)
 
        def clearLifeComponentPool()
            _lifeComponentPool.clear()

        /**
         * @param count int
         * @return entitas.Entity
         */
        def addLife(count:int) : Entity
            var c = _lifeComponentPool.length > 0 ? _lifeComponentPool.pop() : new LifeComponent()
            c.count = count
            addComponent(Component.Life, c)
            return this

        /**
         * @param count int
         * @return entitas.Entity
         */
        def replaceLife(count:int) : Entity
            var previousComponent = hasLife ? this.life : null
            var c = _lifeComponentPool.length>0? _lifeComponentPool.pop() : new LifeComponent()
            c.count = count
            replaceComponent(Component.Life, c) 
            if previousComponent != null
                _lifeComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeLife() : Entity
            var c = life
            removeComponent(Component.Life) 
            _lifeComponentPool.push(c)
            return this


        /** Entity: Mine methods*/

        /** @type boolean */
        prop isMine : bool
            get
                return hasComponent(Component.Mine)
            set
                if value
                    addComponent(Component.Mine, _mineComponent)
                else
                    removeComponent(Component.Mine)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setMine(value : bool) : Entity
            isMine = value
            return this


        /** Entity: Mouse methods*/

        /** @type Mouse */
        prop mouse : MouseComponent
            get
                return (MouseComponent)getComponent(Component.Mouse)

        /** @type boolean */
        prop hasMouse : bool
            get
                return hasComponent(Component.Mouse)
 
        def clearMouseComponentPool()
            _mouseComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addMouse(x:double,y:double) : Entity
            var c = _mouseComponentPool.length > 0 ? _mouseComponentPool.pop() : new MouseComponent()
            c.x = x
            c.y = y
            addComponent(Component.Mouse, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replaceMouse(x:double,y:double) : Entity
            var previousComponent = hasMouse ? this.mouse : null
            var c = _mouseComponentPool.length>0? _mouseComponentPool.pop() : new MouseComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Mouse, c) 
            if previousComponent != null
                _mouseComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeMouse() : Entity
            var c = mouse
            removeComponent(Component.Mouse) 
            _mouseComponentPool.push(c)
            return this


        /** Entity: Player methods*/

        /** @type boolean */
        prop isPlayer : bool
            get
                return hasComponent(Component.Player)
            set
                if value
                    addComponent(Component.Player, _playerComponent)
                else
                    removeComponent(Component.Player)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setPlayer(value : bool) : Entity
            isPlayer = value
            return this


        /** Entity: Position methods*/

        /** @type Position */
        prop position : PositionComponent
            get
                return (PositionComponent)getComponent(Component.Position)

        /** @type boolean */
        prop hasPosition : bool
            get
                return hasComponent(Component.Position)
 
        def clearPositionComponentPool()
            _positionComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addPosition(x:double,y:double) : Entity
            var c = _positionComponentPool.length > 0 ? _positionComponentPool.pop() : new PositionComponent()
            c.x = x
            c.y = y
            addComponent(Component.Position, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replacePosition(x:double,y:double) : Entity
            var previousComponent = hasPosition ? this.position : null
            var c = _positionComponentPool.length>0? _positionComponentPool.pop() : new PositionComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Position, c) 
            if previousComponent != null
                _positionComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removePosition() : Entity
            var c = position
            removeComponent(Component.Position) 
            _positionComponentPool.push(c)
            return this


        /** Entity: Resource methods*/

        /** @type Resource */
        prop resource : ResourceComponent
            get
                return (ResourceComponent)getComponent(Component.Resource)

        /** @type boolean */
        prop hasResource : bool
            get
                return hasComponent(Component.Resource)
 
        def clearResourceComponentPool()
            _resourceComponentPool.clear()

        /**
         * @param path string
         * @param sprite Object
         * @param bgd bool
         * @return entitas.Entity
         */
        def addResource(path:string,sprite:Object?,bgd:bool) : Entity
            var c = _resourceComponentPool.length > 0 ? _resourceComponentPool.pop() : new ResourceComponent()
            c.path = path
            c.sprite = sprite
            c.bgd = bgd
            addComponent(Component.Resource, c)
            return this

        /**
         * @param path string
         * @param sprite Object
         * @param bgd bool
         * @return entitas.Entity
         */
        def replaceResource(path:string,sprite:Object?,bgd:bool) : Entity
            var previousComponent = hasResource ? this.resource : null
            var c = _resourceComponentPool.length>0? _resourceComponentPool.pop() : new ResourceComponent()
            c.path = path
            c.sprite = sprite
            c.bgd = bgd
            replaceComponent(Component.Resource, c) 
            if previousComponent != null
                _resourceComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeResource() : Entity
            var c = resource
            removeComponent(Component.Resource) 
            _resourceComponentPool.push(c)
            return this


        /** Entity: ScaleTween methods*/

        /** @type ScaleTween */
        prop scaleTween : ScaleTweenComponent
            get
                return (ScaleTweenComponent)getComponent(Component.ScaleTween)

        /** @type boolean */
        prop hasScaleTween : bool
            get
                return hasComponent(Component.ScaleTween)
 
        def clearScaleTweenComponentPool()
            _scaleTweenComponentPool.clear()

        /**
         * @param min double
         * @param max double
         * @param speed double
         * @param repeat bool
         * @param active bool
         * @return entitas.Entity
         */
        def addScaleTween(min:double,max:double,speed:double,repeat:bool,active:bool) : Entity
            var c = _scaleTweenComponentPool.length > 0 ? _scaleTweenComponentPool.pop() : new ScaleTweenComponent()
            c.min = min
            c.max = max
            c.speed = speed
            c.repeat = repeat
            c.active = active
            addComponent(Component.ScaleTween, c)
            return this

        /**
         * @param min double
         * @param max double
         * @param speed double
         * @param repeat bool
         * @param active bool
         * @return entitas.Entity
         */
        def replaceScaleTween(min:double,max:double,speed:double,repeat:bool,active:bool) : Entity
            var previousComponent = hasScaleTween ? this.scaleTween : null
            var c = _scaleTweenComponentPool.length>0? _scaleTweenComponentPool.pop() : new ScaleTweenComponent()
            c.min = min
            c.max = max
            c.speed = speed
            c.repeat = repeat
            c.active = active
            replaceComponent(Component.ScaleTween, c) 
            if previousComponent != null
                _scaleTweenComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScaleTween() : Entity
            var c = scaleTween
            removeComponent(Component.ScaleTween) 
            _scaleTweenComponentPool.push(c)
            return this


        /** Entity: Scale methods*/

        /** @type Scale */
        prop scale : ScaleComponent
            get
                return (ScaleComponent)getComponent(Component.Scale)

        /** @type boolean */
        prop hasScale : bool
            get
                return hasComponent(Component.Scale)
 
        def clearScaleComponentPool()
            _scaleComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addScale(x:double,y:double) : Entity
            var c = _scaleComponentPool.length > 0 ? _scaleComponentPool.pop() : new ScaleComponent()
            c.x = x
            c.y = y
            addComponent(Component.Scale, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replaceScale(x:double,y:double) : Entity
            var previousComponent = hasScale ? this.scale : null
            var c = _scaleComponentPool.length>0? _scaleComponentPool.pop() : new ScaleComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Scale, c) 
            if previousComponent != null
                _scaleComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScale() : Entity
            var c = scale
            removeComponent(Component.Scale) 
            _scaleComponentPool.push(c)
            return this


        /** Entity: Score methods*/

        /** @type Score */
        prop score : ScoreComponent
            get
                return (ScoreComponent)getComponent(Component.Score)

        /** @type boolean */
        prop hasScore : bool
            get
                return hasComponent(Component.Score)
 
        def clearScoreComponentPool()
            _scoreComponentPool.clear()

        /**
         * @param value double
         * @return entitas.Entity
         */
        def addScore(value:double) : Entity
            var c = _scoreComponentPool.length > 0 ? _scoreComponentPool.pop() : new ScoreComponent()
            c.value = value
            addComponent(Component.Score, c)
            return this

        /**
         * @param value double
         * @return entitas.Entity
         */
        def replaceScore(value:double) : Entity
            var previousComponent = hasScore ? this.score : null
            var c = _scoreComponentPool.length>0? _scoreComponentPool.pop() : new ScoreComponent()
            c.value = value
            replaceComponent(Component.Score, c) 
            if previousComponent != null
                _scoreComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScore() : Entity
            var c = score
            removeComponent(Component.Score) 
            _scoreComponentPool.push(c)
            return this


        /** Entity: SoundEffect methods*/

        /** @type SoundEffect */
        prop soundEffect : SoundEffectComponent
            get
                return (SoundEffectComponent)getComponent(Component.SoundEffect)

        /** @type boolean */
        prop hasSoundEffect : bool
            get
                return hasComponent(Component.SoundEffect)
 
        def clearSoundEffectComponentPool()
            _soundEffectComponentPool.clear()

        /**
         * @param effect int
         * @return entitas.Entity
         */
        def addSoundEffect(effect:int) : Entity
            var c = _soundEffectComponentPool.length > 0 ? _soundEffectComponentPool.pop() : new SoundEffectComponent()
            c.effect = effect
            addComponent(Component.SoundEffect, c)
            return this

        /**
         * @param effect int
         * @return entitas.Entity
         */
        def replaceSoundEffect(effect:int) : Entity
            var previousComponent = hasSoundEffect ? this.soundEffect : null
            var c = _soundEffectComponentPool.length>0? _soundEffectComponentPool.pop() : new SoundEffectComponent()
            c.effect = effect
            replaceComponent(Component.SoundEffect, c) 
            if previousComponent != null
                _soundEffectComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeSoundEffect() : Entity
            var c = soundEffect
            removeComponent(Component.SoundEffect) 
            _soundEffectComponentPool.push(c)
            return this


        /** Entity: Tint methods*/

        /** @type Tint */
        prop tint : TintComponent
            get
                return (TintComponent)getComponent(Component.Tint)

        /** @type boolean */
        prop hasTint : bool
            get
                return hasComponent(Component.Tint)
 
        def clearTintComponentPool()
            _tintComponentPool.clear()

        /**
         * @param r int
         * @param g int
         * @param b int
         * @param a int
         * @return entitas.Entity
         */
        def addTint(r:int,g:int,b:int,a:int) : Entity
            var c = _tintComponentPool.length > 0 ? _tintComponentPool.pop() : new TintComponent()
            c.r = r
            c.g = g
            c.b = b
            c.a = a
            addComponent(Component.Tint, c)
            return this

        /**
         * @param r int
         * @param g int
         * @param b int
         * @param a int
         * @return entitas.Entity
         */
        def replaceTint(r:int,g:int,b:int,a:int) : Entity
            var previousComponent = hasTint ? this.tint : null
            var c = _tintComponentPool.length>0? _tintComponentPool.pop() : new TintComponent()
            c.r = r
            c.g = g
            c.b = b
            c.a = a
            replaceComponent(Component.Tint, c) 
            if previousComponent != null
                _tintComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeTint() : Entity
            var c = tint
            removeComponent(Component.Tint) 
            _tintComponentPool.push(c)
            return this


        /** Entity: Velocity methods*/

        /** @type Velocity */
        prop velocity : VelocityComponent
            get
                return (VelocityComponent)getComponent(Component.Velocity)

        /** @type boolean */
        prop hasVelocity : bool
            get
                return hasComponent(Component.Velocity)
 
        def clearVelocityComponentPool()
            _velocityComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addVelocity(x:double,y:double) : Entity
            var c = _velocityComponentPool.length > 0 ? _velocityComponentPool.pop() : new VelocityComponent()
            c.x = x
            c.y = y
            addComponent(Component.Velocity, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replaceVelocity(x:double,y:double) : Entity
            var previousComponent = hasVelocity ? this.velocity : null
            var c = _velocityComponentPool.length>0? _velocityComponentPool.pop() : new VelocityComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Velocity, c) 
            if previousComponent != null
                _velocityComponentPool.push(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeVelocity() : Entity
            var c = velocity
            removeComponent(Component.Velocity) 
            _velocityComponentPool.push(c)
            return this


        /** @type entitas.utils.Bag<Bounds> */
        _boundsComponentPool : Bag of BoundsComponent

        /** @type Bullet */
        _bulletComponent : BulletComponent
        /** @type entitas.utils.Bag<ColorTween> */
        _colorTweenComponentPool : Bag of ColorTweenComponent

        /** @type Destroy */
        _destroyComponent : DestroyComponent

        /** @type Enemy */
        _enemyComponent : EnemyComponent
        /** @type entitas.utils.Bag<Expires> */
        _expiresComponentPool : Bag of ExpiresComponent

        /** @type Firing */
        _firingComponent : FiringComponent
        /** @type entitas.utils.Bag<Health> */
        _healthComponentPool : Bag of HealthComponent
        /** @type entitas.utils.Bag<Layer> */
        _layerComponentPool : Bag of LayerComponent
        /** @type entitas.utils.Bag<Life> */
        _lifeComponentPool : Bag of LifeComponent

        /** @type Mine */
        _mineComponent : MineComponent
        /** @type entitas.utils.Bag<Mouse> */
        _mouseComponentPool : Bag of MouseComponent

        /** @type Player */
        _playerComponent : PlayerComponent
        /** @type entitas.utils.Bag<Position> */
        _positionComponentPool : Bag of PositionComponent
        /** @type entitas.utils.Bag<Resource> */
        _resourceComponentPool : Bag of ResourceComponent
        /** @type entitas.utils.Bag<ScaleTween> */
        _scaleTweenComponentPool : Bag of ScaleTweenComponent
        /** @type entitas.utils.Bag<Scale> */
        _scaleComponentPool : Bag of ScaleComponent
        /** @type entitas.utils.Bag<Score> */
        _scoreComponentPool : Bag of ScoreComponent
        /** @type entitas.utils.Bag<SoundEffect> */
        _soundEffectComponentPool : Bag of SoundEffectComponent
        /** @type entitas.utils.Bag<Tint> */
        _tintComponentPool : Bag of TintComponent
        /** @type entitas.utils.Bag<Velocity> */
        _velocityComponentPool : Bag of VelocityComponent
