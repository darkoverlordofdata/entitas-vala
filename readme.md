# entitas - vala

## alternate version

create libraries

bosco.so / bosco.dll
entitas.so / entitas.dll


vala doesn't allow extension methods. But we can do it sort of like in go,
where the reciever is passed like this:
```
func addBounds(e Entity)(radius double) Entity {...}
```

so this:
```
public Entity addBounds(double radius) {...}
```
becomes this:
```
public Entity addBounds(Entity e, double radius) {...}
```


This means we need a different template, locally defined, to generate the code:
* src/Example/gs.components.liquid
* src/Example/gs.systems.liquid
```
$ entitas generate -p gs -t src/Example
```
