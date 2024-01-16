import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

import { PartNumberModule } from './part-number/part-number.module';
import { PartNumber } from './part-number/part-number.entity';
import { PartNumberController } from './part-number/part-number.controller';
import { PartNumberService } from './part-number/part-number.service';

import { ChangePoint } from './change-point/change-point.entity';
import { ChangePointModule } from './change-point/change-point.module';
import { ChangePointController } from './change-point/change-point.controller';
import { ChangePointService } from './change-point/change-point.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,PartNumber,ChangePoint]),
    UserModule, 
    PartNumberModule, 
    ChangePointModule],
  controllers: [AppController, UserController,PartNumberController,ChangePointController],
  providers: [AppService, UserService, PartNumberService,ChangePointService],
})
export class AppModule {}
