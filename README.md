# Event Management Backend

## Description

This is the backend for an Event Management application. It provides user authentication, event management, and other essential APIs required for the event management system. The backend is built using Node.js, Express, and MongoDB.

## Features

- **User Registration and Login**: Register, login, and manage user sessions with JWT-based authentication.
- **Profile Management**: Retrieve user profile information.(Pending)
- **Event Management**: Create, read,  and delete(in progress) events.
- **Logout**: End user sessions and clear cookies.

## Technologies

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and event data.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWTs).
- **dotenv**: Module for loading environment variables from a `.env` file.
- **cookie-parser**: Middleware for parsing cookies.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

## Setup and Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your local machine.
- MongoDB instance (cloud or local).

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/amitver01/backend_EVENT.git
    ```

2. **Navigate into the Project Directory**

    ```bash
    cd backend_EVENT
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Create a `.env` File**

    In the root directory of the project, create a `.env` file and add the following environment variables:

    ```env
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=your_mongodb_connection_string
    ```

5. **Start the Server**

    ```bash
    npm start or nodemon 
    ```

    The server will start on `http://localhost:4000` by default.

## API Endpoints

- **POST** `/api/auth/register`:
  - Registers a new user.
  - **Body**: `{ "name": "User Name", "email": "user@example.com", "password": "userpassword" }`
  
- **POST** `/api/auth/login`:
  - Logs in a user and returns a token.
  - **Body**: `{ "email": "user@example.com", "password": "userpassword" }`
  
- **GET** `/api/auth/profile`:
  - Retrieves user profile information (requires authentication).
  - **Headers**: `Authorization: Bearer <token>`
  
- **POST** `/api/auth/logout`:
  - Logs out a user and clears the session.
  - **Headers**: `Authorization: Bearer <token>`

## Deployment

The backend is deployed and available at [https://backend-event-qj0c.onrender.com](https://backend-event-qj0c.onrender.com).

## Contributing

1. **Fork the Repository**.
2. **Create a New Branch**: `git checkout -b feature-branch`.
3. **Commit Your Changes**: `git commit -am 'Add new feature'`.
4. **Push to the Branch**: `git push origin feature-branch`.
5. **Create a New Pull Request**.

## Contact

For any issues or questions, please contact Amit Verma at [av2177980@gmail.com](mailto:av2177980@gmail.com).

