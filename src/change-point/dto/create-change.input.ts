import { IsDate, IsInt, IsNotEmpty } from 'class-validator'
import { PartNumber } from 'src/part-number/part-number.entity'
import { User } from 'src/user/user.entity'

export class CreateChangeDto{ // yung mga properties dapat dito sa DTO is nakabased sa entity file
    
    @IsNotEmpty()
    part_number:PartNumber

    @IsNotEmpty()
    user_id:User

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