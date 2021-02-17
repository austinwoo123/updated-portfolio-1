# Updated-Portfolio

## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
Our assignment was to update our portfolio page to build toward being employer-competitive. 

-----------------------
## Deployed Link
[Link to Deployed Site](https://austinwoo123.github.io/updated-portfolio-1/)

-----------------------
## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file
-----------------------
## Code Snippets
```
/ hamburger menu toggle variables
var navbarToggle = $("#nav-toggle");
var navMenu = $("#navbarBasicExample");
var toggle = 0;
// hamburger menu toggle
$("#nav-toggle").click(function () {
    if (toggle === 0) {
        navbarToggle.attr("class", "navbar-burger nav-toggle is-active");
        navMenu.attr("class", "navbar-menu is-active");
        toggle++;
    }
    else {
        navbarToggle.attr("class", "navbar-burger nav-toggle");
        navMenu.attr("class", "navbar-menu");
        toggle--;
    }
})
```
This code shows how I fixed the hamburger menu by creating a toggle function in the script file. Prior to fixing this, I had a lot of trouble getting the hamburger menu to work.

```
<div class="social-icons">
            <a href="https://github.com/austinwoo123" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/awoo95/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:awoo004@ucr.edu" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
```
This code shows how I used font awesome icons to create hrefs for my contact information. I really liked how there was many different icons to choose from and how easy it was to install.
 
-----------------------
## Built With
- Bulma CSS
- Javascript
- HTML/CSS
- jQuery
- Font Awesome

-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp