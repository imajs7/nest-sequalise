import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: appConfig.HOSTNAME,
      port: Number(appConfig.DB_PORT),
      username: appConfig.DB_USERNAME,
      password: appConfig.DB_PASSWORD,
      database: appConfig.DB_DATABASE,
      autoLoadModels: true,
      synchronize: Boolean(appConfig.DB_SYNCHRONIZE),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
