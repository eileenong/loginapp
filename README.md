# loginapp

A full-stack user management and authentication demo built with **Kotlin Multiplatform** — a single Kotlin codebase shared between a Ktor backend and a Kotlin/JS + React frontend, backed by MongoDB.

## Overview

`loginapp` lets you create users, list them, delete them, and log in/out. It's a small, self-contained project for exploring full-stack development in Kotlin end-to-end: one language across the server, the client, and the shared data models.

## Features

- **User management** — create new users and view/delete existing ones from the UI
- **Authentication** — log in with a username/password, log out, and view the currently authenticated user
- **Shared models** — the `User` data class and API routes are defined once in `commonMain` and used by both the server and the client, so the request/response shapes can never drift out of sync
- **React frontend** — built with Kotlin/JS and the [kotlin-wrappers](https://github.com/JetBrains/kotlin-wrappers) React bindings

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Kotlin, [Ktor](https://ktor.io/) (Netty engine) |
| Frontend | Kotlin/JS, React (via kotlin-wrappers) |
| Database | MongoDB, via [KMongo](https://litote.org/kmongo/) (coroutine driver) |
| Serialization | kotlinx.serialization |
| Build | Gradle (Kotlin Multiplatform plugin) |

## Getting Started

### Prerequisites

- JDK 8+
- [MongoDB](https://www.mongodb.com/) running locally

### Run MongoDB

```bash
brew services start mongodb-community@7.0
```

### Run the app

```bash
./gradlew run
```

This builds the Kotlin/JS frontend, bundles it into the server's static resources, and starts the Ktor server on `http://localhost:9090` (or the port set by the `PORT` environment variable).

## API

| Method | Path | Description |
|---|---|---|
| `GET` | `/userList` | List all users |
| `POST` | `/userList` | Create a new user |
| `DELETE` | `/userList/{id}` | Delete a user by id |
| `POST` | `/authenticate` | Log in with `{ username, password }` |
| `GET` | `/authenticate` | Get the currently logged-in user |
| `GET` | `/logout` | Log out the current user |

Sample requests for these endpoints are in the `.http` files at the repo root (`AddNewUser.http`, `AddUser.http`, `DeleteUser.http`) — runnable directly from IntelliJ/IDEA's HTTP client.

## Known Limitations / Roadmap

This started as a learning project, so a few things are intentionally simplified for now:

- **Passwords are stored and compared in plaintext.** Hashing (e.g. bcrypt) is a planned improvement, not yet implemented.
- **Auth state is a single in-memory variable**, not a per-session token — every client currently shares the same "current user." Moving to JWT-based sessions is planned.
- **No automated tests or CI yet.**

Planned next steps: password hashing, JWT-based sessions, unit/integration test coverage, Dockerized local setup, and CI via GitHub Actions.
