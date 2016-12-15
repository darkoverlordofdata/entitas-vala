# build Example

#
# Application NAME
#
NAME=Example

# vala compiler
CC=valac --vapidir=./src/vapi
# vala flags
# -g debug
# -w
FLAGS=--disable-warnings
DEBUG=-g --save-temps
CFLAGS=-X -w 
#
# locationks
SRC=src
RES=res
BIN=build
.PHONY: build

#
# c libs needed for the gcc compiler
#
CLIBS=-X -lm -X -lSDL2_image -X -lSDL2_ttf -X -lSDL2_mixer -X -lSDL2_gfx
#
# vala core libs
# reference the vala libs at /usr/share/vala/vapi
#
LIBS=--pkg glib-2.0 \
		--pkg gobject-2.0 \
		--pkg gee-0.8 \
		--pkg sdl2 \
		--pkg sdl2-gfx \
		--pkg sdl2-image \
		--pkg sdl2-ttf \
		--pkg sdl2-mixer \
		--pkg gio-2.0 
#
# Build Entitas with generated code Example
#
EXAMPLE=src/Object.vala \
		src/Entitas/Utils/UUID.vala \
		src/Entitas/Utils/Bag.gs \
		src/Entitas/Exceptions.gs \
		src/Entitas/Events/EntityReleased.gs \
		src/Entitas/Events/ComponentReplaced.gs \
		src/Entitas/Events/EntityChanged.gs \
		src/Entitas/Events/WorldChanged.gs \
		src/Entitas/Events/GroupsChanged.gs \
		src/Entitas/Events/GroupChanged.gs \
		src/Entitas/Events/GroupUpdated.gs \
		src/Entitas/Interfaces/IComponent.vala \
		src/Entitas/Interfaces/IMatcher.vala \
		src/Entitas/Interfaces/ISystem.vala \
		src/Entitas/EntityBase.gs \
		src/Entitas/Group.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/Entitas/World.gs \
		src/Bosco/Color.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs \
		src/Example/Entities.gs \
		src/Example/Components.gs \
		src/Example/Systems/DestroySystem.gs \
		src/Example/Systems/ColorTweenSystem.gs \
		src/Example/Systems/ExpiringSystem.gs \
		src/Example/Systems/MovementSystem.gs \
		src/Example/Systems/RenderPositionSystem.gs \
		src/Example/Systems/ViewManagerSystem.gs \
		src/Example/Systems/PlayerInputSystem.gs \
		src/Example/Systems/HealthRenderSystem.gs \
		src/Example/Systems/EntitySpawningTimerSystem.gs \
		src/Example/Systems/CollisionSystem.gs \
		src/Example/Systems/RemoveOffscreenShipsSystem.gs \
		src/Example/Systems/ScaleTweenSystem.gs \
		src/Example/Systems/SoundEffectSystem.gs \
		src/Example/Systems/HudRenderSystem.gs \
		src/Example/Game.gs

#
# Build Entitas with Tests
#
TESTING=src/Object.vala \
		src/Entitas/Utils/UUID.vala \
		src/Entitas/Utils/Bag.gs \
		src/Entitas/Exceptions.gs \
		src/Entitas/Events/EntityReleased.gs \
		src/Entitas/Events/ComponentReplaced.gs \
		src/Entitas/Events/EntityChanged.gs \
		src/Entitas/Events/WorldChanged.gs \
		src/Entitas/Events/GroupsChanged.gs \
		src/Entitas/Events/GroupChanged.gs \
		src/Entitas/Events/GroupUpdated.gs \
		src/Entitas/Interfaces/IComponent.vala \
		src/Entitas/Interfaces/ISystem.vala \
		src/Entitas/Interfaces/IMatcher.vala \
		src/Entitas/EntityBase.gs \
		src/Entitas/Entity.gs \
		src/Entitas/Group.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/Entitas/World.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs \
		test/Vunny.gs \
		test/TestFX.gs




default: $(BIN)/$(NAME)
$(BIN)/$(NAME): $(EXAMPLE) 
	-mkdir -p $(BIN)
	cp -R --force $(RES) $(BIN)
	$(CC) $(FLAGS) $(LIBS) $(CLIBS) $(CFLAGS) $(EXAMPLE) -o $(BIN)/$(NAME)


debug: debug/$(BIN)/$(NAME)
debug/$(BIN)/$(NAME): $(EXAMPLE) 
	-mkdir -p $(BIN)
	cp -R --force $(RES) $(BIN)
	$(CC) $(DEBUG) $(LIBS) $(CLIBS) $(CFLAGS) $(EXAMPLE) -o $(BIN)/$(NAME)


test: test/$(BIN)/test
test/$(BIN)/test: $(TESTING)
	-mkdir -p test/$(BIN)
	cp -R --force $(RES) test/$(BIN)
	$(CC) $(FLAGS) $(LIBS) $(CLIBS) $(CFLAGS) $(TESTING) -o test/$(BIN)/test
	test/$(BIN)/test
	rm --force test/$(BIN)/test

run: $(BIN)/$(NAME)
	cd $(BIN)
	$(BIN)/$(NAME)
	cd ..

clean:
	rm -rf $(SRC)/*.c
	rm -rf $(SRC)/Bosco/*.c
	rm -rf $(SRC)/Entitas/*.c
	rm -rf $(SRC)/Entitas/Utils/*.c
	rm -rf $(SRC)/Entitas/Events/*.c
	rm -rf $(SRC)/Entitas/Interfaces/*.c
	rm -rf $(SRC)/Example/*.c
	rm -rf $(SRC)/Example/Systems/*.c


	