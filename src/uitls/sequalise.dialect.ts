import { Sequelize } from 'sequelize';

export function mapDialect(dialectString: string): string {
  switch (dialectString.toLowerCase()) {
    case 'mysql':
      return 'mysql';
    case 'postgres':
      return 'postgres';
    // Add cases for other dialects as needed
    default:
      throw new Error(`Unsupported dialect: ${dialectString}`);
  }
}
