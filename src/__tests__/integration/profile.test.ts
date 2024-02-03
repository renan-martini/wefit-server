import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../index";
import { pfProfile, pjProfile } from "../mocks/profile.mock";

describe("Registro de Perfil", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then(async (db) => {
        await db.synchronize();
        connection = db;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("POST /profile -  Must be able to create a Profile of Buyer", async () => {
    const response = await request(app).post("/profile").send(pfProfile);
    expect(response.body).toHaveProperty("profileType");
    expect(response.body).toHaveProperty("cnpj");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("phoneNumber");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("address.cep");
    expect(response.body).toHaveProperty("address.publicPlace");
    expect(response.body).toHaveProperty("address.number");
    expect(response.body).toHaveProperty("address.city");
    expect(response.body).toHaveProperty("address.neighborhood");
    expect(response.body).toHaveProperty("address.state");
    expect(response.body).toHaveProperty("address.id");
    expect(response.body).toHaveProperty("address.createdAt");

    expect(response.body.profileType).toEqual(pfProfile.profileType);
    expect(response.body.cnpj).toBeNull();
    expect(response.body.name).toEqual(pfProfile.name);
    expect(response.body.cellphone).toEqual(pfProfile.cellphone);
    expect(response.body.phoneNumber).toEqual(pfProfile.phoneNumber);
    expect(response.body.email).toEqual(pfProfile.email);
    expect(response.body.address.cep).toEqual(pfProfile.address.cep);
    expect(response.body.address.publicPlace).toEqual(
      pfProfile.address.publicPlace
    );
    expect(response.body.address.number).toEqual(pfProfile.address.number);
    expect(response.body.address.city).toEqual(pfProfile.address.city);
    expect(response.body.address.neighborhood).toEqual(
      pfProfile.address.neighborhood
    );
    expect(response.body.address.state).toEqual(pfProfile.address.state);
    expect(response.status).toBe(201);
  });

  it("POST /profile -  Must be able to create a Profile of Seller", async () => {
    const response = await request(app).post("/profile").send(pjProfile);
    expect(response.body).toHaveProperty("profileType");
    expect(response.body).toHaveProperty("cnpj");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("phoneNumber");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("address.cep");
    expect(response.body).toHaveProperty("address.publicPlace");
    expect(response.body).toHaveProperty("address.number");
    expect(response.body).toHaveProperty("address.city");
    expect(response.body).toHaveProperty("address.neighborhood");
    expect(response.body).toHaveProperty("address.state");
    expect(response.body).toHaveProperty("address.id");
    expect(response.body).toHaveProperty("address.createdAt");

    expect(response.body.profileType).toEqual(pjProfile.profileType);
    expect(response.body.cnpj).toEqual(pjProfile.cnpj);
    expect(response.body.name).toEqual(pjProfile.name);
    expect(response.body.cellphone).toEqual(pjProfile.cellphone);
    expect(response.body.phoneNumber).toEqual(pjProfile.phoneNumber);
    expect(response.body.email).toEqual(pjProfile.email);
    expect(response.body.address.cep).toEqual(pjProfile.address.cep);
    expect(response.body.address.publicPlace).toEqual(
      pjProfile.address.publicPlace
    );
    expect(response.body.address.number).toEqual(pjProfile.address.number);
    expect(response.body.address.city).toEqual(pjProfile.address.city);
    expect(response.body.address.neighborhood).toEqual(
      pjProfile.address.neighborhood
    );
    expect(response.body.address.state).toEqual(pjProfile.address.state);
    expect(response.status).toBe(201);
  });
});
