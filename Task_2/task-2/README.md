-----

# Task 2 – React App with Debounce & Optimized Rendering

A simple React app that demonstrates:

  * Debounced search input
  * Optimized rendering with `useMemo` and `useCallback`
  * Proper loading, error, and empty states
  * API data fetching (TMDB API)
  * Reusable components (`Loading`, `Error`, `Empty`)

-----

## 🚀 Features

  
  * Debounced input to reduce API calls
  * Optimized re-renders with React hooks
  * Search movies from **TMDB API**
  * Loading spinner, error handling, and empty results UI
  * Random placeholder image for movies without posters

-----

## ⚙️ Setup Instructions

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/movie-search-task.git
    cd movie-search-task
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Setup environment variables**
    Create a `.env` file in the project root: I have attached my API credentials if you want to quickly test the app in `.env.example` just copy paste it in `.env`

    ```bash
    VITE_TMDB_API_KEY = your_tmdb_api_key_here
    VITE_TMDB_API_READ_ACCESS_TOKEN = your_tmdb_api_key_here
    ```

    👉 Get a free API key from [TMDB](https://www.themoviedb.org/).

4.  **Run the development server**

    ```bash
    npm run dev
    ```

-----

## 🧪 Testing the App

  * Open your browser at `http://localhost:5173/`
  * Type in the search bar (e.g., "Batman", "Inception").
  * Observe:
      * **Loading spinner** while fetching
      * **Error message** if something fails
      * **Empty state** if no movies are found
      * **Movie cards** with poster images
        (random placeholder used if no poster exists)

-----

## 📸 Example

  * Search: `Spider-Man`

-----