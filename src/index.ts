import "express-async-errors";
import express from "express";
import AppDataSource from "./data-source";
import { appRoutes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./doc/swagger_output.json";
import swaggerAutogen from "swagger-autogen";

const app = express();
app.use(express.json());

const port = process.env.PORT || 4568;

app.get("/ping", (_, res) => {
  return res.send("pong");
});

appRoutes(app);

app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerFile));

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
