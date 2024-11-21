import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { DeleteUserDto } from './dtos/delete-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/profile')
  async findByUsername(@Query('username') username: string) {
    return await this.userService.findByUsername(username);
  }

  @Post('/new')
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  // @Patch('/update')
  // async updateUser(@Body() newData: UpdateUserDto, @CurrentUser() user: UserPayload) {
  //   return await this.userService.updateUser(newData, currentUser.id);
  // }

  @Delete('delete')
  async deleteUser(@Body() user: DeleteUserDto) {
    return await this.userService.deleteUser(user.id);
  }
}
