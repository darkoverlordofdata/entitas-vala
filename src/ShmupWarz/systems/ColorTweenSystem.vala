using Entitas;

namespace ShmupWarz {


    public class ColorTweenSystem : Object,  ISetWorld,  IExecuteSystem, ISystem {
        Game _game;
        World _world;

        public ColorTweenSystem(Game game) {
            _game = game;
        }



        public void setWorld(World world) {
            _world = world;
        }


        public void execute(){}


    }
}