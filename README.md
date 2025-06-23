# 📌 Task Manager API

A full-stack task management project featuring a custom RESTful API built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates core backend development skills including CRUD operations, REST API design, API documentation, and thorough testing.

> ✨ This project is part of a hands-on learning session focused on building, documenting, and testing your own API server from scratch.

---

## 🛠️ Tech Stack

| Layer       | Tech Used                                 |
|-------------|--------------------------------------------|
| Backend     | Node.js, Express.js                       |
| Database    | MongoDB                |
| API Testing | Jest, Supertest, mongodb-memory-server    |
| API Docs    | Swagger (swagger-jsdoc + swagger-ui-express) |
| Frontend | HTML, JS         |

---

## 📌 Features Implemented

### ✅ Custom API Endpoints

The server exposes the following **custom APIs**:

| Endpoint                | Method | Description                      |
|-------------------------|--------|----------------------------------|
| `/api/tasks`            | GET    | Fetch all tasks                  |
| `/api/tasks/:id`        | GET    | Fetch a single task by ID        |
| `/api/tasks`            | POST   | Create a new task                |
| `/api/tasks/:id`        | PUT    | Update an existing task          |
| `/api/tasks/:id`        | DELETE | Delete a task by ID              |

Each endpoint performs appropriate validation and communicates with MongoDB to store or retrieve data.

---

## 🧠 Backend Logic

- Uses **Express Router** to modularize the route logic.
- Mongoose models handle MongoDB document interaction.
- Controllers abstract core logic (optional).
- Environment variables are managed with `.env`.

---
## Screenshot 
![api tasks](https://github.com/user-attachments/assets/65891b41-d9e8-4480-b88b-bc30dd77aac7)

## 📂 Project Structure

.
- ├── index.js # App entry point
- ├── models/Task.js # Mongoose model
- ├── routes/tasks.js # Express route handlers
- ├── swagger.js # Swagger UI setup
- ├── .env # Environment config
- ├── tests/
- │ ├── unit/ # Controller logic with mocks
- │ │ └── taskController.test.js
- │ ├── integration/ # Real DB interaction
- │ │ └── taskModel.test.js
- │ └── api/ # Endpoint testing
- │ └── taskRoutes.test.js
- ├── assets/
- │ └── test-coverage.png # Test coverage screenshot
- └── README.md


---

## 🧪 Testing (Task 2 ✅)

To ensure everything works as expected, this API includes comprehensive tests:

### ✔️ Unit Tests
- Logic is tested in isolation.
- DB operations are **mocked** using `jest.mock`.

### ✔️ Integration Tests
- Performed using **mongodb-memory-server**, so no real database is touched.
- Verifies correct schema and DB interactions.

### ✔️ API Tests
- Full HTTP flow tested with `supertest`.
- Simulates real requests to your Express app.

### 📈 Code Coverage
Test coverage exceeds **70%** as required.

📸 Test Coverage Screenshot ![API  TESTING](https://github.com/user-attachments/assets/4167fef7-8040-4c3c-bd91-b0fa9fac5347)





