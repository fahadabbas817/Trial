# Task 1: Cursor Pagination API

A simple Node.js and Express API demonstrating cursor-based pagination with MongoDB.

-----

## How to Run

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Environment Variables**
    Create a `.env` file in the root directory and add your MongoDB connection string:

    ```
    MONGO_URI=your_mongodb_connection_string_here
    ```

3.  **Seed the Database**
    To populate the database with dummy data for testing, run:

    ```bash
    npm run dummy
    ```

4.  **Start the Server**

    ```bash
    npm run dev
    ```

    The server will start, typically on `http://localhost:4000`.

-----

## API Testing

You can test the API using tools like Postman, Insomnia, or directly in your web browser.

**Endpoint**: `GET /api/tasks`

### Query Parameters:

  * `limit` (optional): The number of documents to return per page. **Default is 10**.
  * `nextCursor` (optional): The cursor (the `_id` of the last item from the previous page) to fetch the next set of results.

### Examples:

  * **To get the first page (e.g., 5 items):**

    ```
    http://localhost:5000/api/tasks?limit=5
    ```

    The JSON response will include a `nextCursor` value.

  * **To get the next page:**
    Copy the `nextCursor` value from the previous response and use it in the next request.

    ```
    http://localhost:5000/api/tasks?limit=5&nextCursor=631c1b4e4f8d7d4f9e1b2a3c
    ```"# tasks" 



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