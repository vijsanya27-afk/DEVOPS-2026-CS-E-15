# Module 2 (M2) - Component & Flow Documentation

## 1. Overview
Module 2 focuses on User Management, Dashboard view, Skill Listings, Search & Filtering, and handling Skill Exchange workflows within the Skill Exchange Platform.

---

## 2. Directory & Component Hierarchy
- **`src/pages/`**
  - `Dashboard`: Renders user overview, active requests, and primary platform stats.
  - `Skills`: Handles user skills (Skills Offered vs. Skills Wanted) and proficiency levels.
  - `Search`: Provides real-time skill searching, category filtering, and user matching.
  - `Profile`: Manages user bio, contact details, profile photo, and skill updates.

- **`src/components/`**
  - Reusable UI elements including navigation bars, skill cards, status badges, action buttons, and modal popups.

- **`src/routes/` / `App.jsx`**
  - Defines client-side routing and protected view layouts.

---

## 3. Key User Workflows

### Skill Search & Exchange Request Flow
1. **Discover:** User searches for a required skill via the Search page (`/search`) using text filters or categories.
2. **Select:** User views matched profiles and clicks **Request Exchange**.
3. **Submit:** A modal overlay appears allowing the user to select an offering skill and attach a message.
4. **State Transition:** Upon submission, the request status updates to `Pending` and triggers a notification for the recipient.
5. **Connect:** Once accepted, contact details or internal chat features unlock for scheduling the session.

---

## 4. Setup & Build Instructions

### Installation
```bash
npm install