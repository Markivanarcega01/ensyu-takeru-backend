import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Login } from './dto/login.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find()
    }

    async findById(id: number): Promise<User | string> {
        try {
            return await this.userRepository.findOneByOrFail({ id: id })
        } catch (error) {
            return `Cannot find user with id ${id}`
        }
    }

    async findByUsernameAndPassword(credentials: Login): Promise<User | string> {
        try {
            return await this.userRepository.findOneByOrFail(credentials)
        } catch (error) {
            return `Cannot find user with user: ${credentials.username}`
        }
    }

    async create(user: CreateUserDto): Promise<User | string> {
        const ifUsernameAlreadyExists = await this.userRepository.existsBy({ username: user.username })
        if (ifUsernameAlreadyExists) {
            return 'Username already exists'
        }
        try {
            const newUser = this.userRepository.create(user)
            await this.userRepository.save(newUser)
            return 'User added succesfully'
        } catch (error) {
            return 'Error in creating a new user'
        }

    }

    async update(id: number, user: UpdateUserDto): Promise<User | string> {


        try {
            const update = user
            if ('password' in update && !user.password) { // if user.password is empty/null delete the property
                delete update.password
            }
            await this.userRepository.update(id, update)

            //return await this.userRepository.findOneByOrFail({ id: id })
            return `User updated successfully`

        } catch (error) {
            const ifUsernameAlreadyExists = await this.userRepository.existsBy({ username: user.username })
            if (ifUsernameAlreadyExists) {
                return 'Username already exists'
            }
            return `Error in updating the user with id ${id}`
        }

    }

    async deleteById(id: number): Promise<User | string> {
        try {
            const deletedUser = this.userRepository.findOneByOrFail({ id: id })
            await this.userRepository.delete(id)

            return (await deletedUser).username
        } catch (error) {
            return `User does not exists with ${id}`
        }

    }


}
