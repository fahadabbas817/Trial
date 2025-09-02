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
