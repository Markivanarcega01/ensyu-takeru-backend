import { PartNumber } from "src/part-number/part-number.entity"
import { User } from "src/user/user.entity"
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class ChangePoint{

    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> PartNumber, (partNumber) => partNumber.change_points)
    part_number:PartNumber

    @ManyToOne(()=> User, (user)=> user.entries)
    user_id:User

    @Column()
    etr_formula_code:string

    @Column()
    curing_time:number

    @Column()
    setting_temp:number

    @Column()
    actual_temp:number

    @Column()
    change_point:Date

    @Column()
    initial_trial:string

    @Column()
    comment_trial:string

    @Column()
    mass_production:string

    @Column()
    remarks:string

    @UpdateDateColumn()
    updatedDate: Date

    @DeleteDateColumn()
    deletedDate: Date
}