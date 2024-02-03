import "express-async-errors";
import express from "express";
import AppDataSource from "./data-source";
import { appRoutes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

const port = process.env.PORT || 4568;

app.get("/ping", (_, res) => {
  return res.send("pong");
});

appRoutes(app);

app.use(errorHandler);

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
  });
})();

export default app;
