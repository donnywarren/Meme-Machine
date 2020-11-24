# MEME MACHINE <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**MEME MACHINE is an app for creating, storing and editing meme collections.**_

<br>

## MVP

The **MEME MACHINE** MVP will allow users to create and delete a personal repository in which they will be able to curate a collection of memes. The users will be able to combine text with images to display a finished meme. Additionally the user will be able to add image URLs and text to the data base. The UX will be intuitive and the meme display will be the focus.

<br>

### Goals

- _User authentication will include registeration and login_
- _Track user throught app, allowing access to only their FINISHED memes_
- _Allow image url and text resource to be available to all users_
- _Store image urls and text data in separate but linked tables_
- _Display images with options to select text to be overlayed_
- _Allow user to add image urls_
- _Allow user to add text fields_
- _Display finished meme with text properly overlayed_

<br>

### Libraries and Dependencies

|   Library    | Description                                                             |
| :----------: | :---------------------------------------------------------------------- |
|    React     | _Primary front librayend development._                                  |
| React Router | _Helper library to facilitate front end navigation._                    |
|    Axios     | _Library used to make requests from backend server._                    |
|  Ruby/Rails  | _Primary backend framework for structuring, managing and storing data._ |
|    Bcrypt    | _Hashing library/algorithm for concealing passwords._                   |
|     JWT      | _Web token tool used to verify user credentials._                       |

<br>

### Client (Front End)

#### Wireframes

[Desktop/Tablet Landing Screen](https://wireframe.cc/0jM6G6)

[Desktop/Tablet Landing with Login](https://wireframe.cc/07UKMm)

[Desktop/Tablet Landing with Register](https://wireframe.cc/LHEWmj)

[Desktop/Tablet User](https://wireframe.cc/O7fJ74)

[Desktop/Tablet Images with Image Use/Add/Delete](https://wireframe.cc/SJLUN4)

[Desktop/Tablet Generator with Text Add/Edit/Delete](https://wireframe.cc/2zlUor)

[Mobile Landing Screen](https://wireframe.cc/vquUSi)

[Mobile User](https://wireframe.cc/TyTdvf)

[Mobile Image](https://wireframe.cc/x9nPIX)

[Mobile Generator](https://wireframe.cc/BUPu0D)

#### Component Tree

Created on Diagrams.net -- [Meme Machine](https://app.diagrams.net/?libs=general;flowchart#G1geHDVCJueFMJvE0bh1rNTmicNTOtMeY_)

#### Component Hierarchy

```structure

Stuff and Things
|__ app/
      |__ controllers
        |__ application
        |__ authentication
        |__ users
        |__ memes
        |__ text
      |__ models
        |__ user.rb
        |__ memes.rb
        |__ text.rb
|__ client/
      |__ public
        |__ (remove React template files)
      |__ src
        |__ components
          |__ Header.jxs
          |__ Footer.jxs
          |__(others TBD during developemnent)
        |__ containers
          |__ main
        |__ layouts
          |__ Layout.jsx
        |__ screens
          |__ Landing.jsx
          |__ Login.jsx
          |__ Register.jsx
          |__ Memes.jsx
          |__ MemesCreate.jsx
          |__ MemesEdit.jsx
          |__ Text.jsx
          |__ TextCreate.jsx
          |__ Images.jsx
          |__ ImagesCreate.jsx
        |__ services
          |__ api-config.js
          |__ auth.js
          |__ memes.js
          |__ text.js
          |__ auth.js
|__ config/
      |__ routes.rb
|__ db/
      |__ migrate
        |__ (various migration files as needed)
      |__ schema.rb
      |__ seeds.rb

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                                 |
| :----------: | :--------: | :---: | :---: | :-------------------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logout, navigation and logo._                  |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._                  |
| User Gallery | functional |   y   |   y   | _The user gallery will render a users memes using cards in flexbox._        |
| Gallery Card | functional |   n   |   y   | _The cards will render the meme via props and contain edit delete buttons._ |
|  Image Box   | functional |   y   |   y   | _The image box will contain a collection of all images as links._           |
|   Text Box   | functional |   y   |   y   | _The text box will constian all the text options as a select panel._        |
|    Footer    | functional |   n   |   n   | _The footer will show my contact info and copy write._                      |
|     TBD      | functional |   y   |   y   | _Other components might be necessary as developemnt progresses._            |

#### Time Estimates

| Task                          | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Rails & React Template |    H     |     1 hrs      |     0 hrs     |     TBD     |
| Generate Database & Seed      |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Rails User Login              |    H     |     6 hrs      |     0 hrs     |     TBD     |
| Rails Memes                   |    H     |     8 hrs      |     0 hrs     |     TBD     |
| Rails Text                    |    H     |     8 hrs      |     0 hrs     |     TBD     |
| React User Login              |    H     |     4 hrs      |     0 hrs     |     TBD     |
| React Memes                   |    H     |     6 hrs      |     0 hrs     |     TBD     |
| React Text                    |    H     |     3 hrs      |     0 hrs     |     TBD     |
| CSS Basic Styling             |    M     |     6 hrs      |     0 hrs     |     TBD     |
| Deployment                    |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Testing                       |    M     |     2 hrs      |     0 hrs     |     TBD     |
| TOTAL                         |          |     54 hrs     |     0 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

Created on Diagrams.net -- [Meme Machine](https://drive.google.com/file/d/13ozsP_Fa9-ds_brKTAkzuQ8oDQy9sbAW/view?usp=sharing)

<br>

---

## Post-MVP

- _Allow users to upload imgane files instead of urls._
- _Allow users to create text at top of images as well as the current bottom location._
- _Allow users to download finished memes as pdf or jpeg files._
- _Create a meme playground for users to work collaboratively to create memes._
- _Create delete user functionality._

---

## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
