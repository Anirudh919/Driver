- Product CRUD (MongoDB)
- User Registration & Login (MySQL + bcrypt)
- Order Management API
- Third-Party Weather API Integration
- Angular Frontend with Bootstrap
---

#Technologies Used

## Backend
- Node.js
- Express.js
- MongoDB (Products & Orders)
- MySQL (Users)
- bcrypt (Password hashing)
- axios (API integration)

## Frontend
- Angular
- Bootstrap 5
- Angular Services (State management)

## Third-Party API
- OpenWeather API

---
---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

git clone <your-repo-url>

Step 1: Install Dependencies

cd backend
npm install

Step 2: Setup MongoDB

Make sure MongoDB Atlas is running.

Step 3: Setup MySQL

Login to MySQL and create database:

CREATE DATABASE users;

USE users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

Step 4: Start Backend Server

npm start

Server will run at:
http://localhost:5000

Frontend Setup
Step 1: Install Dependencies

cd frontend
npm install

Step 2: Install Bootstrap

npm install bootstrap

Add in angular.json:

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]


Step 3: Run Angular App

http://localhost:4200

API Endpoints
Products (MongoDB)
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product


Users (MySQL)
Method	Endpoint	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user

Orders (MongoDB)
Method	Endpoint	Description
POST	/api/orders	Create order
GET	/api/orders/:id	Get order by ID
PUT	/api/orders/:id	Update order
DELETE	/api/orders/:id	Delete order


Weather API Integration
Method	Endpoint	Description
GET	/api/weather/:city	Get weather by city

