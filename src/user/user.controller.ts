import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: { name: string; number: string; email: string }): Promise<any> {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<any> {
    return this.userService.findAll();
  }
}


// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { UserService } from './user.service';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   create(@Body() user: { name: string; number: string; email: string }): Promise<any> {
//     return this.userService.create(user);
//   }

//   @Get()
//   findAll(): Promise<any> {
//     return this.userService.findAll();
//   }
// }