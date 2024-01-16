import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { User } from './user.entity';
import { Login } from './dto/login.input';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){}

    @Get()
    findAllUsers():Promise<User[]>{
        return this.userService.findAll()
    }

    @Get(':id')
    findUserById(@Param('id',ParseIntPipe) id:number):Promise<User|string>{
        return this.userService.findById(id)
    }

    @Post('login')
    login(@Body() credentials:Login):Promise<User|string>{
        return this.userService.findByUsernameAndPassword(credentials)
    }

    @Post()
    createUser(@Body() createUserDto:CreateUserDto):Promise<User|string>{
        return this.userService.create(createUserDto)
    }

    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto):Promise<User|string>{
        return this.userService.update(id,updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number):Promise<User|string>{
        return this.userService.deleteById(id)
    }


}
