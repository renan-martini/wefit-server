import { InferType } from "yup";
import { profileSchema } from "../../schemas/profile.schema";
import AppDataSource from "../../data-source";
import { Profile } from "../../entities/Profile.entity";
import { Address } from "../../entities/Address.entity";
import { AppError } from "../../errors/appError";

export class ProfileServices {
  static profileRepository = AppDataSource.getRepository(Profile);
  static addressRepository = AppDataSource.getRepository(Address);

  static async create({ address, ...data }: InferType<typeof profileSchema>) {
    const profile = this.profileRepository.create(data);
    await this.profileRepository.save(profile).catch((e) => {
      if (e.code == "ER_DUP_ENTRY" || e.errno == 1062) {
        throw new AppError(
          409,
          "Unique constraint error for email, cpf or cnpj"
        );
      }
    });

    const createdAddress = this.addressRepository.create({
      ...address,
      profile,
    });
    await this.addressRepository.save(createdAddress);
    const { profile: _excludedProfile, ...returnAddress } = createdAddress;
    return { ...profile, address: returnAddress };
  }
}
