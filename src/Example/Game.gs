/**
 * Game.gs
 *
 * 
 *
 */
[indent=4]
uses Bosco
uses Entitas
uses SDL
uses SDLTTF

init
    var game = new ShmupWarz.Game()
    game.Run()

namespace ShmupWarz

    const SCREEN_WIDTH:int = 800
    const SCREEN_HEIGHT:int = 600

    /** 
    * Start the application
    */

    class Game : AbstractGame

        world : World
        player : PlayerInputSystem
        arial: Font

        construct()
            super()
            name = "Shmup Warz"
            width = SCREEN_WIDTH
            height = SCREEN_HEIGHT
            running = true

        /**
        *  OnLoop
        *
        * Process the game engine
        */
        def override Update(delta: double)
            world.execute()

        /**
        *  OnInit
        *
        * load assets
        */
        def override Initialize():bool
            if super.Initialize()
                arial = new Font("res/fonts/TitanOne-Regular.ttf", 20)
                if arial == null
                    print "Failed to load font! SDL Error: %s", SDL.get_error()


                world = new World(components)
                world.add(new MovementSystem(this))
                world.add(player = new PlayerInputSystem(this))
                world.add(new SoundEffectSystem(this))
                world.add(new CollisionSystem(this))
                world.add(new ExpiringSystem(this))
                world.add(new EntitySpawningTimerSystem(this))
                world.add(new ColorTweenSystem(this))
                world.add(new ScaleTweenSystem(this))
                world.add(new RemoveOffscreenShipsSystem(this))
                world.add(new ViewManagerSystem(this))
                world.add(new RenderPositionSystem(this))
                world.add(new HealthRenderSystem(this))
                world.add(new HudRenderSystem(this))
                world.add(new DestroySystem(this))
                world.initialize()

                createBackground()
                createPlayer()

            return true

        /**
        *  OnEvent
        *
        * Handle events
        */
        def override Events(e:SDL.Event)

            if keys[Input.Keycode.ESCAPE] == 1
                running = false

            if e.type == SDL.EventType.QUIT
                running = false

            if e.type != EventType.MOUSEMOTION && e.type != EventType.MOUSEBUTTONDOWN && e.type != EventType.MOUSEBUTTONUP
                return
            /* Mouse Events*/
            x:int = 0
            y:int = 0
            Input.Cursor.get_state(ref x, ref y)
            player.onMouseEvent(e.type, x, y)

        /**
        *  OnCleanup
        *
        * release assets
        */
        def override Dispose()
            SDL.quit()
            SDLImage.quit()


