# Sequelize-JavaScript Boilerplate

---

## Description

## A simple boilerplate set up so you don't have to think about having to write code to connect to your database.

## Prerequesites

1. ### Must have Node and NPM Installed

    - [Node Download](https://nodejs.org/en/download/)
      > When node is downloaded you will automatically get npm as well. You can then use commands such as npm install --save      "package name" or npm install --save-dev "package name" for developer dependencies.

2. ### Dev Dependencies
   - node-sass
   - nodemon
   - sequelize-cli
3. ### Production Dependencies
   - express
   - body-parser
   - ejs
   - materialize-css
   - sequelize
   - pg & pg-hstore
     > For Postgres Sql unless you are going to use mysql then install mysql2

---

## Installation

- When you first download repo from github you can run npm install in your terminal to install all required dependencies.

  > Please make sure you are in the correct path before running npm. For example ~/Projects/boilerplate

- You can also install dependencies individally by using npm install --save "package name" for Production dependencies and npm install --save-dev "package name" for developer dependencies.

- **Important** I highly reccomend installing the sequelize-cli globally, so you can run generators and setup more efficentlly

  > You can install sequelize-cli globally by using npm install -g sequelize-cli

- For main setup depending on which database you decide to use you will need to change the config.json file located in config/config.json

  > For example if you are using Mysql the main change would be to change the dialect from postgres to mysql

- For styling I have materialize-css installed so you can use there classes for styling similar to bootstrap. For more info on materialize-css click [here](https://materializecss.com/)

- For those who prefer to style themselves I have node-sass installed. Just run this command `npm run sass` in your terminal. Once you do that it will automatically watch the css in the scss/main.scss folder and output changes into public/css/main.css.

  > Again please insure you are in the correct project path

- Finally we are utilizing sequelize for our database connection. With sequelize and the sequelize-cli you will be able to generate migrations, models, and create connections to your database without having to write your own sql code. For more info on sequelize and the cli for sequelize click [here](https://sequelize.org/v5/index.html).
  > some examples include npx sequelize-cli migration:generate --name migration-skeleton if you decided to not install sequelize-cli globally or if you did you can use sequelize migration:generate --name migration-skeleton.

---
