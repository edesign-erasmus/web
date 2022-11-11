# Using images in Web

## Responsive and adaptive graphic assets

### Responsive images

Imagine a website that is displayed on huge desktop monitor and a small smartphone. If there should be a full-width image, which size is optimized for the phone, it will appear stretched and blurry on big screens. We can use big image and show it on both devices, but its "weight" is huge and it makes no point to download all that unnecessary image data to the phone. 

It means that we should use **different size files for different devices**. As we talk about **raster images**, of course. **Vector (SVG) is scalable**. In this section we talk about, how.


- [CSS-Tricks: A Guide to the Responsive Images Syntax in HTML](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/)
- [Dev.to: A comprehensive guide to responsive Images (picture, srcset, source etc)](https://dev.to/jsco/a-comprehensive-guide-to-responsive-images-picture-srcset-source-etc-4adj)
- [Dev.to: Responsive Images - A Reference Guide from A to Z](https://dev.to/manu4543/responsive-images-a-reference-guide-from-a-to-z-30aa)


#### About compression and optimization


- [Dev.to: Optimizing images for the web - an in-depth guide](https://dev.to/prototyp/optimizing-images-for-the-web-an-in-depth-guide-4j7d) - includes a list of free image optimizing services
- [Insanelab: Why WEBP Is the Rockstar of Image Formats for Web Designers](https://insanelab.com/blog/web-development/webp-web-design-vs-jpeg-gif-png/)




#### Media delivery services

There are services avalable, that host, deliver, generate and optimize your images. They usually have free plans that suite for personal sites, blogs, portfolios etc.

- https://www.cloudflare.com/
- https://www.cloudimage.io/
- https://cloudinary.com/
- https://imagekit.io/
- search for more...




### Responsive backgrounds

Sometimes you want to use an image as background of a page or section of page. Read, how to make responsive backgrounds:

- with [media queries](https://www.juangarcia.design/blog/responsive-background-images-with-image-set/#the-problem)
- with [image-set()](https://css-tricks.com/using-performant-next-gen-images-in-css-with-image-set/) <mark>⚠ check [the support](https://caniuse.com/css-image-set) before using in production!</mark>

⚠ *<mark>Content queries</mark> should be also covered when wider browser support becomes available. Maybe its not that important here, but in the main CSS part of the course?*






## Icons / icon fonts

There are other type of graphics in user interfaces than images - functional graphics or **icons** that help users better to understand or navigate the UI. Creating icons is a separate topic and will be covered in the illustration section. But we don't always have to create all the icons by ourselves. Instead we can **use [existing icon packs](https://icones.netlify.app/collection/radix-icons) or fonts**. In this section we will covers that.


### How to use

There are [several ways](https://fershad.com/writing/web-icons-in-2021/) to use icons. 

- each icon as separate image
- reusing predefined images / image sprites / svg symbols
- icon fonts: some icon sets can be used as fonts

There has been a debate about which way is the best. You can read about it in [this article](https://www.lambdatest.com/blog/its-2019-lets-end-the-debate-on-icon-fonts-vs-svg-icons/).

Here you can find a nice [collection of icon fonts](https://bootstrapious.com/p/icon-fonts)

You can also **generate your own fonts**:
- [Icomoon.io](https://icomoon.io/)
- [Fontello.com](https://fontello.com/)
- [Glyphter.com](https://glyphter.com/)
- Also, [read this guide](https://medium.com/@adamshriki/the-right-process-of-creating-maintaining-icons-font-in-2019-c6829368464a)

🛑 Although icon fonts are very easy to use, there are many downsides. Read [Stop using icon fonts](https://www.irigoyen.dev/blog/2021/02/17/stop-using-icon-fonts/)



#### Example of icons as reusable svg symbols



<iframe height="360" style="width: 100%;" scrolling="no" title="edesign-icons__svg-use" src="https://codepen.io/ooker/embed/oNZmRQm?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ooker/pen/oNZmRQm'>edesign-icons__svg-use</a> by Oliver Maaker
  (<a href='https://codepen.io/ooker'>@ooker</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


#### Example of icons as svg fonts

<iframe height="360" style="width: 100%;" scrolling="no" title="edesign-icons__svg-fonts" src="https://codepen.io/ooker/embed/KKWOdLN?height=265&theme-id=dark&defaultTab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ooker/pen/KKWOdLN'>edesign-icons__svg-fonts</a> by Oliver Maaker
  (<a href='https://codepen.io/ooker'>@ooker</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



