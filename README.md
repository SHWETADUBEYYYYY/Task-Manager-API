# 📋 Task Manager API + Frontend

A simple full-stack **Task Manager App** built using:

- 🖥️ Node.js + Express.js for the backend API
- 🗃️ MongoDB as the database
- 🌐 HTML, CSS, and JavaScript for the frontend
- 📄 Swagger UI for live API documentation

---

## 🔗 Live Links

| Part           | URL                                                                 |
|----------------|----------------------------------------------------------------------|
| ✅ Backend API | [https://task-manager-api-qn4a.onrender.com/api/tasks](https://task-manager-api-qn4a.onrender.com/api/tasks) |
| 📘 Swagger Docs | [https://task-manager-api-qn4a.onrender.com/api-docs](https://task-manager-api-qn4a.onrender.com/api-docs) |

---

## 📌 API Endpoints and Functionality

All API routes use the base:  
`https://task-manager-api-qn4a.onrender.com/api/tasks`

| Method | Endpoint            | Functionality                        |
|--------|---------------------|--------------------------------------|
| GET    | `/api/tasks`        | Fetch all tasks from the database    |
| POST   | `/api/tasks`        | Create a new task                    |
| PUT    | `/api/tasks/:id`    | Update an existing task by ID        |
| DELETE | `/api/tasks/:id`    | Delete a task by ID                  |

---
## 🧪 How to Interact with the API (Sample Requests & Responses)

🔹 1. Swagger UI (Recommended for Beginners)
- 📘 Open Swagger API Docs
Click on any endpoint → Try it out → Enter input → Execute to send a live request and view the response.

🔹 2. Using curl from Terminal
- ▶️ Get All Tasks- 
(curl https://task-manager-api-qn4a.onrender.com/api/tasks)
- ➕ Add a New Task- 
(curl -X POST https://task-manager-api-qn4a.onrender.com/api/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Test from curl"}')
- ❌ Delete a Task- 
(curl -X DELETE https://task-manager-api-qn4a.onrender.com/api/tasks/665c1e9d4c8a3f1a96b8b8a1)

🔹 3. From the Frontend
- ✍️ Type a task in the input field

- ➕ Click “Add Task” to send a POST request

- 📋 Tasks are loaded on page load using GET

- 🗑️ Click delete icon to send a DELETE request




