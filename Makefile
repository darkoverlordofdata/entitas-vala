# build shmupwarz

#
# Application NAME
#
NAME=shmupwarz

# vala compiler
VC=valac --vapidir=./src/vapi

# --vapidir=./sdl2-vapi
# mingw for windows executables
CC=--cc=x86_64-w64-mingw32-gcc
# vala flags
# -g debug
# -w
FLAGS=--disable-warnings
DEBUG=-g --save-temps

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

TST=test/Vunny.gs test/TestFX.gs

APP=src/ShmupWarz/generated/GeneratedComponents.gs \
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
# source code for this project
#
SOURCES=src/DarkMatter.vala \
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
		src/ShmupWarz/generated/Entity.gs \
		src/Entitas/Group.gs \
		src/ShmupWarz/generated/Matching.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/ShmupWarz/generated/World.gs \
		src/Bosco/Timer.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs

BASELIB=src/DarkMatter.vala \
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
		src/Entitas/CoreTest.vala \
		src/Entitas/Group.gs \
		src/Entitas/Matcher.gs \
		src/Entitas/WorldBase.gs \
		src/Bosco/Timer.gs \
		src/Bosco/Sprite.gs \
		src/Bosco/AbstractGame.gs


#
# c libs needed for the gcc compiler
#
CLIBS=-X -lm -X -lSDL2_image -X -lSDL2_ttf -X -lSDL2_mixer -X -lSDL2_gfx

#
# c flags needed for the gcc compiler
#
CFLAGS=-X -w 

#-X -I/usr/include/SDL2

#
# Folder for finished binaries
#
BIN=build
.PHONY: build

SRC=src


#
# Resouce location
#
RESOURCES=res

#
# Entitas generated files
#
# gen/%.gs: entitas.json
# 	npm run entitas


default: $(BIN)/$(NAME)
$(BIN)/$(NAME): $(SOURCES) $(APP)
	-mkdir -p $(BIN)
	cp -R --force $(RESOURCES) $(BIN)
	$(VC) $(FLAGS) $(LIBS) $(CLIBS) $(CFLAGS) $(SOURCES) $(APP) -o $(BIN)/$(NAME)



test: test/$(BIN)/test
test/$(BIN)/test: $(BASELIB) $(TST)
	-mkdir -p test/$(BIN)
	cp -R --force $(RESOURCES) test/$(BIN)
	$(VC) $(FLAGS) $(LIBS) $(CLIBS) $(CFLAGS) $(BASELIB) $(TST) -o test/$(BIN)/test
	test/$(BIN)/test
	rm --force test/$(BIN)/test

run: $(BIN)/$(NAME)
	cd $(BIN)
	$(BIN)/$(NAME)
	cd ..

clean:
	rm -rf $(BIN)/*.o
	rm -rf $(SRC)/*.c
	rm -rf $(SRC)/game/*.c
	rm -rf $(SRC)/game/systems/*.c
	rm -rf $(SRC)/Bosco/*.c
	rm -rf $(SRC)/Bosco/Events/*.c
	rm -rf $(SRC)/Bosco/ECS/*.c
	rm -rf $(SRC)/Bosco/Interfaces/*.c

debug: debug/$(BIN)/$(NAME)
debug/$(BIN)/$(NAME): $(SOURCES) $(TST)
	-mkdir -p $(BIN)
	cp -R --force $(RESOURCES) $(BIN)
	$(VC) $(DEBUG) $(LIBS) $(CLIBS) $(CFLAGS) $(SOURCES) $(APP) -o $(BIN)/$(NAME)


	