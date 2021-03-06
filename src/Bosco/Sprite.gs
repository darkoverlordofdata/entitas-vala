/**
 * Sprite.gs
 *
 * Wrapper for SDLImage surface
 *
 * Copyright 2016 Dark Overlord of Data
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the he MIT License (MIT).
 *
 * Author: 
 *      bruce davidson
 */
[indent=4]

uses SDL
uses SDLImage
uses SDLTTF
uses SDLGraphics

namespace Bosco

    struct Scale
        x : double
        y : double

    class Sprite : Object
        uniqueId : static int = 0

        texture : Video.Texture
        width : int
        height : int
        x : int
        y : int
        scale : Scale = Scale() {
            x = 1.0,
            y = 1.0
        }
        color : Video.Color = Video.Color() {
            r = 255,
            g = 255,
            b = 255,
            a = 255            
        }
        centered : bool = true
        layer : int = 0
        id : int = ++uniqueId

        def static fromRenderedText(renderer : Video.Renderer, font : SDLTTF.Font, text : string, color : Video.Color) : Sprite?
            var mt = new Sprite()
            var textSurface = font.render(text, color)

            if textSurface == null
                print "Unable to render text surface!"
                return null
            else
                mt.texture = Video.Texture.create_from_surface(renderer, textSurface)
                if mt.texture == null
                    print "Unable to create texture from rendered text! SDL Error: %s", SDL.get_error()
                    return null
                else
                    mt.width = textSurface.w
                    mt.height = textSurface.h
            return mt

        def setText(renderer : Video.Renderer, font : SDLTTF.Font, text : string, color : Video.Color)
            var textSurface = font.render(text, color)

            if textSurface == null
                print "Unable to render text surface"

            else
                this.texture = Video.Texture.create_from_surface(renderer, textSurface)
                if this.texture == null
                    print "Unable to create texture from rendered text! SDL Error: %s", SDL.get_error()
                else
                    this.width = textSurface.w
                    this.height = textSurface.h


        def static fromFile(renderer : Video.Renderer, path : string) : Sprite?
            var mt = new Sprite()
            var loadedSurface = SDLImage.load(path)

            if loadedSurface == null
                print "Unable to load image! SDL Error: %s", SDL.get_error()
                return null
             else
                loadedSurface.set_colorkey(1, loadedSurface.format.map_rgb(0, 0xFF, 0xFF))

                mt.texture = Video.Texture.create_from_surface(renderer, loadedSurface)
                mt.texture.set_blend_mode(Video.BlendMode.BLEND)
                if mt.texture == null
                    print "Unable to create texture from %s! SDL Error: %s", path, SDL.get_error()
                 else
                    mt.width = loadedSurface.w
                    mt.height = loadedSurface.h
            return mt


        def render(renderer : Video.Renderer, x : int, y : int, clip : Video.Rect? = null)
            var w = (int)((clip == null ? width : clip.w) * scale.x)
            var h = (int)((clip == null ? height : clip.h) * scale.y)

            x = centered ? x-(w/2) : x
            y = centered ? y-(h/2) : y

            texture.set_color_mod(color.r, color.g, color.b)

            renderer.copy(texture, null, {x, y, w, h})


