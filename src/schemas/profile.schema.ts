import * as yup from "yup";
import { Validator } from "../utils/Validators.utils";
import { ProfileType } from "../entities/Profile.entity";
import { addressSchema } from "./address.schema";

export const profileSchema = yup.object().shape({
  profileType: yup.string().required().oneOf([ProfileType.PF, ProfileType.PJ]),
  cnpj: yup
    .string()
    .nullable()
    .when(["profileType"], ([profileType], schema) =>
      schema.transform((ogValue) =>
        profileType == ProfileType.PJ ? ogValue : null
      )
    )
    .test(
      "test-invalid-cnpj",
      "Invalid CNPJ. Must match: 12.123.123/1234-12",
      (cnpj, ctx) => {
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/g;
        return !!(ctx.parent.profileType === ProfileType.PJ
          ? cnpj?.match(regex) && Validator.CNPJ(cnpj)
          : true);
      }
    ),
  cpf: yup
    .string()
    .required()
    .test(
      "test-invalid-cpf",
      "Invalid CPF. Must match: 123.123.123-12",
      (cpf) => {
        const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g;
        return !!(cpf.match(regex) && Validator.CPF(cpf));
      }
    ),
  name: yup.string().required(),
  cellphone: yup
    .string()
    .required()
    .matches(
      /^\+[1-9]\d{6,14}$/,
      "A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234."
    ),
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^\+[1-9]\d{6,14}$/,
      "A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234."
    ),
  email: yup.string().required().email(),
  address: addressSchema,
});
