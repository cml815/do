"Do" Fuel Website Project
=========================

## Site map

|--Home
|
|--Work (may just be one page & extended later)
|    |
|    --Strategy 
|    --Website dev/design
|    --Copywriting / SEO
|    --Content marketing / Influencer marketing

|--Projects (Case stories)
|   |
|   -- Jeff Grant (influencer marketing)
|   -- CeasefirePA (strategy)
|   -- RewardExpert (content/influencer & SEO)
|
|-- About 
|
|-- Contact

## How to clone and use repository

** When problems occur, read the error message. Node is decent at giving information. It is recommended to delete the package and start over. Googling error codes isn't going to help much.**

** Be quick to ask Caroline for help. Call 610-220-7863.A phone tech support session is the fastest way to get on board. Trust me, email is inefficient.**

# Install node:

Check on command line to see if you have node: *node --version* (OR try *node -v* OR *which node*).

[Node package installer] (https://nodejs.org/en/download/)

Node version 10 or higher recommended. 

# Clone website Github repository onto home machine 

* Download source code from repo
* Clone with HTTPS: git clone https://github.com/cml815/do.git

# How to open and run website

* **Use localhost:3000 (!IMPORTANT)**
* Follow these steps:

1) Navigate to root folder (do) App.js, bin, package.json and some folders are at level of root. If you see those files, you're at the root. 

2) Type ```npm init``` and hit return

3) Type ```npm install``` and hit return - modules will download. Takes about 30 seconds. 

(Warnings will appear, but ignore.)

4) Type ```npm run start``` for read only mode. 

FYI - Debug mode is extremely useful and recommend for editing / dev mode. Debug mode gives the exact file and line for errors. 

Debug start command: ```DEBUG=do:* npm run dev```

# Recommended resource (other than googling)

[MDN tutorial for beginners to Node/Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)



