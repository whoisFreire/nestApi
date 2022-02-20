import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { updateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() user): User {
    return this.userService.create(user);
  }

  @Put(':id')
  updateUser(
    @Body() updatedInfo: updateUserDto,
    @Param('id') id: number,
  ): Promise<User> {
    return this.userService.update(updatedInfo, id);
  }
}
