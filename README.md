# inventory-api

# Simple Inventory Management System API

This is a basic backend application for an inventory management system. It is built with Node.js, Express.js, and uses MongoDB for the database. The API provides endpoints to create and list inventory items.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)

## Features

- RESTful API endpoints to manage inventory items.
- Built with Express.js for robust routing.
- Uses Mongoose for elegant MongoDB object modeling.
- Custom middleware for logging requests.
- Centralized 404 error handling for non-existent routes.
- Environment variables for secure configuration.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Development Tools**: `nodemon`, `dotenv`
- **API Testing**: Postman

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/en/) (which includes npm)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)
- [Postman](https://www.postman.com/downloads/)

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/inventory-api.git](https://github.com/your-username/inventory-api.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd inventory-api
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add your MongoDB connection string.

    ```
    # .env
    MONGO_URI=your_mongodb_connection_string
    ```
    *Replace `your_mongodb_connection_string` with your actual connection string from MongoDB Atlas or your local MongoDB instance.*

## Running the Application

To start the server in development mode (with auto-reload), run the following command:

```bash
npm start
