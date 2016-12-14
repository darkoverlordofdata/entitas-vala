using Entitas;

namespace shmupwarz {


    public class MovementSystem : Object,  ISetWorld,  IExecuteSystem, ISystem {
        Game _game;
        World _world;

        public MovementSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


    }
}