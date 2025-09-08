# Country Flags Quiz

![The Quiz start screen on a variety of screen sizes](assets/images/amiresponsive.png)

Visit the deployed site: [Country Flags Quiz] (https://ieuanpriede.github.io/Country-Flags-Quiz/)

A fun quiz to test your knowledge of country flags from around the world.

Match the flag image to one of the four listed country names.

## CONTENTS

* [User Experience](#user-experience)
  * [User Stories](#user-stories)

* [Design](#design) 
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [The Home page](#the-home-page)
    * [The 404 Error Page](#the-404-error-page)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)

* [Testing](#testing)

* [Credits](#credits)

- - -

![Country Flags Quiz Heading](assets/images/title.png)  

## User Experience

### User Stories

#### First Time Visitor Goals

* I want to test my knowledge of country flags.
* I want to have fun doing something educational.
* I want the site to be responsive to my device.
* I want the site to be easy to navigate.

#### Returning Visitor Goals

* I want to test my knowledge of country flags and learn for those I got incorrect.
* I had fun and want to continue having fun.

#### Frequent Visitor Goals

* I want to master this quiz.
* I want to know all country flags off by heart.

## Design

### Colour Scheme

I chose an image of an urban cafe, with national flags on the wall.

* A glass-style card using --card (rgba(16, 24, 44, 0.72)), with subtle borders and shadows.
* Primary Text: --text (#e8ecf1) for readability against the dark background.
* Muted Text: --muted (#9aa6b2) for secondary information.
* Accent / Brand Colours:
  - Teal (--brand: #14b8a6)
  - Indigo (--brand-2: #6366f1)
  These are used for gradients, button accents, and highlights.
* Feedback Colours:
  - Correct answers → #008000 (green)
  - Incorrect answers → #ff0000 (red)

### Typography

Google Fonts were used to give the game a playful yet modern look:

Headings: Outfit
 - For a bold, clean, geometric style, supported by system fonts.

Optional Fun Title Styling: Bangers
 - Was imported for a comic-style feel (can be used in branding or headings if desired).

Body / Content: Noto Sans
 - Chosen for readability and clean presentation.

### Imagery

For the background I used an image of an urban cafe, with national flags on the wall.
For the questions I used images of the country flags.

### Wireframes

Wireframes were created for mobile, tablet and desktop using balsamiq.
The final design has been updated since these wireframes were created. They represent the initial planning stage of the project.

![Iphone](assets/images/wireframes/iphone_wireframe.png)
![Tablet](assets/images/wireframes/ipad_wireframe.png)
![Laptop](assets/images/wireframes/laptop_wireframe.png)


### Features

The Quiz only contains two pages.

All pages are responsive and have:

* A favicon in the browser tab & the footer.

![favicon](/assets/images/favicon.png)

* The title of the quiz at the top of every page.

![Country Flag Quiz](assets/images/title.png)

#### The Home Page

The home page contains the map image as the background and a container which hold the quiz inside. I has a start button to begin the quiz.

![Home Page Image](assets/images/amiresponsive.png)

Once the quiz has begun, the flag image appears with four options to choose from. It also shows what question number the user is on, and their score.
It contains a next button to move the user onto the next question, and tells the user if their answer is correct or incorrect.

![Quiz question and Answers](assets/images/question.png)
![Correct Answer](assets/images/correct.png)
![Incorrect Answer](assets/images/incorrect.png)

#### 404 Error Page

The 404 Error Page tells the user that something went wrong. It offer the user a way to return back to the home page with a 'Return' button.

![404 Error Page](assets/images/404.png)

### Accessibility 

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:

* Using semantic HTML.
* Ensuring that there is a sufficient colour contrast throughout the site.

## Technologies Used

HTML, CSS, JAVA SCRIPT

### Frameworks, Liraries & Programs Used

## Deployment & Local Development

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Github](https://github.com/) - To save and store the files for the website.
* [GitPod](https://gitpod.io/) - IDE used to create the site.
* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
* [Favicon.io](https://favicon.io/) To create favicon.
* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

### Deployment

The site is deployed using GitHub Pages - [Country Flags Quiz](https://ieuanpriede.github.io/Country-Flags-Quiz/)

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Ieuan-Priede/Country-Flags-Quiz](https://github.com/IeuanPriede/Country-Flags-Quiz).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Ieuan-Priede/Country-Flags-Quiz](https://github.com/IeuanPriede/Country-Flags-Quiz).
3. Click the Fork button in the top right corner.

### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Ieuan-Priede/Country-Flags-Quiz](https://github.com/IeuanPriede/Country-Flags-Quiz).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please refer to [TESTING.md](/TESTING.md) file for all testing carried out.

### Solved Bugs

[Error](assets/images/testing/Image_src_error.png) - Bad value for attribute 'src' - [Fixed](assets/images/testing/src_fix.png)

[Error](assets/images/testing/javascript_test.png) - 1 Unused variable 'maxCount' - [Fixed](assets/images/testing/js_fix.png)

## Credits

### Code Used

* I used the Code Institute curriculum to help with my coding. In particular the 'Love Maths' section.

* I used this [Video Tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k&list=WL&index=3&t=851s&ab_channel=WebDevSimplified) on Youtube by [WebDevSimplified](https://www.youtube.com/@WebDevSimplified) to help with me with the quiz buttons.

* I made use of ChatGPT to help guide me through processes such as implementing images as questions.

### Content

All content for the site were written by myself.

### Media

Background image:

Unsplash - Farzad Mohsenvand
[Unsplash](https://unsplash.com/photos/three-brown-wooden-tables-pKhfJme9mP0)

Flags -
All flag images were taken from Wikipedia [Wikipedia](https://www.wikipedia.org/)
 