import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Preference } from './preference/preference.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Preference)
    private preferenceModel: typeof Preference,
  ) {}

  async findAllPreferences(): Promise<Preference[]> {
    return this.preferenceModel.findAll();
  }

  async createPreference(): Promise<Preference> {
    return this.preferenceModel.create({
      myMenu: 'menu1, menu2, menu3',
      darkTheme: true,
      isAvailable: true,
    });
  }
}
