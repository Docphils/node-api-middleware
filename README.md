# 👤 User Management API

A simple RESTful API for managing users using **Express.js** and **JSON Server**.  
It supports basic CRUD operations, with proper validation, meaningful error messages, and status codes.

---

## 🚀 Features

- ✅ Get all users
- ✅ Get a single user by ID
- ✅ Create a new user with validation
- ✅ Update a user
- ✅ Delete a user
- ✅ Error handling for `400`, `404`, and `500`
- ✅ UUID generation for new users

---

## 🛠️ Tech Stack

- **Node.js + Express**
- **JSON Server** (as mock database)
- **express-validator** (for input validation)
- **uuid** (for unique user IDs)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/docphils/node-api.git
cd user-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `db.json` File

```json
{
  "users": []
}
```

Place this in the root or where you run JSON Server from.

### 4. Start JSON Server (on port 3000)

```bash
npx json-server --watch db.json --port 3000
```

### 5. Start Express Server (on port 5000)

```bash
node index.js
```

---

## 📘 API Documentation

### 🔹 GET `/users`

**Description:** Get all users  
**Response:**
```json
[
  {
    "id": "1a2b3c",
    "name": "Philip",
    "age": 28,
    "occupation": "Software Developer",
    "location": "Abuja"
  }
]
```

---

### 🔹 GET `/users/:id`

**Description:** Get a specific user by ID  
**Response:**
```json
{
  "id": "1a2b3c",
  "name": "Philip",
  "age": 28,
  "occupation": "Software Developer",
  "location": "Abuja"
}
```

**Errors:**
```json
{ "error": "User not found" }
```

---

### 🔹 POST `/users`

**Description:** Create a new user  
**Body:**
```json
{
  "name": "Chidera",
  "age": 32,
  "occupation": "Teacher",
  "location": "Lagos"
}
```

**Response:**
```json
{
  "message": "User created",
  "user": {
    "id": "generated-uuid",
    "name": "Chidera",
    "age": 32,
    "occupation": "Teacher",
    "location": "Lagos"
  }
}
```

**Validation Errors:**
```json
{
  "error": "Validation failed",
  "details": [
    { "msg": "Name is required", "param": "name" },
    { "msg": "Age must be a number", "param": "age" },
    { "msg": "Occupation is required", "param": "occupation" },
    { "msg": "Location is required", "param": "location" }
  ]
}
```

---

### 🔹 PATCH `/users/:id`

**Description:** Update a user  
**Body (partial or full):**
```json
{
  "location": "Enugu"
}
```

**Response:**
```json
{
  "id": "1a2b3c",
  "name": "Chidera",
  "age": 32,
  "occupation": "Teacher",
  "location": "Enugu"
}
```

**Errors:**
```json
{ "error": "User not found" }
```

---

### 🔹 DELETE `/users/:id`

**Description:** Delete a user  
**Response:**
```json
{ "message": "User deleted successfully" }
```

**Errors:**
```json
{ "error": "User not found" }
```

---

## ✅ Example Usage with `fetch` (Frontend)

```js
// Create user
fetch("http://localhost:5000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Jane",
    age: 29,
    occupation: "Engineer",
    location: "Ibadan"
  }),
});
```

---

## 📩 Contact

**Author:** Philip Nwachukwu  
**Fellow ID:** FE/23/32682327

---