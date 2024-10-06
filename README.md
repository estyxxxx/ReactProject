# Business Management Website

This project is designed for managing a small business, such as a consultancy or salon. It includes two main components:

1. **Backend**: A Node.js server for managing business data and appointments.
2. **Frontend**: A React application built with Vite for the client-side interface.

## Project Structure

The repository contains:

- `reactProjectServer/` - Node.js backend project
- `meetings-project/` - React + Vite client-side project

## Backend (Node.js)

The backend handles API requests related to business data and appointments.

### Setup

1. Navigate to the `reactProjectServer` directory:
   ```bash
   cd reactProjectServer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### API Endpoints

- `POST /login` - Authenticate a user with `name` and `password`. Returns `200` for valid credentials (`name: "admin"`, `password: "123456"`), otherwise returns `401`.
- `POST /appointment` - Add a new appointment. Checks for appointment availability. Returns `200` if successful, otherwise returns `400` if the time is not available.
- `GET /appointments` - Retrieve a list of all scheduled appointments.
- `POST /service` - Add a new service. Returns `200` if successful, otherwise returns `400` if the service already exists.
- `GET /services` - Retrieve a list of all services.
- `POST /businessData` - Add or update business details. Returns the updated business data.
- `PUT /businessData` - Update business details. Returns the updated business data.
- `GET /businessData` - Retrieve business details.

## Frontend (React + Vite)

The client-side application allows users to interact with business data and schedule appointments.

### Setup

1. Navigate to the `meetings-project` directory:
   ```bash
   cd meetings-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and bundling.
- **MobX**: For state management.
- **Material-UI (MUI)**: For styling and UI components.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.

### Features

#### Admin Interface

- **Login**: Authenticate with username (`admin`) and password (`123456`).
- **Business Details**: View and edit business information.
- **Service Management**: Add and manage services.
- **Appointment Schedule**: View and manage appointments with color-coded urgency indicators.

#### Customer Interface

- **Service List**: View available services.
- **Appointment Scheduling**: Select a service, provide personal details, and book an appointment with real-time availability checks.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/project-repo.git
   cd project-repo
   ```

2. **Install dependencies for both frontend and backend**:
   ```bash
   cd reactProjectServer
   npm install
   cd ../meetings-project
   npm install
   ```

3. **Run the project**:
    ```bash
    cd ../reactProjectServer
    npm start
    cd ../meetings-project
    npm run dev
    ```

## Usage

- **Business Owner**: Access the admin interface at `/admin`, log in with the credentials, and manage your business details and appointments.
- **Customers**: Access the customer interface at the homepage, view services, and book appointments.
