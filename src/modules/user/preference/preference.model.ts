import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Preference extends Model {
  @Column({ defaultValue: '' })
  myMenu: string;

  @Column({ defaultValue: false })
  darkTheme: boolean;

  @Column({ defaultValue: 'blue' })
  themeColor: string;

  @Column({ defaultValue: true })
  isAvailable: boolean;
}
