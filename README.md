<a href="https://doi.org/10.5281/zenodo.5534872"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.5534872.svg" alt="DOI"></a> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/shantanu109/calorieapp_frontend/blob/main/LICENSE.md) <a href="https://img.shields.io/github/commits-since/shantanu109/calorieapp_frontend/1.0.0.svg" ><img src="https://img.shields.io/github/commits-since/shantanu109/calorieapp_frontend/1.0.0.svg"></a>   <a href="https://img.shields.io/github/issues/shantanu109/calorieapp_frontend.svg" ><img src="https://img.shields.io/github/issues/shantanu109/calorieapp_frontend.svg"></a>  <a href="https://img.shields.io/github/issues-closed/shantanu109/calorieapp_frontend.svg"><img src="https://img.shields.io/github/issues-closed/shantanu109/calorieapp_frontend.svg"></a> 
[![Repo-size](https://img.shields.io/github/repo-size/shantanu109/calorieapp_frontend)](https://GitHub.com/shantanu109/calorieapp_frontend/)
[![file_count](https://img.shields.io/github/directory-file-count/shantanu109/calorieapp_frontend)](https://GitHub.com/shantanu109/calorieapp_frontend/)
[![language_count](https://img.shields.io/github/languages/count/shantanu109/calorieapp_frontend)](https://GitHub.com/shantanu109/calorieapp_frontend/)  

![WhatsApp Image 2021-09-28 at 2 48 00 PM](https://user-images.githubusercontent.com/25662536/135546154-cfae1d2e-439a-4edc-b0bb-57f693ef5a83.jpeg)

BurnOut is an easy to use application that keeps track of a user's daily calories gained and burnt. It can help the user to set goals such as weight loss/gain. User can edit his profile to enter weight, height and goal. This document provides a major perspective for the users to understand and take up the project as an Open source software and add on multiple features before releasing to the market. Also, the document aids the developers in understanding the code and acts as a reference point for continuing the project. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents  

- [Why use BurnOut?](#why-use-burnout)
- [Technologies Used:](#technologies-used)
- [Core Functionalities:](#core-functionalities)
  - [Register](#register)
  - [Login](#login)
  - [Set User Profile](#set-user-profile)
  - [Enter Calories in and burnt](#enter-calories-in-and-burnt)
  - [Check History](#check-history)
  - [User History Plot](#user-history-plot)
- [Steps for Execution:](#steps-for-execution)
- [Source Code](#source-code)
- [Additional commands for React App](#additional-commands-for-react-app)
- [Future Scope](#future-scope)
- [Team Members](#team-members)
- [Contribution](#contribution)
- [License](#license)
- [Support](#support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Why use BurnOut?
 - User can easily track their calories.
 - User just needs to input the food they've had, calories get calculated automatically.
 - Record of calories in and calories burn out day wise in History tab.
 - Helps user to figure out how much to eat/exercise according to their desired goal(weight loss/gain).
 - Easy to use application.

# Technologies Used:
 - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 - ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
 - ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 - ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 - ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  
 - ![RestAPI](https://img.shields.io/badge/RestAPI-005571?style=for-the-badge&logo=restapi)
 - ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
 
 # Core Functionalities:
 
 ## Register
![register2](https://user-images.githubusercontent.com/25662536/135362555-0b318a15-6055-46b1-9a68-fdb6347341b5.gif)

 ## Login
 ![ezgif-1-59cd384ca962](https://user-images.githubusercontent.com/25662536/135186441-62458bc0-72ff-41b5-84d4-39b4e8985b71.gif)
 
 ## Set User Profile
 ![User](https://user-images.githubusercontent.com/25662536/135188482-8a80702e-3405-479a-be9f-3fa5cb249a9f.gif)
 
 ## Enter Calories in and burnt
 ![enterfood](https://user-images.githubusercontent.com/25662536/135545398-70feedb5-b82e-41d9-996e-d3902492883e.gif)
 
 ## Check History
 ![history](https://user-images.githubusercontent.com/25662536/135545802-0386c959-1bea-4b18-abae-c834862385c6.gif)

 ## User History Plot
 ![datevsweight](https://user-images.githubusercontent.com/89487138/135519908-74894e53-c8a7-423a-af1e-66bfcf5cd1de.png)

# Steps for Execution:
 - Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows)
 - Download and install [NodeJs](https://nodejs.org/en/download/)
 
 - In the command prompt clone the frontend project using following commands:
#### `git clone https://github.com/shantanu109/calorieapp_frontend.git`
 - Open new console and clone the backend part:
#### `git clone https://github.com/shantanu109/calorieApp_server.git`

 - Then enter
#### `npm install`
 to install all the required dependencies in both the terminal. The dependencies have been mentioned in the 'package.json' file.

 - Then enter below command for both the terminals to start the application:
#### `npm start`

 - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
# Source Code
 - Link to frontend repository: https://github.com/shantanu109/calorieapp_frontend
 - Link to backend repository: https://github.com/shantanu109/calorieApp_server

# Additional commands for React App

## Available Scripts

In the project directory, you can run:

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# Future Scope

## The below points can be implemented in the future scope of this application:

 - Integrate Machine Learning Model with Application to predict the journey to goal and guide the user to it based on previous history.

 - Incorporate Field Validations.

 - Provide/Create separate pages for the tabs displayed on HomePage.

 - Creating pages for Meal and Workout plan.

 - Create a mobile application for the web version of the application.
 
# Team Members

 - Shantanu Pandey(spandey4@ncsu.edu)

 - Sahil Rajesh Nande(snande@ncsu.edu)

 - Leanne Serrao(lserrao@ncsu.edu)

 - Varun Garg(vgarg4@ncsu.edu)

 - Urmi Kashyap Pathak(upathak@ncsu.edu)

# Contribution

Please see the CONTRIBUTING.md for instructions on how to contribute to our repository.

# License

This project is licensed under the MIT License.

# Support

For additional support or inquiries, please contact at burnoutsoftware@gmail.com
