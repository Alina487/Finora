#  Finora

A high-performance, full-stack web application replicating the core features and user experience of the *Zerodha* trading platform. Built with a completely decoupled architecture using the *MERN* ecosystem.

##  Deployed Environments

The project is split into independent microservices fully deployed on *Render*:

*   * Main Web Application (Frontend):* [https://finora-frontend-33rx.onrender.com]
*   * Trading Dashboard Client:* [https://finora-dashboard-df9l.onrender.com]
*   * Core API Server (Backend):* [https://finora-backend-na5s.onrender.com]

---

##  Tech Stack

*   *Frontend Ecosystem:* React, React Bootstrap, Material UI (MUI), Axios
*   *Backend Engine:* Node.js, Express.js
*   *Database Layer:* MongoDB
*   *Security & Auth:* JSON Web Tokens (JWT), CORS, Secure Cross-Domain Cookies

---

##  Repository Architecture

The project is structured as a clean monorepo for independent deployment pipelines:

text
Finora/
├── frontend/     # Public landing pages, entry routing, and marketing views
├── dashboard/    # Interactive trading portal, active portfolio track, and charts
└── backend/      # Core Express engine running on port 8080 (JWT auth & REST APIs)


---

##  Core Engineering Features

*   *End-to-End JWT Auth:* Secure cross-domain session persistence handling protected route locks between separate frontends.
*   *Decoupled Multi-Clients:* Separate client architectures optimized independently for user on-boarding vs. core dashboard functionality.
*   *RESTful Pipelines:* Secure, CORS-enabled API routes serving data consistently across subdomains.

---

##  Quick Local Setup

1. *Clone & Install Dependencies:*
   ```bash
   git clone https://github.com/Alina487/Finora
   cd Finora
   # Run 'npm install' inside /frontend, /dashboard, and /backend folders
   ```

2. *Environment Configuration:*
   Create a .env file inside the backend/ folder:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. *Start Execution:*
   Run npm start inside each respective directory to boot up local development hosts.
