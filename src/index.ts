import express from "express";
import AppDataSource from "./data-source";

const app = express();

const port = process.env.PORT || 4568;

app.get("/ping", (req, res) => {
  return res.send("pong");
});

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
  });
})();
