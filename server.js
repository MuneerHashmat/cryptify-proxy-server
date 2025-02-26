const express = require("express");
const cors = require("cors");
const api = require("./config/axiosInstance");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/all-cryptos/:currency", async (req, res) => {
  const { currency } = req.params;
  try {
    const response = await api.get(`markets`, {
      params: { vs_currency: currency },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching crypto data:", error.message);
    if (error.code === "ECONNABORTED") {
      return res.status(504).json({ error: "Request timeout!" });
    }
    console.log();

    res.status(500).json({ error: "Error fetching crypto data" });
  }
});

app.get("/api/v1/crypto-detail/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await api.get(`${id}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching crypto details:", error.message);
    res.status(500).json({ error: "Error fetching crypto details" });
  }
});

app.get("/api/v1/crypto-historical-data/:id/:currency", async (req, res) => {
  const { id, currency } = req.params;

  try {
    const response = await api.get(`${id}/market_chart`, {
      params: { vs_currency: currency, days: 7, interval: "daily" },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching historical data:", error.message);
    res.status(500).json({ error: "Error fetching historical data" });
  }
});

app.listen(5000, () => {
  console.log("Server is up and running at port 5000");
});
