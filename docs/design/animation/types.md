# Web animation types

While this chapter covers a little bit of basic animation principles and concepts, it is not about creating animated content (videos), but mostly how to animate UI elements with ```code```.   

But first, let's try to define web animations with a help of Dan Parry:

>In short, web animation is the visualization of change — something that starts in one state and ends in another state. The animation is how it gets from one to the other and how you handle states in between (the “interpolated states”) is what is important. 
> <br>*[Guide to making web animations UX friendly](https://dev.to/codesphere/guide-to-making-web-animations-ux-friendly-469d)*





<style>
    .animated-span {

        padding:0.25ch 1ch;
        animation: animate-bg 2s infinite alternate;
        transform: rotate(45deg);
    }
    @keyframes animate-bg {
        0% {
            background-color: hotpink;
            border-radius: 0.1ch;
        }
        100%{
            background-color: khaki;
            border-radius: 1.5ch;
        }
    }
</style>

As you probably know by now, the visual properties of UI ```<elements>``` are defined by **CSS Styles**. If you **change any of those properties** (i.e. background-color and border-radius) **over time**, you've got yourself <span class="animated-span">**an&nbsp;animation**</span>


## Animating with CSS

There are two types – ***CSS-transitions*** and ***CSS-animations***. 
- *Transition* is usually a change from **one *state* to another**, like when an object becomes active or passive when it is clicked for example. 
- *CSS-animation* is **keyframe based** change over time, that can stop at the end or go back to beginnig, repeat itself for a couple of times or go on forever, change direction like a pendulum etc.

### Transitions
    
📌 Here is a [fantastic interactive guide of **css-transitions**](https://www.joshwcomeau.com/animation/css-transitions/) by Josh W Comeau. You'll learn about transitions and so much more from this article!


### Animations

📌 Here is another [fantastic interactive guide of **css-animation**](https://www.joshwcomeau.com/animation/keyframe-animations/) by... surprise! Josh W Comeau again!


#### Tools and utilities

There are some useful tools, that may help you to generate CSS code for nice looking animations

- [Animista](https://animista.net/)
- [Magic Effects](https://www.minimamente.com/project/magic/)
- [Bounce](http://bouncejs.com/)
- [Keyframes.app](https://keyframes.app/animate/)
- [Vivify](http://vivify.mkcreative.cz/)
- [Animated Background Generator](https://wweb.dev/resources/animated-css-background-generator/)







## Animating with JavaScript

Sometimes you need more control over your animations: whether you build complex timelines of different animations or have advanced interactivity. This is where Javascript comes handy. You may, of course, write your own control functions with "vanilla" Javascript and [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API), but it is often easier to use JS libraries &nbsp; tools that nice people have made for us. Here are some of them: 

### JS animation frameworks

- [Anime.js](https://animejs.com/)
- [GSAP](https://greensock.com/gsap/)
- [Mo.js](https://mojs.github.io/)
- [Ani.js](https://anijs.github.io/)
- [Kute.js](https://thednp.github.io/kute.js/)
- [Lottie](http://airbnb.io/lottie/#/)

Each of those libraries have their own learning curve and sometimes slightly different purpose, so to get more familiar with them will be your task. And again – one thing is for sure – there will be a dozen of exciting new tools available by next month and a month after that and after that, so never quit looking and learning! 

Find out more: [Speckyboy: 25 Free CSS Animation Libraries, Tools & Generators](https://speckyboy.com/css-animation/)




