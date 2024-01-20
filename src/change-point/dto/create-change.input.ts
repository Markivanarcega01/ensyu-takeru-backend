import { IsDate, IsInt, IsNotEmpty } from 'class-validator'
import { PartNumber } from 'src/part-number/part-number.entity'
import { User } from 'src/user/user.entity'

export class CreateChangeDto{ // yung mga properties dapat dito sa DTO is nakabased sa entity file
    
    @IsNotEmpty() //Excel generate filter
    part_number:PartNumber

    // @IsNotEmpty()
    // user_id:User

    @IsNotEmpty()
    createdByUser:User

    @IsNotEmpty() //Excel generate filter
    etr_formula_code:string

    @IsNotEmpty()
    curing_time:number

    @IsNotEmpty()
    setting_temp_high:number

    @IsNotEmpty()
    setting_temp_low:number

    @IsNotEmpty()
    actual_temp_high:number

    @IsNotEmpty()
    actual_temp_low:number

    @IsNotEmpty()
    change_point:Date

    @IsNotEmpty()
    initial_trial:Date

    @IsNotEmpty()
    comment_trial:string

    @IsNotEmpty()
    mass_production:Date

    @IsNotEmpty()
    remarks:string
}