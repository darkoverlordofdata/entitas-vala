using Entitas;

namespace shmupwarz {


    public class EntitySpawningTimerSystem : Object,  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem {
        Game _game;
        World _world;

        public EntitySpawningTimerSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


        public void initialize{}


    }
}