import express from "express";
import cors from "cors";
import path from "path";
import { getTrending } from "./scraper";
import { PAID_COUNTRIES } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.get("/api/countries", (req, res) => {
  res.json(PAID_COUNTRIES);
});

app.get("/api/trending", async (req, res) => {
  const { category, country = "", min_price, max_price } = req.query;

  if (!category || !min_price || !max_price) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const minPriceNum = Number(min_price);
  const maxPriceNum = Number(max_price);

  if (isNaN(minPriceNum) || isNaN(maxPriceNum)) {
    return res.status(400).json({ error: "Price must be a valid number" });
  }

  try {
    const results = await getTrending(
      String(category),
      String(country),
      minPriceNum,
      maxPriceNum
    );
    return res.json(results);
  } catch (error) {
    console.error("Error scraping Fiverr:", error);
    return res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
