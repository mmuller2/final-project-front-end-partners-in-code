# :herb:ReLoved

:link: https://reloved.netlify.app/

This app provides a platform that allows the user through a REST API to perform CRUD operations such as (create, read, update, delete) for the back-end database. For the user interface our front-end will serve the information and allow you to display the new data created by the user by re-rendering React.js components.

![demo](public/gif/reloved.gif "reloved demo" )

# :recycle:Motivation

Our motivations for developing the app was to apply all the knowledge acquired over our time learning at the School of Code and testing our knowledge working in a team of six  to deliver the app within the time given by implementing agile software development methodology. Also developing valuable software that aims to contribute to minimize one of the main problems for global environment that is the problem of consumption - with this app we are encouraging more people to recycle their used items.

## :interrobang: The Problem 

We live in a world where as each day or year goes by, the planet we live in is being destroyed by the millions of tonnes of waste that could instead be recycled. 
Our goal is to help make our world a more sustainable place, and we are doing that by helping our users exchange and give away free items that they would otherwise throw away. 


## :art: Design

This [Figma ](https://www.figma.com/file/4a4pAmlYiymqzVMmP4yP0t/Partners-in-Code?node-id=0%3A1 "Figma") link will take you to our high-fidelity wire framework.



## :computer: Tech Stack


Front-end     | Back-end     
------------- | -------------
React         | Node.js
CSS           | Heroku
Auth0         | PostgreSQL
DropBox       | DropBox
Chakra-UI     | 

## :dvd: App Installation

:iphone: For the front-end repository 

Make a project directory, clone this repository and initialise the project.
This will install all the necesary packages to run the front-end in your local machine.

* :one: ` cd into the project directory folder created before`
* :two: git clone https://github.com/SchoolOfCode/final-project-front-end-partners-in-code.git`
* :three: `npm install `
* :four: `npm start `

:wrench: For the back-end repository 

Before you run the app, you will need to provide the data to connect to your database in the .env file. The app provides an example file with the structure. This app uses a postgresql database. You can create one online for free in Heroku or install postgresql in your computer. Once you have your database created, run the following scripts to create the table and populate the data:

This [Heroku ](https://www.heroku.com/ "Heroku") link will take you to the Heroku website where you can create your database.

Create another project directory, clone this repository and initialise the project.
* :one: ` cd into the project directory folder created before `
* :two: git clone https://github.com/SchoolOfCode/final-project-api-partners-in-code.git`
* :three: `npm install `
* :four: `add your Heroku information to a .env file where your will link your database to the project `
~~~
*Create a table named items into the database

  `npm run db:createusers`
//Will create an empty table in your database with all the variables needed for the app.
  `npm run db:populateItems`
//Will insert mock data into the database. This data is store in a file in db/libs/items.js
  `npm run db:truncateTable`
//Will delete all the contents of the table. 
  `npm run db:dropTable`
//Will delete the table and all its contents. 
~~~

# :file_folder: Features

* :closed_lock_with_key: Authentication 
User Authentication through the implementation of Auth0. Auth0 denies the user the ability to post items or look up product information if they are not logged in - they must log in or sign up to be able to do those things.

* :new: Create Items
This feature is shown as the "+" icon on the browse page. It allows the user to upload a product that they wish to give away or exhange!

![demo](public/gifmodal/modal.gif "reloved demo" )

* :warning: Alerts
An alert pops up at the top of the browser when a user that is not logged in or registered tries to view or upload an item.

## :twisted_rightwards_arrows: API Routes

<!-- - (GET) Returns HomePage: localhost:3000  -->
- (GET) Returns All Items: localhost:3000/
- (GET) Returns Item by ID: localhost:3000/:id
- (POST) Creates new item in the database: localhost:3000/


