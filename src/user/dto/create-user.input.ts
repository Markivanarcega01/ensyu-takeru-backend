import { UserRole } from "./user-roles"
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateUserDto{
    
    @MinLength(3)
    @MaxLength(20)
    username:string
    
    @MinLength(3)
    @MaxLength(20)
    password:string

    @MinLength(3)
    @MaxLength(30)
    name:string

    @IsNotEmpty()
    @IsEnum(UserRole)
    position:UserRole
}