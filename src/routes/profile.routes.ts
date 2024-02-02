import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { profileSchema } from "../schemas/profile.schema";

const routes = Router();
export const profileRoutes = () => {
  routes.post("/", validateSchemaMiddleware(profileSchema));
  return routes;
};
