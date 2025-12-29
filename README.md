# Fiverr Trending Gigs Project

This project is a full-stack application designed to scrape and display trending gigs from Fiverr based on user-defined criteria such as category, country, and price range. The backend is built with Node.js and TypeScript using Express, while the frontend is a simple HTML, CSS, and JavaScript interface.

## 🚀 Features

*   **Node.js + TypeScript Backend:** Robust and type-safe server-side logic using Express.
*   **HTML + CSS + JS Frontend:** A straightforward web interface for user interaction.
*   **Web Scraper:** Utilizes `axios` for HTTP requests and `cheerio` for parsing HTML to extract gig data from Fiverr.
*   **API Endpoint:** Provides a `/api/trending` endpoint to fetch trending gigs.
*   **User Input:** Allows users to specify category, country (optional), minimum price, and maximum price.
*   **Trending Score Calculation:** Gigs are assigned a "trending score" based on ratings, reviews, and price, then sorted accordingly.
*   **Fully Typed & Clean Architecture:** Emphasizes maintainability and readability with TypeScript interfaces and a structured codebase.

## 📁 Project Structure

```
fiverr-trending-ts/
│
├── src/
│   ├── index.ts        # Express server setup and API routes
│   ├── scraper.ts      # Web scraping logic and trending score calculation
│   └── types.ts        # TypeScript interfaces and type definitions
│
├── public/
│   ├── index.html      # Frontend HTML page
│   ├── styles.css      # Frontend styling
│   └── script.js       # Frontend JavaScript for API interaction and UI updates
│
├── tsconfig.json       # TypeScript compiler configuration
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## ⚙️ Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Navigate to the project directory:**
    ```bash
    cd fiver-ts
    ```

2.  **Install dependencies:**
    This command will install all the necessary Node.js packages as listed in `package.json`.
    ```bash
    npm install
    ```

## ▶️ Running the Project

### Development Mode

To run the project in development mode with live reloading (using `ts-node-dev`):

```bash
npm run dev
```

The server will start, and you can access the application in your web browser at:
`http://localhost:4000`

### Production Build

To build the TypeScript code into JavaScript and then run the compiled application:

1.  **Build the project:**
    ```bash
    npm run build
    ```

2.  **Start the server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:4000`.

## 🌐 API Endpoint

The backend exposes a single API endpoint:

*   **GET `/api/trending`**
    *   **Description:** Fetches a list of trending Fiverr gigs based on provided criteria.
    *   **Query Parameters:**
        *   `category` (required): The gig category to search for (e.g., "logo design", "article writing").
        *   `country` (optional): The country to filter gigs by (e.g., "us", "uk"). Defaults to an empty string (no country filter).
        *   `min_price` (required): The minimum price for gigs.
        *   `max_price` (required): The maximum price for gigs.
    *   **Example Request:**
        ```
        GET /api/trending?category=logo%20design&country=us&min_price=5&max_price=50
        ```
    *   **Response:** An array of `Gig` objects, sorted by `trending_score` in descending order.

## 💻 Frontend Usage

Open `http://localhost:4000` in your browser.

1.  Enter a **Category** (e.g., "logo design").
2.  Optionally, enter a **Country** (e.g., "us").
3.  Enter **Min Price** and **Max Price**.
4.  Click the "Search" button to fetch and display trending gigs in the table below.

## 🌐 Deployment

### Important: GitHub Pages Note
**GitHub Pages** only supports static hosting (HTML, CSS, JS). Since this project has a **Node.js/Express backend**, it cannot be hosted entirely on GitHub Pages.

### Recommended Deployment Options
1.  **Render / Railway / Render:** These platforms support full-stack Node.js applications. You can connect your GitHub repository, and they will automatically build and deploy both the frontend and backend.
2.  **Vercel:** Excellent for frontend and can handle the backend using Serverless Functions (requires moving the `api` logic).
3.  **Split Hosting:** 
    *   **Frontend:** Host the `public` folder on GitHub Pages.
    *   **Backend:** Host the Express server on Render/Railway.
    *   *Note:* If you split hosting, you must update the `fetch()` URLs in `public/script.js` from relative paths (e.g., `/api/trending`) to absolute paths (e.g., `https://your-backend-url.com/api/trending`).

## 🛠️ Technologies Used

*   **Backend:** Node.js, TypeScript, Express, Axios, Cheerio
*   **Frontend:** HTML, CSS, JavaScript
*   **Development Tools:** `ts-node-dev`, `typescript`
