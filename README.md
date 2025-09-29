# React + Vite

A simple movie search application built with React and Vite, utilizing the YTS movie API.

## Features
- Search for movies by title.
- View movie details on a separate page.
- Client-side routing with React Router.
- Responsive design with Tailwind CSS.

## Technologies Used
- React
- Vite
- React Router
- Tailwind CSS
- YTS Movie API

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone
    cd your-repo-name
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your backend URL:
   ```env
   VITE_BACKEND_URL=https://yts.mx/api/v2
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure
- `src/components`: Contains reusable React components like `MovieCard` and `SearchBar`.
- `src/pages`: Contains page components like `Home` and `Details`.
- `src/services`: Contains API service functions for fetching movie data.
- `src/App.jsx`: Main application component with routing setup.
- `src/main.jsx`: Entry point of the application.

## Link

[`movies.biplavsitaula.com.np`](https://movies.biplavsitaula.com.np/)