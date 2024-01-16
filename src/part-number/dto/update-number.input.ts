import { IsNotEmpty } from "class-validator"

export class UpdatePartNumberDto{

    @IsNotEmpty()
    part_number:string

    @IsNotEmpty()
    ecn_number: string

    @IsNotEmpty()
    material:string
}