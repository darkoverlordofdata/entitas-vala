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
            initializePools()
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


                world = new World(components
                    ).add(new MovementSystem(this)
                    ).add(player = new PlayerInputSystem(this)
                    ).add(new SoundEffectSystem(this)
                    ).add(new CollisionSystem(this)
                    ).add(new ExpiringSystem(this)
                    ).add(new EntitySpawningTimerSystem(this)
                    ).add(new ColorTweenSystem(this)
                    ).add(new ScaleTweenSystem(this)
                    ).add(new RemoveOffscreenShipsSystem(this)
                    ).add(new ViewManagerSystem(this)
                    ).add(new RenderPositionSystem(this)
                    ).add(new HealthRenderSystem(this)
                    ).add(new HudRenderSystem(this)
                    ).add(new DestroySystem(this)
                    ).initialize()
                
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


