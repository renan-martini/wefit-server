import { Request, Response } from "express";
import { InferType } from "yup";
import { profileSchema } from "../../schemas/profile.schema";
import { ProfileServices } from "../../services/profiles";

export class ProfileControllers {
  static async create(request: Request, response: Response) {
    // #swagger.tags = ['Profile']
    // #swagger.description = 'Endpoint for Profile creation. All fields are required except by cnpj on "pf" profiles. Remember to use valid cpf and cnpj values on the respective formats'

    /* #swagger.parameters['ProfileInput'] = {
               in: 'body',
               description: 'Profile info',
               required: true,
               schema: { $ref: "#/definitions/ProfileInput" }
        }      
    */

    /* #swagger.responses[201] = {
            description: 'Profile created successfully',
            schema: { $ref: '#/definitions/Profile' }
    } */

    const data: InferType<typeof profileSchema> = request.body;

    const profile = await ProfileServices.create(data);

    return response.status(201).json(profile);
  }
}
