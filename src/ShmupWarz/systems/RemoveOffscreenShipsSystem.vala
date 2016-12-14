using Entitas;

namespace ShmupWarz {


    public class RemoveOffscreenShipsSystem : Object,  ISetWorld,  IExecuteSystem, ISystem {
        Game _game;
        World _world;

        public RemoveOffscreenShipsSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


    }
}