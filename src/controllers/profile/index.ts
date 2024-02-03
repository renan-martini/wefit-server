import { Request, Response } from "express";
import { InferType } from "yup";
import { profileSchema } from "../../schemas/profile.schema";
import { ProfileServices } from "../../services/profiles";

export class ProfileControllers {
  static async create(request: Request, response: Response) {
    const data: InferType<typeof profileSchema> = request.body;

    const profile = await ProfileServices.create(data);

    return response.status(201).json(profile);
  }
}
