[indent=4]
uses
    SDL
    Bosco
    Entitas

namespace ShmupWarz

    class ViewManagerSystem : Object implements ISystem, IInitializeSystem, ISetWorld

        _renderer : unowned Video.Renderer
        _sprites : GenericArray of Sprite
        _group : Group
        _world : World
        _game : Game

        construct(game : Game)
            _game = game
            _renderer = _game.renderer

        def setWorld(world : World)
            _world = world

        /**
        * Listen for resources to be added
        * and then load them in from the file
        */
        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Resource}))
            _group.onEntityAdded.add(onEntityAdded)
            _game.sprites = new GenericArray of Sprite
            _sprites = _game.sprites


        /**
        *  OnEntityAdded event:
        */
        def onEntityAdded(g : Group, e : Entity, ix : int, c : IComponent)

            scale : ScaleComponent
            layer : LayerComponent
            ordinal : int = 0

            var res = (ResourceComponent)c
            res.sprite = Sprite.fromFile(_renderer, res.path)
            var sprite = (Sprite)res.sprite
            if sprite == null
                print "Failed to load %s", res.path
                return

            if e.hasScale
                sprite.scale.x = e.scale.x
                sprite.scale.y = e.scale.y

            if e.hasLayer
                sprite.layer = e.layer.ordinal
                ordinal = e.layer.ordinal

            if e.hasTint
                sprite.color.r = (uint8)e.tint.r
                sprite.color.g = (uint8)e.tint.g
                sprite.color.b = (uint8)e.tint.b

            if res.bgd
                sprite.centered = false

            /**
            * Insert sprite in layer order
            */
            if _sprites.length == 0
                _sprites.add(sprite)
            else
                for var i=0 to (_sprites.length-1)
                    if ordinal <= _sprites[i].layer
                        _sprites.insert(i, sprite)
                        return
                _sprites.add(sprite)



