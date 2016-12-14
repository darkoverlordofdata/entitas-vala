/**
 *
 * Vala doesn't allow partial classes or extensions methods,
 * so I'm faking it. These concrete classes will be replaced
 * with the implementation generated by entitas-cli.
 *
 * Extension methods work to provide functionality to an existing
 * type without having to create a derived type. So we push the functionality
 * down into a base class, and then replace the derived class.
 *
 */
[indent=4]
namespace Entitas
    const POOL_SIZE : int = 128

    class Entity : EntityBase

        construct(componentsEnum : array of string, totalComponents : int=32)
            super(componentsEnum, totalComponents)