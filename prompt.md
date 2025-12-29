Great — here is the **full Fiverr Trending Gigs project rebuilt entirely in TypeScript**, using:

---

# 🚀 **TypeScript Full Project**

### ✔ Node.js + TypeScript backend (Express)

### ✔ HTML + CSS + JS frontend

### ✔ Scraper using Axios + Cheerio

### ✔ API endpoint `/api/trending`

### ✔ User input: category, country, min/max price

### ✔ Trending score calculation

### ✔ Fully typed, clean architecture

---

# 📁 **Project Structure (TypeScript Version)**

```
fiverr-trending-ts/
│
├── src/
│   ├── index.ts
│   ├── scraper.ts
│   └── types.ts
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── tsconfig.json
├── package.json
└── package-lock.json
```

---

# 🟦 1) **package.json**

```json
{
  "name": "fiverr-trending-ts",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc"
  },
  "dependencies": {
    "axios": "^1.5.0",
    "cheerio": "^1.0.0",
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^18.7.18",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.1.3"
  }
}
```

Install dependencies:

```
npm install
```

---

# 🟦 2) **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

# 🟦 3) **types.ts**

(Type definitions)

```ts
export interface Gig {
  title: string;
  seller: string;
  country: string;
  rating: number | null;
  reviews: number;
  price: number | null;
  delivery_time: string;
  seller_level: string;
  link: string;
  trending_score?: number;
}
```

---

# 🟦 4) **scraper.ts**

Axios + Cheerio + Trending Score

```ts
import axios from "axios";
import * as cheerio from "cheerio";
import { Gig } from "./types";

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  "Mozilla/5.0 (X11; Linux x86_64)"
];

function getHeader() {
  return {
    "User-Agent": USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
  };
}

export async function scrapeFiverr(
  category: string,
  country: string,
  minPrice: number,
  maxPrice: number,
  maxResults = 30
): Promise<Gig[]> {
  const baseUrl = `https://www.fiverr.com/search/gigs?query=${category}`;
  const gigs: Gig[] = [];

  let page = 1;

  while (gigs.length < maxResults) {
    const url = `${baseUrl}&page=${page}`;

    const response = await axios.get(url, { headers: getHeader() });
    const $ = cheerio.load(response.data);

    const cards = $("a.gig-card-layout, div.gig-card");

    if (cards.length === 0) break;

    cards.each((_, el) => {
      if (gigs.length >= maxResults) return;

      const title = $(el).find(".gig-card-layout-title, h3").text().trim();
      const seller = $(el).find(".seller-name, .seller-link").text().trim();

      const priceText = $(el).find(".price").text().replace("$", "");
      const price = priceText ? Number(priceText) : null;

      if (price && (price < minPrice || price > maxPrice)) return;

      const ratingText = $(el).find(".rating-score").text().trim();
      const rating = ratingText ? Number(ratingText) : null;

      const reviewsText = $(el).find(".ratings-count").text().trim();
      const reviews = reviewsText
        ? Number(reviewsText.replace("(", "").replace(")", ""))
        : 0;

      const link = "https://www.fiverr.com" + $(el).attr("href");

      gigs.push({
        title,
        seller,
        country: "Unknown",
        rating,
        reviews,
        price,
        delivery_time: "Unknown",
        seller_level: "Unknown",
        link
      });
    });

    page++;
  }

  return gigs;
}

export function computeTrendingScore(gig: Gig): number {
  let score = 0;

  if (gig.rating) score += gig.rating * 20;
  score += gig.reviews * 0.5;
  if (gig.price) score += Math.max(0, 100 - gig.price);

  return Number(score.toFixed(2));
}

export async function getTrending(
  category: string,
  country: string,
  minPrice: number,
  maxPrice: number
) {
  const gigs = await scrapeFiverr(category, country, minPrice, maxPrice);

  gigs.forEach((g) => {
    g.trending_score = computeTrendingScore(g);
  });

  gigs.sort((a, b) => (b.trending_score! - a.trending_score!));

  return gigs;
}
```

---

# 🟦 5) **index.ts**

Express + API routes + Static hosting

```ts
import express from "express";
import cors from "cors";
import path from "path";
import { getTrending } from "./scraper";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.get("/api/trending", async (req, res) => {
  const { category, country = "", min_price, max_price } = req.query;

  if (!category || !min_price || !max_price) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const results = await getTrending(
    String(category),
    String(country),
    Number(min_price),
    Number(max_price)
  );

  return res.json(results);
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
```

---

# 🟦 6) **Frontend (public/index.html)**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Fiverr Trending Gigs</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>

<h1>Fiverr Trending Gig Finder</h1>

<div class="form-box">
    <input id="category" type="text" placeholder="Category">
    <input id="country" type="text" placeholder="Country (optional)">
    <input id="min_price" type="number" placeholder="Min Price">
    <input id="max_price" type="number" placeholder="Max Price">
    <button onclick="searchGigs()">Search</button>
</div>

<table id="results-table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Seller</th>
            <th>Rating</th>
            <th>Reviews</th>
            <th>Price</th>
            <th>Score</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<script src="script.js"></script>
</body>
</html>
```

---

# 🟦 7) **Frontend JS (public/script.js)**

```javascript
async function searchGigs() {
    const category = document.getElementById("category").value;
    const country = document.getElementById("country").value;
    const min_price = document.getElementById("min_price").value;
    const max_price = document.getElementById("max_price").value;

    const res = await fetch(`/api/trending?category=${category}&country=${country}&min_price=${min_price}&max_price=${max_price}`);
    const data = await res.json();

    const tbody = document.querySelector("#results-table tbody");
    tbody.innerHTML = "";

    data.forEach(gig => {
        tbody.innerHTML += `
            <tr>
                <td>${gig.title}</td>
                <td>${gig.seller}</td>
                <td>${gig.rating ?? '-'}</td>
                <td>${gig.reviews}</td>
                <td>$${gig.price}</td>
                <td>${gig.trending_score}</td>
                <td><a href="${gig.link}" target="_blank">View</a></td>
            </tr>
        `;
    });
}
```

---

# 🟦 8) **CSS (public/styles.css)**

```css
body {
    font-family: Arial;
    background: #f5f5f5;
    padding: 20px;
}

h1 {
    text-align: center;
}

.form-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

button {
    padding: 8px 15px;
    background: #09f;
    color: white;
    border: none;
    border-radius: 6px;
}

table {
    width: 100%;
    background: white;
    border-collapse: collapse;
}

td, th {
    padding: 10px;
    border: 1px solid #ddd;
}
```

---

# 🚀 **Run the TypeScript Project**

Install dependencies:

```
npm install
```

Run in dev mode:

```
npm run dev
```

Open browser:

```
http://localhost:4000
```

---

