import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { DatabaseService } from '../database.service';

// @Module({
//   providers: [UserService, DatabaseService],
//   controllers: [UserController],
// })
// export class UserModule {}