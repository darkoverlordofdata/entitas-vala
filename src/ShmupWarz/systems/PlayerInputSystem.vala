using Entitas;

namespace ShmupWarz {


    public class PlayerInputSystem : Object,  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem {
        Game _game;
        World _world;

        public PlayerInputSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


        public void initialize{}


    }
}