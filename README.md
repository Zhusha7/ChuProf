# Psychotherapist Website

[![.NET](https://img.shields.io/badge/.NET-9.0.3-green)](https://dotnet.microsoft.com/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.2-orange)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)

#### A professional psychotherapist's website with a **React + Vite** frontend and an **ASP.NET Core MVC** backend.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Development Setup](#-development-setup)
  - [API (Back-end)](#api-back-end)
  - [Client (Front-end)](#client-front-end)
- [License](#-license)


---

## 📝 Overview

This repository contains the source code for a psychotherapist’s website:

- **Front-end**: React application bootstrapped with Vite, written in TypeScript.
- **Back-end**: ASP.NET Core MVC web API hosted on Azure using Kestrel.

The application provides scheduling, informational pages, and secure communication channels tailored for a psychotherapy practice.

---

## ⚙️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Hosting     | Azure (Kestrel)                   |
| Back-end    | .NET Core MVC                     |
| Front-end   | React + Vite                      |
| Languages   | C#, TypeScript                    |
| HTTP Client | Axios                             |
| Routing     | React Router                      |
| Build Tool  | Vite                              |

---

## 🛠 Prerequisites

Ensure you have the following installed:

- [.NET SDK 6.0 or later](https://dotnet.microsoft.com/download)
- [Node.js 16 or later](https://nodejs.org/)
- npm (bundled with Node.js)

---

## 🚀 Development Setup

### API (Back-end)

```bash
# Navigate to API directory
git clone https://github.com/Zhusha7/ChuProf.git
cd api

# Restore dependencies
dotnet restore

# Run the API
dotnet run
```

The API will be available at `https://localhost:5001` by default (Kestrel).


### Client (Front-end)

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

The React app will be served at `http://localhost:3000` by default.

---

## 📜 License

```text
Copyright (c) 2025 Andžej Siniakovas

All rights reserved.

This code repository is provided strictly for personal reference and demonstration purposes.

Authorized Users:
- Andžej Siniakovas (the author)
- Ekaterina Chulkova (Екатерина Чулкова)

Permissions for all other users:
- You may view and read the source code for personal, non-commercial educational purposes only.
- You may NOT copy, modify, reproduce, redistribute, sublicense, or use this code or any portion of it in any personal, academic, or commercial project.

No license or usage rights are granted beyond what is explicitly stated.

Violation of these terms may constitute infringement of copyright and will be pursued accordingly.
```