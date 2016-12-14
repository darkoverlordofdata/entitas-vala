using Entitas;

namespace shmupwarz {


    public class ViewManagerSystem : Object,  IExecuteSystem,  IInitializeSystem, ISystem {
        Game _game;
        World _world;

        public ViewManagerSystem(Game game) {
            _game = game;
        }



        public void execute(){}


        public void initialize{}


    }
}