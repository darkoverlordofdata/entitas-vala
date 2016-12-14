using Entitas;

namespace shmupwarz {


    public class CollisionSystem : Object,  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem {
        Game _game;
        World _world;

        public CollisionSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


        public void initialize{}


    }
}