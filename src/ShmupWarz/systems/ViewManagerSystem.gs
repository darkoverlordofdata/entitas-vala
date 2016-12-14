[indent=4]
uses
    Bosco
    Entitas

namespace ShmupWarz 


    class ViewManagerSystem : Object implements  IExecuteSystem,  IInitializeSystem, ISystem
        _game : Game
        _world: World

        construct(game : Game)
            _game = game



        def execute()


        def initialize


