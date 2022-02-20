import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  create(dto: CreateUserDto): User {
    const user = this.usersRepository.create(dto);
    this.usersRepository.save(user);
    return user;
  }

  async update(dto: updateUserDto, id: number): Promise<User> {
    await this.usersRepository.findOneOrFail(id);
    await this.usersRepository.update({ id }, dto);
    return await this.usersRepository.findOneOrFail(id);
  }
}
