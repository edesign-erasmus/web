# JS Syntax

## Why JavaScript?

Before we jump into JavaScript syntax let's talk briefly about what is JavaScript where it's used and what you can do with it?

JavaScript is scripting language which can be run in web browser.

In previous chapters we talked about HTML and CSS. Mastering these two you can already design and build cool and beautiful web pages. But what if you want to add interactivity to the page?

Think about a web page with a chat feature. After typing your message into text field you push the button and without navigating to next page your message is sent to your friend.

And similarly when your friend answers the message appears on the screen without you desperately pressing the reload button and checking if you have a new message.

The chat even has notification and ding sound! 🔔

Everything described above can be achieved with JavaScript.

<div class="important">

If you want to let users interact with a web page like pushing buttons, draging elements, clicking icons you have to add JavaScript.

</div>

## Syntax

Before you start adding interactivity to your page it's good to get a glance what tools you have in your toolbox. Acutally there aren't too many.

**Variables** are used for storing data. If we create a variable we give it a name and value. Good name is descriptive so we can tell what kind of value is stored into variable just by looking at the name.
By name we can later access the value.
Maybe you already assumed by it's name that we can change the value of variable if needed.     
- [Variables](https://javascript.info/variables) - 👈 article and examples in JavaScript.info 

**Data types** are used in programming to describe for computer what kind of data are we dealing with. Most basic data types are numbers and text. For example. Adding up 2 and 2 as numbers we get 4 as an answer. Adding up 2 and 2 as text we get 22 as correct result. We don't think about data types because our brain can get that from context and we know how to get correct result. For computers we often have to specify it or at least keeping that in mind to avoid logical mistakes.
- [Data types](https://javascript.info/types) - 👈 article and examples in JavaScript.info 

**Comparisons and conditional statements** In coding a lot of times you have to give computer instructions based on comparison results. For example after user inserted username and password program has to check if these are correct and this user exists in the system. If username and password are correct then system can show respective information and allow specific access if not system notifies user aout the problem and restricts access.
Those kind of sitations where you as a coder have to describe diffenrent choices to computer come up a lot in programming.
- [Comparisons](https://javascript.info/comparison) - 👈 article and examples in JavaScript.info 
- [Conditions](https://javascript.info/ifelse) - 👈 article and examples in JavaScript.info 

**Loops** are used in coding for repeating steps and instructions. Using loops is where the real beauty of programming comes in - with that we can really start to automate manual work.
Think about web shop and thousand of items there. To display different items we can describe a template and design one item with name, picture, description, price and so on. Then we loop over items from database and use the template. 
- [Loops](https://javascript.info/while-for) - 👈 article and examples in JavaScript.info 

**Complex data structures** like arrays, lists, objects and different collections come into play if we want to store more than one bit of data. We already talked about variables and data types. Think about our previous example with web shop. We need a collection of variables to store our shopping items.
Actually every item has diffrent properties and there are collection of items. And to display our items we use array items and loop over array.
- [Arrays](https://javascript.info/array) - 👈 article and examples in JavaScript.info 
- [Array methods](https://javascript.info/array-methods) - 👈 article and examples in JavaScript.info 
- [Objects](https://javascript.info/object-basics) - 👈 article and examples in JavaScript.info 


**Functions** are also useful for automating our work. In programming there come up cases where we use same set of commands in different part of code. Same time we don't want double our manual work - that's the whole point of coding. We can describe a little part of our code in a function, give it a name and call a function from different places when needed.
Second point with functions is that when it happnes that we need to make a change in that particular part of code we don't have to do it in many places but just on place where function is defined.
Functions help also structure our code and make it more readable.
- [Functions](https://javascript.info/function-basics) - 👈 article and examples in JavaScript.info 


The best way to get to know JavaScript is complete one of the many interactive courses online.

I recommend freeCodeCamp [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) curriculum and from there please complete **Basic JavaScript** chapter.

Of course I encourage you to dig deeper and also check out other chapters.