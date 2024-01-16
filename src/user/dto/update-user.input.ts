import { IsEnum, IsNotEmpty, MaxLength, MinLength } from "class-validator"
import { UserRole } from "./user-roles"

export class UpdateUserDto{

    @MinLength(3)
    username:string

    password:string

    @MinLength(3)
    name:string

    @IsEnum(UserRole)
    position:UserRole
}