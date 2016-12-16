enum Components
    PositionComponent
    MovementComponent
    ImageComponent

class PositionComponent  : DarkMatter implements IComponent
    x:double
    y:double
    z:double

class MovementComponent  : DarkMatter implements  IComponent
    x:double
    y:double
    z:double

class ImageComponent  : DarkMatter implements IComponent
    path:string

class RenderingSystem : DarkMatter implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
    world:World

    def setWorld(world:World)
        this.world = world

    def execute()
        pass

    def initialize()
        pass

class MovementSystem : DarkMatter implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
    world:World

    def setWorld(world:World)
        this.world = world

    def execute()
        pass

    def initialize()
        pass

namespace Frodo
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

    /** @type ColorTween */
    def getColorTween(e: Entity) : ColorTweenComponent
            return (ColorTweenComponent)e.getComponent(Component.ColorTween)

