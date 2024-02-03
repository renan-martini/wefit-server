import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/appError";

export const validateSchemaMiddleware =
  (schema: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = request.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      request.body = validatedData;
      next();
    } catch (err: any) {
      throw new AppError(400, err.errors?.join(", "));
    }
  };
