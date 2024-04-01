# Express API with TypeScript and PostgreSQL

This project is a simple Express API built using TypeScript. It is my first backend project, developed within a day! The API stores information in a PostgreSQL database.
Features

    TypeScript: Utilizes the power of static typing.
    Database: Stores data in a PostgreSQL database.
    Fast Development: Created in just one day!

Prerequisites

Before you begin, ensure you have the following installed:

    Node.js: Download Node.js
    PostgreSQL: Install PostgreSQL

Installation

    Clone this repository:

    git clone https://github.com/lluisaliano/expressFirstAPI.git
    cd first-express-api

    Install dependencies:

    npm install

    Set up your environment variables. Change user and password on utils/pgsql.ts file.

    Initialize postgres:

    CREATE DATABASE expressapi;

    CREATE TABLE activities (id, name, location, information, category, price);        

    Run the app:

    npm run dev

    Open http://localhost:3000 in your browser.

API Endpoints

    GET /: Retrieve all items.
    POST /: Create a new item.
    POST /close: Close database connection.
