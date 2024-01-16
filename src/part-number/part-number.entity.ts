import { ChangePoint } from "src/change-point/change-point.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class PartNumber{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    part_number:string

    @Column()
    ecn_number:string

    @Column()
    material:string

    @OneToMany(()=> ChangePoint, (changePoint) => changePoint.part_number)
    change_points:[ChangePoint]
}