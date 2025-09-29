# 🍕 Pizza Menu API

A simple Express.js RESTful API for managing a pizza menu and its toppings. This project demonstrates basic CRUD operations using in-memory data structures.

## 📦 Features

- View all pizzas
- View a specific pizza by ID
- Add a new pizza
- Update an existing pizza
- Delete a pizza
- Validate toppings by ID

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Express installed (`npm install express`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pizza-menu-api.git
   cd pizza-menu-api

2.- Install dependencies:
    npm install
3. Run the server:
    node app.js
## 🧪 Sample Outputs

### 🔹 GET Request
![GET Request](screenshots/GET%20REQ.png)

GET /Returns all pizzas in the menu.
Response:
[
  {
    "id": "1",
    "name": "Margherita",
    "size": "medium",
    "price": "300",
    "toppingId": "t1"
  },
  ...
]

### 🔹 POST Request
![POST Request](screenshots/POST%20REQ.png)

POST /
Adds a new pizza to the menu.
Query Parameters:-
id
- name
- size
- price
- toppingId (must match a valid topping)

- POST /?id=4&name=Veggie&size=large&price=400&toppingId=t2

### 🔹 PUT Request
![PUT Request](screenshots/PUT%20REQ.png)

PUT /:id
  Updates an existing pizza by ID.Query Parameters (optional):-
   id
- name
- size
- price
- toppingId
- PUT /2?id=5&name=Spicy&size=small&price=280&toppingId=t3

### 🔹 DELETE Request
![DELETE Request](screenshots/DELETE%20REQ.png)

DELETE /:id
  Deletes a pizza by ID.
  DELETE /3


📁 File Structure
pizza-menu-api/
├── app.js
├── routes/
│   └── pizzaRouter.js
└── README.md



