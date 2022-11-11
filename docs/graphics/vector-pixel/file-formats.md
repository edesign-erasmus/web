# Graphic file formats for web apps

You should know from your previous study about vector and pixel graphics and what distinguishes them. Then you also know, that there is a lot of [different type file formats](https://en.wikipedia.org/wiki/Image_file_formats), like JPG, TIFF, PSD, PDF, SVG, EPS, RAW and so on. But not all the formats are suitable for web developement.
 

**Here we will focus on the file formats, you can use in web developement ie what work in browsers.**


::: tip Quick reminder
- **Raster *(aka Pixel or Bitmap)* graphics** is made of pixels - tiny squares that have a certain color (and sometimes transparency). Like digital photos from your phone, for example. It is hard to enlarge pixel images, because we just do not have the data. 
- **Vector graphics** is drawn with mathematic point coordinates, curves and equations, which can be recalculated each time. Thats's why vector graphics can be easily resized or even manipulated in real time. 

[Read this](https://vector-conversions.com/vectorizing/raster_vs_vector.html) if you need more information.

:::


::: warning NOTE: canvas
Should we mention ```<canvas>``` here as an option to show and manipulate raster images on browser?
:::

::: warning NOTE: video
Where are we talking about ```<video>```?
:::







## Exporting graphic assets

- From [Photoshop](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html)
- From [Illustrator](https://vectortwist.com/asset-export-illustrator/)
- From [Figma](https://help.figma.com/hc/en-us/articles/360040028114-Guide-to-exports-in-Figma) 
- From After Effects
    - As [animated GIF](https://www.schoolofmotion.com/blog/gif-in-after-effects)
    - Using [Lottie](https://lottiefiles.com/plugins/after-effects)
- etc






## Raster graphic formats

- **[JPG](https://en.wikipedia.org/wiki/JPEG)**
- **[PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)**
    - Supports transparency
        - [Adobe online tool](https://www.adobe.com/photoshop/online/transparent-background.html)
        - [With Photoshop](https://www.youtube.com/watch?v=P7aNejNEiPE)
        - [Remove BG](https://www.remove.bg/)
    - Animated PNGs (**APNG**)
        - Rendering from After Effects
        - [EzGif APNG converter](https://ezgif.com/apng-maker)
    - Optimizing PNG
        - [TinyPNG](https://tinypng.com/)
- **[GIF](https://en.wikipedia.org/wiki/GIF)** - mostly for animations
    - [Animated GIFs](https://www.schoolofmotion.com/blog/gif-in-after-effects)
- **[WebP](https://developers.google.com/speed/webp)**  
    - **Supports animation**
    - **Supports transparency**
    - [Better quality/size ratio](https://insanelab.com/blog/web-development/webp-web-design-vs-jpeg-gif-png/) than JPG or PNG
    - Helper tools and utilities - although there is pretty good browser support, WebP is not very widely supported by the mainstream design programs. That's why we need some extra tools or utilities to generate the WebP files. 
        - [Google converters](https://developers.google.com/speed/webp/docs/precompiled)
        - [Photoshop plugin](https://developers.google.com/speed/webp/docs/webpshop)
        - [CloudConvert](https://cloudconvert.com/webp-converter)
        - [EzGif WebP converter](https://ezgif.com/webp-maker)
- **[AVIF](https://jakearchibald.com/2020/avif-has-landed/)**
    - **Supports animation**
    - **Supports transparency**
    - Often **best quality/size ratio**
    - 🛑 Watch out for browser support - use fallbacks!
    - Helper tools and utilities 
        - [Avif.io](https://avif.io/)
        - [Squoos.app](https://squoosh.app/)
- When to choose each format
    - 📌[JPG vs PNG vs GIF vs WebP](https://wpmudev.com/blog/best-image-formats-png-vs-jpg-svg-gif-webp/)

⚠ *<mark>JPEG XL, JPEG XR</mark> etc formats should be considered to cover later, when/if wider browser support becomes available* 








## Vector format (SVG)

There are a bunch of different raster formats for web, but only one vector - the SVG

- 📌[All you have to know about SVG](https://css-tricks.com/lodge/svg/) (and probably more)

::: tip NOTE
There is only one link, so you may think that there isn't much to talk about. But wait, just click and see!
:::


## Conclusion

As you can read from [this Dev.to article](https://dev.to/jsco/understanding-image-formats-on-the-web-4op8), these are the basic rules, which format to choose:

- Use **SVG for logos/icons/illustrations** etc or anything you want to **animate**
- Use **WEBP for everything else** with either JPG or PNG as a fallback
- Use **JPEG** for Photos (as a **fallback for webp**)
- Use **PNG** for logos/illustrations etc **when no SVG** is available (as a **fallback for webp**)




