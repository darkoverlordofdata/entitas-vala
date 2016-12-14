using Entitas;

namespace ShmupWarz {


    public class SoundEffectSystem : Object,  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem {
        Game _game;
        World _world;

        public SoundEffectSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


        public void initialize{}


    }
}