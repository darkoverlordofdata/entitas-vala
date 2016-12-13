namespace Entitas {
  public class EntityPool : Object {
    public static Entity[,] db;

    public static void createDb(int components, int count) {

        db = new Entity[components, count];
    }

  }
}
