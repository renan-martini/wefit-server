import { Express } from "express";
import { profileRoutes } from "./profile.routes";

export const appRoutes = (app: Express) => {
  app.use("/profile", profileRoutes);
};
