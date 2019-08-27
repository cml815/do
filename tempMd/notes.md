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
