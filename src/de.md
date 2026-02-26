# Live Code Challenge: Ticket Management System

**Duration:** 60 minutes

---

## Challenge Overview

Build a Ticket Management REST API using Hexagonal Architecture that allows support agents to create and view tickets with proper validation and error handling.

---

## User Story

**As a Support Agent**, I want to create new tickets and view all tickets in the system with proper validation, so that I can track customer issues efficiently while ensuring data quality.

### Acceptance Criteria

**Create Ticket:**

- A ticket is created when `POST /tickets` is called with fields: `title`, `description`, `author`.
- The `title` field is required and must not exceed 200 characters; otherwise error "Title is required and must be ≤ 200 characters" is returned.
- The `description` field is required and must not exceed 1000 characters; otherwise error "Description is required and must be ≤ 1000 characters" is returned.
- The `author` field must be a valid email format (contains `@`); otherwise error "Author must be a valid email address" is returned.
- A `201 Created` status is returned with the created ticket (including auto-generated `id` and `createdAt`) on success.
- A `400 Bad Request` status is returned with error message when any validation fails.
- Validation is performed in the domain layer and stops at the first error encountered.

**View Tickets:**

- All tickets are retrieved when `GET /tickets` is called.
- A `200 OK` status is returned with the list of all tickets in JSON format.
- An empty array `[]` is returned if no tickets exist.
- Each ticket in the response includes: `id`, `title`, `description`, `author`, `createdAt`.

**System Requirements:**

- All data is stored in memory (no database used).
- Hexagonal Architecture pattern is followed (Domain → Application → Adapters).
- Error responses are formatted as `{ "error": "Error message here" }`

---

## Data Model

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Login page not loading",
  "description": "The login page shows blank screen for some users",
  "author": "support@company.com",
  "createdAt": "2026-02-23T10:30:00Z"
}
```

---

## API Endpoints

### Create Ticket

```bash
POST /tickets
Content-Type: application/json

Request:
{
  "title": "Login bug",
  "description": "Users cannot login",
  "author": "agent@company.com"
}

Response 201 Created:
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Login bug",
  "description": "Users cannot login",
  "author": "agent@company.com",
  "createdAt": "2026-02-23T10:30:00Z"
}
```

### List Tickets

```bash
GET /tickets

Response 200 OK:
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Login bug",
    "description": "Users cannot login",
    "author": "agent@company.com",
    "createdAt": "2026-02-23T10:30:00Z"
  }
]
```

### Error Response

```bash
POST /tickets
{
  "title": "",
  "description": "Test",
  "author": "invalid"
}

Response 400 Bad Request:
{
  "error": "Title is required and must be ≤ 200 characters"
}
```
