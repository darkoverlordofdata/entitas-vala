/**
 * Entitas Generated Components for shmupwarz
 *
 * do not edit this file
 */
[indent=4]
uses Bosco
uses Entitas

namespace Entitas

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
        "VelocityComponent"
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
        TotalComponents



    class BoundsComponent : Object implements IComponent
        radius:double

    class BulletComponent : Object implements IComponent
        bullet : bool = true

    class ColorTweenComponent : Object implements IComponent
        redMin:double
        redMax:double
        redSpeed:double
        greenMin:double
        greenMax:double
        greenSpeed:double
        blueMin:double
        blueMax:double
        blueSpeed:double
        alphaMin:double
        alphaMax:double
        alphaSpeed:double
        redAnimate:bool
        greenAnimate:bool
        blueAnimate:bool
        alphaAnimate:bool
        repeat:bool

    class DestroyComponent : Object implements IComponent
        destroy : bool = true

    class EnemyComponent : Object implements IComponent
        enemy : bool = true

    class ExpiresComponent : Object implements IComponent
        delay:double

    class FiringComponent : Object implements IComponent
        firing : bool = true

    class HealthComponent : Object implements IComponent
        health:double
        maximumHealth:double

    class LayerComponent : Object implements IComponent
        ordinal:int

    class LifeComponent : Object implements IComponent
        count:int

    class MineComponent : Object implements IComponent
        mine : bool = true

    class MouseComponent : Object implements IComponent
        x:double
        y:double

    class PlayerComponent : Object implements IComponent
        player : bool = true

    class PositionComponent : Object implements IComponent
        x:double
        y:double

    class ResourceComponent : Object implements IComponent
        path:string
        sprite:Sprite?
        bgd:bool=false

    class ScaleTweenComponent : Object implements IComponent
        min:double
        max:double
        speed:double
        repeat:bool
        active:bool

    class ScaleComponent : Object implements IComponent
        x:double
        y:double

    class ScoreComponent : Object implements IComponent
        value:double

    class SoundEffectComponent : Object implements IComponent
        effect:int

    class TintComponent : Object implements IComponent
        r:int
        g:int
        b:int
        a:int

    class VelocityComponent : Object implements IComponent
        x:double
        y:double


