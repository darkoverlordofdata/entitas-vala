/* entitas.vapi generated by valac 0.34.4, do not modify. */

namespace Entitas {
	[CCode (cheader_filename = "entitas.h")]
	public class ComponentReplaced : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnComponentReplaced event);
			public Entitas.OnComponentReplaced event { get; set; }
		}
		public ComponentReplaced ();
		public void add (Entitas.OnComponentReplaced event);
		public void clear ();
		public void dispatch (Entitas.Entity e, int index, Entitas.IComponent component, Entitas.IComponent replacement);
		public void remove (Entitas.OnComponentReplaced event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class Entity : GLib.Object {
		public int db_id;
		public static int db_index;
		public static bool first;
		public int ic;
		public static int incEntities;
		public static int maxEntities;
		public static int size;
		public Entity (string[] componentsEnum, int totalComponents = 32);
		public Entitas.Entity addComponent (int index, Entitas.IComponent component) throws Entitas.EcsException;
		public Entitas.Entity addRef ();
		public void destroy ();
		public unowned Entitas.IComponent getComponent (int index) throws Entitas.EcsException;
		public int[] getComponentIndices ();
		public Entitas.IComponent[] getComponents ();
		public bool hasAnyComponent (int[] indices);
		public bool hasComponent (int index);
		public bool hasComponents (int[] indices);
		public void initialize (string name, string id, int creationIndex);
		public void release () throws Entitas.EcsException;
		public void removeAllComponents ();
		public Entitas.Entity removeComponent (int index) throws Entitas.EcsException;
		public Entitas.Entity replaceComponent (int index, Entitas.IComponent component) throws Entitas.EcsException;
		public string toString ();
		public int creationIndex { get; }
		public string id { get; }
		public bool isEnabled { get; }
		public string name { get; }
		public Entitas.EntityChanged onComponentAdded { get; }
		public Entitas.EntityChanged onComponentRemoved { get; }
		public Entitas.ComponentReplaced onComponentReplaced { get; }
		public Entitas.EntityReleased onEntityReleased { get; }
		public int refCount { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public class EntityChanged : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnEntityChanged event);
			public Entitas.OnEntityChanged event { get; set; }
		}
		public EntityChanged ();
		public void add (Entitas.OnEntityChanged event);
		public void clear ();
		public void dispatch (Entitas.Entity e, int index, Entitas.IComponent component);
		public void remove (Entitas.OnEntityChanged event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class EntityReleased : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnEntityReleased event);
			public Entitas.OnEntityReleased event { get; set; }
		}
		public EntityReleased ();
		public void add (Entitas.OnEntityReleased event);
		public void clear ();
		public void dispatch (Entitas.Entity e);
		public void remove (Entitas.OnEntityReleased event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class Group : GLib.Object {
		public Group (Entitas.IMatcher matcher);
		public void addEntity (Entitas.Entity entity, int index, Entitas.IComponent component);
		public void addEntitySilently (Entitas.Entity entity);
		public bool containsEntity (Entitas.Entity entity);
		public Entitas.Entity[] getEntities ();
		public unowned Entitas.Entity? getSingleEntity () throws Entitas.EcsException;
		public void handleEntity (Entitas.Entity entity, int index, Entitas.IComponent component) throws Entitas.EcsException;
		public void handleEntitySilently (Entitas.Entity entity) throws Entitas.EcsException;
		public void removeEntity (Entitas.Entity entity, int index, Entitas.IComponent component) throws Entitas.EcsException;
		public void removeEntitySilently (Entitas.Entity entity) throws Entitas.EcsException;
		public string toString ();
		public void updateEntity (Entitas.Entity entity, int index, Entitas.IComponent previousComponent, Entitas.IComponent newComponent);
		public int count { get; }
		public Entitas.IMatcher matcher { get; }
		public Entitas.GroupChanged onEntityAdded { get; }
		public Entitas.GroupChanged onEntityRemoved { get; }
		public Entitas.GroupUpdated onEntityUpdated { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public class GroupChanged : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnGroupChanged event);
			public Entitas.OnGroupChanged event { get; set; }
		}
		public GroupChanged ();
		public void add (Entitas.OnGroupChanged event);
		public void clear ();
		public void dispatch (Entitas.Group g, Entitas.Entity e, int i, Entitas.IComponent c);
		public void remove (Entitas.OnGroupChanged event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class GroupUpdated : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnGroupUpdated event);
			public Entitas.OnGroupUpdated event { get; set; }
		}
		public GroupUpdated ();
		public void add (Entitas.OnGroupUpdated event);
		public void clear ();
		public void dispatch (Entitas.Group g, Entitas.Entity e, int i, Entitas.IComponent c, Entitas.IComponent u);
		public void remove (Entitas.OnGroupUpdated event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class GroupsChanged : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnGroupsChanged event);
			public Entitas.OnGroupsChanged event { get; set; }
		}
		public GroupsChanged ();
		public void add (Entitas.OnGroupsChanged event);
		public void clear ();
		public void dispatch (Entitas.World w, Entitas.Group g);
		public void remove (Entitas.OnGroupsChanged event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public class Matcher : GLib.Object, Entitas.IMatcher, Entitas.IAllOfMatcher, Entitas.IAnyOfMatcher, Entitas.INoneOfMatcher {
		public static int uniqueId;
		public Matcher ();
		public static Entitas.IMatcher AllOf (int[] args);
		public static Entitas.IMatcher AnyOf (int[] args);
		public static string componentsToString (int[] indexArray);
		public static int[] distinctIndices (int[] indices);
		public static int[] listToArray (Gee.ArrayList<int> l);
		public static int[] merge (Entitas.IMatcher[] matchers) throws Entitas.EcsException;
		public int[] mergeIndices ();
		public int[] allOfIndices { get; }
		public int[] anyOfIndices { get; }
		public int[] noneOfIndices { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public class World : GLib.Object {
		public World (string[] components, int startCreationIndex = 0);
		public Entitas.World add (Entitas.ISystem system);
		public Entitas.Entity createEntity (string name);
		public void destroyAllEntities () throws Entitas.EcsException;
		public void destroyEntity (Entitas.Entity entity) throws Entitas.EcsException;
		public void execute ();
		public Entitas.Entity[] getEntities (Entitas.IMatcher? matcher = null);
		public Entitas.Group getGroup (Entitas.IMatcher matcher);
		public bool hasEntity (Entitas.Entity entity);
		public Entitas.World initialize ();
		public void onEntityReleased (Entitas.Entity entity);
		public void updateGroupsComponentAddedOrRemoved (Entitas.Entity entity, int index, Entitas.IComponent component);
		public void updateGroupsComponentReplaced (Entitas.Entity entity, int index, Entitas.IComponent previousComponent, Entitas.IComponent newComponent);
		public static string[] components { get; }
		public int componentsCount { get; }
		public int count { get; }
		public static Entitas.World instance { get; }
		public string name { get; }
		public Entitas.WorldChanged onEntityCreated { get; }
		public Entitas.WorldChanged onEntityDestroyed { get; }
		public Entitas.WorldChanged onEntityWillBeDestroyed { get; }
		public Entitas.GroupsChanged onGroupCreated { get; }
		public static GLib.Rand random { get; }
		public int retainedEntitiesCount { get; }
		public int reusableEntitiesCount { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public class WorldChanged : GLib.Object {
		public class Listener : GLib.Object {
			public Listener (Entitas.OnWorldChanged event);
			public Entitas.OnWorldChanged event { get; set; }
		}
		public WorldChanged ();
		public void add (Entitas.OnWorldChanged event);
		public void clear ();
		public void dispatch (Entitas.World w, Entitas.Entity e);
		public void remove (Entitas.OnWorldChanged event);
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IAllOfMatcher : GLib.Object {
		public abstract Entitas.IAnyOfMatcher anyOf (int[] args);
		public abstract Entitas.INoneOfMatcher noneOf (int[] args);
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IAnyOfMatcher : GLib.Object {
		public abstract Entitas.INoneOfMatcher noneOf (int[] args);
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IComponent : GLib.Object {
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface ICompoundMatcher : GLib.Object {
		public abstract int[] allOfIndices { get; }
		public abstract int[] anyOfIndices { get; }
		public abstract int[] noneOfIndices { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IExecuteSystem : GLib.Object {
		public abstract void execute ();
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IInitializeSystem : GLib.Object {
		public abstract void initialize ();
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface IMatcher : GLib.Object {
		public abstract bool matches (Entitas.Entity entity);
		public abstract string toString ();
		public abstract string id { get; }
		public abstract int[] indices { get; }
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface INoneOfMatcher : GLib.Object {
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface ISetWorld : GLib.Object {
		public abstract void setWorld (Entitas.World world);
	}
	[CCode (cheader_filename = "entitas.h")]
	public interface ISystem : GLib.Object {
	}
	[CCode (cheader_filename = "entitas.h")]
	public enum GroupEventType {
		OnEntityAdded,
		OnEntityRemoved,
		OnEntityAddedOrRemoved
	}
	[CCode (cheader_filename = "entitas.h")]
	public errordomain EcsException {
		EntityIsNotEnabled,
		EntityAlreadyHasComponent,
		EntityDoesNotHaveComponent,
		EntityIsAlreadyReleased,
		SingleEntity,
		Matcher,
		WorldDoesNotContainEntity
	}
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnComponentReplaced (Entitas.Entity e, int index, Entitas.IComponent component, Entitas.IComponent replacement);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnEntityChanged (Entitas.Entity e, int index, Entitas.IComponent component);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnEntityReleased (Entitas.Entity e);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnGroupChanged (Entitas.Group g, Entitas.Entity e, int i, Entitas.IComponent c);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnGroupUpdated (Entitas.Group g, Entitas.Entity e, int i, Entitas.IComponent c, Entitas.IComponent u);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnGroupsChanged (Entitas.World w, Entitas.Group g);
	[CCode (cheader_filename = "entitas.h")]
	public delegate void OnWorldChanged (Entitas.World w, Entitas.Entity e);
	[CCode (cheader_filename = "entitas.h")]
	public const int POOL_SIZE;
}
