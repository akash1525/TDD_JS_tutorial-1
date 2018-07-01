# TDD_JS_tutorial-1
#This is a Sample tutorial file for Test Driven Development using NodeJS and JavaScript
#The ablove 2 files is to fetch images from Flickr.com and transform it into HTML and add it to a web page.
#I used Mocha as the testing framework as it is quite a poular testing framework. 
#Reference: https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
#Right now these are just codes for flickr-fetcher.js and flickr-fetcher-spec.js. I will soon be adding code for photo-lister.js and photo-lister-spec.js
#There are 3 tutorials to this. I will be creating the next 2 tutorials shortly. 
#Note on TDD:
#TDD is an approach to writing software where you write tests before you write application code. The basic steps are:

#Red: Write a test and make sure it fails.
#Green: Write the simplest, easiest possible code to make the test pass.
#Refactor: Optimise and/or simplify the application code, making sure that all the tests still pass.
#Once we finish step 3, we start the cycle again by writing another test.

#These three steps form the TDD mantra: ‘red, green, refactor’. We’ll examine each of these in detail as we go through an example. But first one final thing.

#TDD is a form of self discipline—a life hack—it doesn’t magically make one a better coder. In theory, there’s no reason why a great coder couldn’t write exactly the same code as someone who doesn’t. But the reality is that the discipline of TDD strongly encourages one to:

#Write tests; and
#Write smaller, easier-to-understand units of code.
