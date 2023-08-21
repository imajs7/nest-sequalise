export const appConfig = {
  PORT: process.env.PORT || 4000,
  HOSTNAME: process.env.HOSTNAME || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USERNAME: process.env.DB_USERNAME || 'rezolve',
  DB_PASSWORD: process.env.DB_PASSWORD || 'rezolve@1A',
  DB_DATABASE: process.env.DB_DATABASE || 'testdb',
  DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE || true,
  DB_DIALECT: process.env.DB_DIALECT || 'postgres',
};
