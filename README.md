# JavaScript Simple CRUD Application

A full-stack web application for managing groups (Group Management) with Create, Read, Update, and Delete operations.

## Features

- View list of groups
- Create new groups
- Edit existing groups
- Delete groups
- Responsive UI with Material-UI components
- RESTful API backend with PostgreSQL database

## Tech Stack

### Frontend
- React 19.2.0
- Material-UI (MUI) for UI components
- Axios for HTTP requests
- React Scripts for build tooling

### Backend
- Node.js with Express 5.1.0
- PostgreSQL database
- CORS for cross-origin requests
- Dotenv for environment variables
- Nodemon for development

## Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd javascript-simple-crud
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory
   - Add your PostgreSQL connection string and other environment variables

5. Set up the database:
   - Create a PostgreSQL database
   - Run any necessary migrations or seed scripts (if available)

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   The backend will run on http://localhost:3000

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000 (React will use port 3001 if 3000 is occupied)

3. Open your browser and navigate to http://localhost:3000 (or 3001) to access the application

## Project Structure

```
javascript-simple-crud/
├── backend/
│   ├── controller/
│   │   └── groupm_controller.js
│   ├── model/
│   │   └── groupm_model.js
│   ├── repository/
│   │   └── groupm_repository.js
│   ├── router/
│   │   └── groupm_router.js
│   ├── service/
│   │   └── groupm_service.js
│   ├── server/
│   │   └── main.js
│   ├── config/
│   │   └── db.js (assumed)
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GroupmForm.js
│   │   │   └── GroupmList.js
│   │   ├── services/
│   │   │   └── groupmService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── package.json
├── .gitignore
└── README.md
```

## API Endpoints

The backend provides RESTful API endpoints for group management:

- `GET /groupms` - Retrieve all groups
- `POST /groupms` - Create a new group
- `PUT /groupms/:id` - Update an existing group
- `DELETE /groupms/:id` - Delete a group

## Development

- Backend uses Nodemon for automatic restarts during development
- Frontend uses React Scripts with hot reloading
- ESLint is configured for code quality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.