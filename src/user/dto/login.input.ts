import {  IsNotEmpty } from "class-validator"

export class Login{

    @IsNotEmpty()
    username:string

    @IsNotEmpty()
    password:string
}