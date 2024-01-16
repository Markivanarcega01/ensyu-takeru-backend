import { IsNotEmpty } from "class-validator"
import { PartNumber } from "src/part-number/part-number.entity"


export class UpdateChangeDto{
    
    @IsNotEmpty()
    part_number:PartNumber

    @IsNotEmpty()
    etr_formula_code:string

    @IsNotEmpty()
    curing_time:number

    @IsNotEmpty()
    setting_temp:number

    @IsNotEmpty()
    actual_temp:number

    @IsNotEmpty()
    initial_trial:string

    @IsNotEmpty()
    comment_trial:string

    @IsNotEmpty()
    mass_production:string

    @IsNotEmpty()
    remarks:string
}