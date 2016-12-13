# build shmupwarz

#
# Application NAME
#
NAME=shmupwarz

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
# source code for this project
#
SOURCES=src/Object.vala \
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
		src/Entitas/Group.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/Entitas/World.vala \
		src/Bosco/Timer.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs \
		src/ShmupWarz/Entity.gs \
		src/ShmupWarz/Components.gs \
		src/ShmupWarz/Entities.gs \
		src/ShmupWarz/systems/DestroySystem.gs \
		src/ShmupWarz/systems/ColorTweenSystem.gs \
		src/ShmupWarz/systems/ExpiringSystem.gs \
		src/ShmupWarz/systems/MovementSystem.gs \
		src/ShmupWarz/systems/RenderPositionSystem.gs \
		src/ShmupWarz/systems/ViewManagerSystem.gs \
		src/ShmupWarz/systems/PlayerInputSystem.gs \
		src/ShmupWarz/systems/EntitySpawningTimerSystem.gs \
		src/ShmupWarz/systems/CollisionSystem.gs \
		src/ShmupWarz/systems/RemoveOffscreenShipsSystem.gs \
		src/ShmupWarz/systems/ScaleTweenSystem.gs \
		src/ShmupWarz/systems/SoundEffectSystem.gs \
		src/ShmupWarz/systems/HudRenderSystem.gs \
		src/ShmupWarz/Game.gs
#
# tests for this project
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
		src/Entitas/Entity.vala \
		src/Entitas/Group.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/Entitas/World.vala \
		src/Bosco/Timer.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs \
		test/Vunny.gs \
		test/TestFX.gs




default: $(BIN)/$(NAME)
$(BIN)/$(NAME): $(SOURCES) $(APP)
	-mkdir -p $(BIN)
	cp -R --force $(RES) $(BIN)
	$(CC) $(FLAGS) $(LIBS) $(CLIBS) $(CFLAGS) $(SOURCES) -o $(BIN)/$(NAME)


debug: debug/$(BIN)/$(NAME)
debug/$(BIN)/$(NAME): $(SOURCES) $(TST)
	-mkdir -p $(BIN)
	cp -R --force $(RES) $(BIN)
	$(CC) $(DEBUG) $(LIBS) $(CLIBS) $(CFLAGS) $(SOURCES) -o $(BIN)/$(NAME)


test: test/$(BIN)/test
test/$(BIN)/test: $(BASELIB) $(TST)
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
	rm -rf $(SRC)/ShmupWarz/*.c
	rm -rf $(SRC)/ShmupWarz/systems/*.c


	