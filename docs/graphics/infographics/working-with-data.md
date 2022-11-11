# Infographics

## An example

What if I tell you, that Estonia is a very small country compared to, let's say, Austria and Germany. As of 2020, it's population is about 1 326 535 people. Austria has 9 006 398 and Germany 83 783 942. 

Ok, now, can you tell me how big is Germanys population compared to Estonia, based on these numbers alone? 

You'll probably have to make a quick calculation and maybe imagine a tape measure or a ruler, where you compare 84 cm to 1.3 cm and you'll get an approximate idea. But what about Austria? Do you even remeber its population? OK, you can look it up from above, to be sure and you'll have to do once again the calculations and the tape measure trick. 

But what if we want to compare not only the population of three countries but of all the EU members? What if there is more different data, than just the population, that we want to measure and compare? 

#### This is where **infographics** come in handy.


<!-- An illustration is often just an add-on to the content &ndash; something that helps bring life to text, add emotion etc. It is not very important, what exact colors you use or how big exactly the elements are compared to each other, as long as the illustrations overall look remains pleasant and proffessional. But sometimes this isn't the case &ndash; sometimes illustrations are based on **real data**. That kind of images are called infographics.  -->

> According to the Oxford English Dictionary, an infographic (or information graphic) is “a visual representation of information or data”.


Look at the image below. 👇 Now, when the exact same amount of data as above is **presented visually**, it takes just a few seconds to understand and **compare** those cumbersome numbers.



<svg width="200" height="150" viewBox="0 0 200 150" style="width:100%; height:auto;" class="ed-elevated-05 ed-rounded-05">
    <g transform="translate(0, 120)">
        <g v-for="(v,i) in [{'name':'Estonia','pop':1326535,'col':'hsl(0,40%,60%)'}, {'name':'Austria','pop':9006398,'col':'hsl(120,40%,60%)'}, {'name':'Germany','pop':83783942,'col':'hsl(240,40%,60%)'}]" :transform="translate(map(i,0,2,20,150), 0)">
            <rect width="30" :height="map(v.pop,0,90000000,0,100)"  :fill="v.col" transform="scale(1, -1)" />
            <text y="10" x="15" font-size="7" fill="gray" text-anchor="middle">{{v.name}}</text>
            <text :y="map(v.pop,0,90000000,0,-100)-3" x="15" font-size="5" fill="gray" text-anchor="middle">{{v.pop}}</text>
        </g>
    </g>
    <text x="12" y="20" font-size="7" width="150">Population of</text>
    <text x="12" y="30" font-size="7" width="150">Estonia, Austria and Germany (2020)</text>
</svg>

*Source: [World-o-meter](https://www.worldometers.info/population/countries-in-europe-by-population/) - it is also a good habit to show the origin of information*


Above is an example of just one very simple dataset. Complex infographics can be much more than this, combining data visualisation, illustration, color theory, pictography, typography and so on.

## So, what is infographics?

- [What is an Infographic?](https://venngage.com/blog/what-is-an-infographic/)
- [15 Stunning Data Visualizations (And What You Can Learn From Them)](https://towardsdatascience.com/15-stunning-data-visualizations-and-what-you-can-learn-from-them-fc5b78f21fb8)
- [Stanford: Data Visualization and the Modern Imagination](https://exhibits.stanford.edu/dataviz/)
- [Infographic about History of Infographics](https://history.infowetrust.com/)

<div class="video-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5Zg-C8AAIGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


### Some cool examples

Be not afraid - not all the infographics are boring bars. Here is a list of cool examples for inspiration

- In journalism
    - [Collection 1](https://www.flickr.com/photos/ffranchi/albums/72157594391287046)
    - [Collection 2](https://www.pinterest.com/search/pins/?q=newspaper%20infographics)
- Interactive - this is it! 👇
    - [How Music Taste Evolved](https://pudding.cool/2017/03/music-history/)
    - [Making It Big](https://pudding.cool/2017/01/making-it-big/)
    - [How Generative Music Works](https://teropa.info/loop/#/itsgonnarain)
    - [Omnisci - a lot of great demos](https://www.omnisci.com/demos) 📌
    - [All the Radio Stations in The World](http://radio.garden/)
- Magic Seeing
    - [Bartosz Ciechanowski is visualizing unvisible processes](https://ciechanow.ski/) 📌
    - [The Atlantic Slave Trade in Two Minutes](http://www.slate.com/articles/life/the_history_of_american_slavery/2015/06/animated_interactive_of_the_history_of_the_atlantic_slave_trade.html?via=gdpr-consent)
    - [Wind](https://earth.nullschool.net/#current/wind/surface/level/orthographic=38.45,49.95,599)
    - [Nuclear Detonations](https://vimeo.com/135580602)
    - [The Deep Sea](https://neal.fun/deep-sea/)
    - [If The World Were 100 People](https://www.youtube.com/watch?v=QFrqTFRy-LU)
    - [Visualising music](https://www.youtube.com/watch?v=kQOc96Bq4Ug)
- Varia
    - [Physical Visualisations](http://dataphys.org/list/gallery/)


## About data

### Personal data

So, you need some data to create infograpics. A simple set of data can be something as simple as uncle Bobs weekly consumption of bewerages as shown below 👇. 

<script setup>
import { ref } from 'vue'
const dataset = ref([
    {'name':'Mon',       'coffee':5, 'beer':0},
    {'name':'Tue',      'coffee':2, 'beer':0},
    {'name':'Wed',    'coffee':2, 'beer':3},
    {'name':'Thu',     'coffee':2, 'beer':0},
    {'name':'Fri',       'coffee':3, 'beer':6},
    {'name':'Sat',     'coffee':1, 'beer':4},
    {'name':'Sun',       'coffee':2, 'beer':1}
])
</script>

<table>
    <thead>
        <tr>
            <th>Day</th>
            <th>Coffee</th>
            <th>Beer</th>
        </tr>
    </thead>
    <tr v-for="day in dataset">
        <td>{{day.name}}</td>
        <td>{{day.coffee}}</td>
        <td>{{day.beer}}</td>
    </tr>
</table>


<svg width="200" height="150" viewBox="0 0 200 150" style="width:100%; height:auto;" class="ed-elevated-05 ed-rounded-05">
    <g transform="translate(0, 120)">
        <g v-for="(d,i) in dataset" :transform="translate(map(i,0,5,20,145), 0)">
            <rect width="10" :height="map(d.coffee,0,10,0,100)"  :fill="hsl(30,100,20)" transform="scale(1, -1)" />
            <rect width="10" :height="map(d.beer,0,10,0,100)"  :fill="hsl(40,70,50)" :transform="translate(0, -map(d.coffee,0,10,0,100)-map(d.beer,0,10,0,100))" transform="scale(1, -1)" />
            <text y="10" x="5" font-size="5" fill="gray" text-anchor="middle">{{d.name}}</text>
            <text :y="map(d.coffee,0,10,0,-100)+7" x="5" font-size="5" fill="white" text-anchor="middle">{{d.coffee}}</text>
            <text :y="map(d.coffee,0,10,0,-100)-3" x="5" font-size="5" fill="coal" text-anchor="middle">{{d.beer}}</text>
        </g>
        <!-- <path :d="linepath([{x: 0, y: 0}, {x: 10, y: 10}])" stroke="red" /> -->
    </g>
    <g :transform="translate(12,16)">
        <text font-size="7">Uncle Bobs coffee and beer consumption. Week 24.</text>
        <g :transform="translate(0, 6)">
            <rect width="6" height="6" :fill="hsl(40,70,50)" />
            <text font-size="5" x="8" y="5">Beer</text>
        </g>
        <g :transform="translate(0, 13)">
            <rect width="6" height="6" :fill="hsl(30,100,20)" />
            <text font-size="5" x="8" y="5">Coffee</text>
        </g>
    </g>
</svg>

So we can collect **personal data** and make different graphs based on this information. Here are some examples of personal infographics.

- [Dear Data](http://www.dear-data.com/theproject)
- [Birth Certificates](https://www.dezeen.com/2013/04/19/birth-certificates-by-iwant-for-iconeye-magazine/)
- [30 projects](http://visualoop.com/blog/2636/30-examples-of-the-art-of-mapping-personal-habits)

If you have a smart watch or use any sports tracking device / app, you probably collect data about your health and moving or sleeping habits. 

But sometimes you want to use data, that is not just about yourself. Luckily there are different public data sources, you can use.




### Public data sources

 Here is a short list of a few we can use. As always - search for more 🕵️‍♀️


#### International

- [Google data search](https://datasetsearch.research.google.com/)
- [Eurostat](https://ec.europa.eu/eurostat/)
- [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) 
- [Datahub.io collections](https://datahub.io/collections)
- [Google Trends](https://trends.google.com/trends/)

#### Estonian

- [Estonian open data](https://opendata.riik.ee/)
- [Statistics Estonia](https://andmed.stat.ee/et/stat)
- [Andmebaasid ja arhiivid](https://akadeemiake.ee/juhendmaterjalid/andmebaasid-ja-arhiivid/)



### Types of data formats

- [json](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [csv](https://en.wikipedia.org/wiki/Comma-separated_values)
- [xml](https://en.wikipedia.org/wiki/XML)


### Data over APIs

<div class="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OVvTv9Hy91Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

- [22 APIs Every Data Scientist Should Know](https://www.springboard.com/library/data-science/top-apis-for-data-scientists/)





## Types of data visualisations

On this page we kept things simple and you saw two examples of boring bar charts. But actually **there is a lot of differant ways to visualize same data**.

Let's get familar with them.

- [DataViz Project](https://datavizproject.com/)
- [The Data Visualisation Catalogue](https://datavizcatalogue.com/)
- [The Python Graph Gallery](https://www.python-graph-gallery.com/)

Which one to choose? It depends on **what you want to say**. What is important? What is the point **you** want to make? Because it is important [how data is interprated](https://hbr.org/2015/03/what-to-do-when-people-draw-different-conclusions-from-the-same-data).




## Tools

There are some tools and applications that help us to visualise data. Some of them you already know.

#### Generate simple charts

- [MS Office Excel](https://www.youtube.com/watch?v=TfkNkrKMF5c)
- [Google Sheets](https://www.youtube.com/watch?v=IFX9e9SqGlw)

#### Online

- [RAW Graphs](https://app.rawgraphs.io/)
- [Chart Studio](https://chart-studio.plotly.com/)
- [Canva Graph Maker](https://www.canva.com/graphs/)
- [Flourish Studio](https://flourish.studio/)

#### Advanced software

- [Tableau Public](https://public.tableau.com/en-us/s/)
- [Orange](https://orangedatamining.com/)
- [Google Data Studio](https://datastudio.google.com/)
- [MS Power BI](https://powerbi.microsoft.com/en-us/)



#### Code: Javascript and Python

- [List of JS Libraries](https://coolinfographics.com/javascript)
- [D3.js - Data Driven Documents](https://d3js.org/)
