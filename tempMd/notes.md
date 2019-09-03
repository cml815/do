## Daily log

08 14 
:goals
1. Service pages
2. Dent in case study layout

### Notes / Scribbles

# img cheatsheet
img on page

./images/name-of-img.jpg

bg?

../images/name-of-img.jpg

https://loremipsum.io/21-of-the-best-placeholder-image-generators/

The background property is a shorthand that sets the following properties in a single declaration: background-clip, 
background-color, 
background-image, 
background-origin, 
background-position, 
background-repeat, 
background-size, and 
background-attachment.

# images

  background: url("../images/grant-red-crop.jpg") no-repeat;

background - https://www.webfx.com/blog/web-design/background-css-shorthand/

.bg-stripe {
  background: linear-gradient( 
  90deg,
  #fff,
  #fff 20px,
  #000 20px,
  #000 40px);
  height: 200px;
  width: 200px;
}

https://www.termsandcondiitionssample.com/live.php?token=K2XgeKn6AEDVT5wPeMPBFrxXoVJgQ2AM

System fonts:

font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Oxygen,sans-serif,Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji;

masonry overlay 

.m-container {
  position: relative;
  width: 100%;
}

.m-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255,1);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.m-container:hover .m-overlay {
  height: 80%;
}

.m-overlay h4, .m-overlay p {
  padding: 1em;
}

<!--
<section>
  <div class="inner">
    <div class="flex-c">
      <div class="case-meta">
        <h6 class="fine-print">Client</h6>
        <p>Various companies</p>
      </div>
      <div class="case-meta">
        <ul>
          <li><h6 class="fine-print">Team</h6></li>  
          <li><p>Caroline Leopold</p></li>
          <li><p>Rich Garella</p></li>
          <li><p>Dana Henry</p></li>
          <li><p>Ed Apffel</p></li>
        </ul>
      </div>
       <ul class="case-meta flex-c--col">
      {{#each tag}}
      <li><p>{{this}} / </p></li>
      {{/each}}
    </ul> 
  </div>
  </div>
</section>

-->

Sprites

.item-2 {
  background: url("../images/css_sprites.png") -50px 0;
}

.item-3 {
  background: url("../images/css_sprites.png") -100px 0;
}

.item-4 {
  background: url("../images/css_sprites.png") -200px 0;
}

.item-5 {
  background: url("../images/css_sprites.png") -500px 0;
}

.bg-test_abstract {
  width: 900px; height: 752px;
  background: url('css_sprites.png') -10px -10px;
}

.set-height {
  height: 60vh;
  background: url("../images/test-abstract.jpg") no-repeat;
  background-position: top 10px right 50px;
}

</section>
        <ul class="tag-container">
            {{#each tag}}
            <li>{{this}}</li>
            {{/each}}
        </ul> 
    </div>
</section>

   <p>Videographer Jeff Grant turned the camera on himself in 2009, launching JeffGrantMedia on YouTube. His channel evolved with the growing YouTube community as well as his busy personal and professional life. During that era, pioneers of YouTube filmed skits, newsy segments, lifestyle tips or sketch comedy with their friends.</p>



<!-- https://developers.google.com/youtube/iframe_api_reference#Getting_Started -->


<!-- <div class="video-background">
    <div class="video-foreground">
      <iframe src="https://www.youtube.com/embed/avLbaq42iyI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&t=0m10s&playlist=avLbaq42iyI&mute=1" frameborder="0" allowfullscreen></iframe>
    </div>
  </div> -->

<!--
<div id="vidtop-content">
<div class="vid-info">
	  <h1>YouTube Fullscreen Background Demo</h1>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of http://eol.jsc.nasa.gov/
	 <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
  </div>
</div>

-->

<!-- vids gP2UGhKcTj0&t (3:30 to 4:03 [210 to 243] avLbaq42iyI, lJ-zybAX_dM, woeu_KxQRSc, gP2UGhKcTj0&t=457s -->

<div class="main-content">
    <p>
        How Companies Can Connect With Influencers
    </p>
    <p>
       Larger companies will look at smaller channels because they have a bigger spend and get a reach.

Jeff partnered with Jeff Lim, founder of Greenroom136 a maker of unique backpacks and urban gear. Greenroom136 has built a large following in the U.S. due to social media.

"I pitched Patrick the idea filming an honest review on my YouTube. As a true backpack addict, I'd be honest and enthusiastic. And he liked it."
    </p>
    <p>
        "People like negative reviews. The highest-viewed video on my channel was a negative review of a popular and expensive camera bag." 

The review generated controversy and that led to views as well as comments criticizing the video. Fans of the backpack wrote comments on the video. 

Highest viewed video on my channel 66,000 reviews - a popular backpack - expensive. Macbook of camera bags. A status symbol. They have $2,000 to spend to do email (He is a Macbook pro user because video edidting).
    </p>
</div>
</section>


background

.growth-marketing .hero {
  background-image: url('../images/people.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
}


.simple-blended {
  background-image: url('../images/couple-selfie.jpg');
  background-color: red;
  background-blend-mode: multiply;
  height: 70vh;
  }

.simple-blended {
  background-image: url('../images/couple-selfie.jpg');
  background-color: red;
  background-blend-mode: multiply;
  height: 70vh;
  }

  <figure class="images-container flex-c">
    <div>
        <img src="../images/grant-look-drone.jpg" height="" width="" alt="Videographer Jeff Grant on location">
    </div>
    <div>
        <img src="../images/grant-fly-drone.jpg" height="" width="" alt="Videographer Jeff Grant on location">
    </div>
</figure>
<figure class="video-wrap ">
<div class="flex-c--center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/avLbaq42iyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</figure>
