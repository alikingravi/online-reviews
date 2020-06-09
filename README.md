# Online Reviews

## Introduction
Online reviews is a demo app which allows users to register, login and start reviewing available products, which can then be seen in their personal dashboard. Admin users are also supported who can add/remove users and products and also view additional stats/charts.

## Tech stack
- Front End
  - React/Redux
  - Axios (http requests)
  - Formik/Yup form validation
  - Chart.js
  - bootstrap css
- Back End
  - Node/Express
  - Sqlite database
  - Sequelize ORM
  - JWT Authentication
  - Joi input validation
- Testing
  - Cypress (e2e testing)
  - Jest (Unit/Functional testing)

## Installation

Clone this repo into your local machine:
```
git clone https://github.com/alikingravi/online-reviews.git
```

### Node and NPM versions used
```
nvm current: v8.12.0
npm -v: 6.4.1
```
### Docker Installation
From the root directory run the following command:
`docker-compose up --build` or `docker-compose up -d --build` if you want docker to run in the background.

Once all containers have been strarted, launch the app in the browser using the url:
[http://localhost:3050](`http://localhost:3050`)

### Local Installation

### Back End Setup
From the root directory navigate to the server folder, `cd server/`, and run the command:  
`npm install`.

Once all the dependencies have been installed you can launch the back end server by running:  
`npm run dev`.

If you see `listening on port 5000` that means the back end server has started successfully.

Create a new file called `.env` in the root of the `/server` folder and add the following fields:
- BACKEND_PORT=5000
- FRONTEND_PORT=3000
- DB_NAME=onlinereviews
- DB_USER=onlinereviews
- DB_PASS=onlinereviews
- HOST=localhost
- JWT_SECRET=ANY_STRING

### Front End Setup
Open a new terminal window. From root directory navigate to the client folder, `cd client/`, and run the command:  
`npm install`.

Once all the dependencies been have installed you can launch the front end server by running:  
`npm run start`.

## Launch The App
A new browser window should open automatically once the front end server has launched successfully. If not then open a new browser window (Google Chrome or Firefox) and put the following URL in the address bar:  
[http://localhost:3000](`http://localhost:3000`)

## Demo Users

The sqlite database comes preloaded with 12 users, 15 products and a bunch of user reviews. You can register as a new user or you can login as an existing one.

### Non Admin
You can either register a new user or use one of the already registered users:
```
username: nonadmin@test.com
password: qweasdf
```

### Admin
You can also register as an admin or use one of the already registered admins:
```
username: admin@test.com
password: qweasdf
```
## Testing

### Cypress
Open a new terminal window. From the root of the project, navigate to the client folder:  
`cd client/`

> Ensure the front end server on `port 3000` is not running but the back end server on `port 5000` is running.

In order to run e2e tests use the command:  
`npm run test:cypress`

You may have to install additional dependencies to run cypress if you are on a windows machine.
