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
| 🌐 Frontend     | _[Add your Netlify or GitHub Pages link here once deployed]_        |

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

### 🧪 Sample API Request (POST)

**Endpoint:**  
`POST /api/tasks`

**Body (JSON):**

```json
{
  "title": "Finish frontend"
}
