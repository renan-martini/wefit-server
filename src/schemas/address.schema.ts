import * as yup from "yup";

export const addressSchema = yup.object().shape({
  cep: yup
    .string()
    .required()
    .matches(
      /^\d{5}-\d{3}$/g,
      "Invalid CEP. Must match the following: 12312-123"
    ),
  publicPlace: yup.string().required(),
  number: yup.number().required(),
  complement: yup.string(),
  city: yup.string().required(),
  neighborhood: yup.string().required(),
  state: yup.string().required(),
});
