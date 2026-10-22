# Skill Exchange Platform — API & Ownership Notes

**Date:** 19 October 2026  
**Role:** Member 1 — Backend Setup & Authentication
## 1. Existing Repository Inspection

- Frontend is built using React and Vite.
- React Router is used for client-side routing.
- Frontend source code is maintained in the `src/` directory.
- Backend code is maintained separately in the `backend/` directory.
- The backend uses Node.js and Express.
- MongoDB Atlas connection has been tested successfully.
- Existing frontend changes must be preserved.
- Files owned by Member 2 and Member 3 must not be modified.
## 2. Member 1 Ownership

Member 1 is responsible for backend setup and authentication.

- `backend/server.js` — Backend entry point
- `backend/config/db.js` — MongoDB connection
- `backend/models/User.js` — User schema
- `backend/routes/authRoutes.js` — Authentication routes
- `backend/controllers/authController.js` — Authentication logic
- `backend/middleware/authMiddleware.js` — JWT authentication middleware
- Authentication testing and validation

**Team rule:** Do not modify files owned by Member 2 or Member 3.
## 3. API Contract and Current Status

- GET `/` — Backend health-check endpoint.
- The health-check endpoint was tested successfully.
- MongoDB Atlas connection was tested successfully.
- Registration, login, and password-reset endpoints are planned for future tasks and have not been implemented yet.

## 4. Team Coordination Rules

- Work only on tasks assigned to Member 1.
- Do not modify Member 2 or Member 3 files.
- Preserve existing frontend changes.
- Do not commit or push without explicit approval.
- Keep `.env` credentials and JWT secrets private.

## 5. Status Through 21 October

- [x] 19 October: Existing repository inspected and API/ownership notes drafted.
- [x] 20 October: Backend folder and required dependencies set up.
- [x] 21 October: Environment variables configured and MongoDB Atlas connection verified.

**Pending:** Authentication APIs and User model are outside the scope of this status report.