import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { profileSchema } from "../schemas/profile.schema";
import { ProfileControllers } from "../controllers/profile";

const routes = Router();
export const profileRoutes = () => {
  routes.post(
    "/",
    validateSchemaMiddleware(profileSchema),
    ProfileControllers.create
  );
  return routes;
};
