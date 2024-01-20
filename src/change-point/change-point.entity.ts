import { PartNumber } from "src/part-number/part-number.entity"
import { User } from "src/user/user.entity"
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class ChangePoint{

    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> PartNumber, (partNumber) => partNumber.change_points)
    part_number:PartNumber

    @ManyToOne(()=> User, (user)=> user.entries)
    createdByUser:User

    @ManyToOne(()=>User, (user)=> user.deletes)
    deletedByUser:User

    @Column() //string
    etr_formula_code:string

    @Column() //seconds
    curing_time:number

    @Column() //celcius
    setting_temp_high:number

    @Column() //celcius
    setting_temp_low:number

    @Column() //celcius
    actual_temp_high:number

    @Column() //celcius
    actual_temp_low:number

    @Column() //created date
    change_point:Date

    @Column() // date
    initial_trial:Date

    @Column()
    comment_trial:string

    @Column() //date
    mass_production:Date

    @Column()
    remarks:string

    @UpdateDateColumn()
    updatedDate: Date

    @DeleteDateColumn()
    deletedDate: Date
}