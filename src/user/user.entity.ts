import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./dto/user-roles";
import { ChangePoint } from "src/change-point/change-point.entity";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    username:string

    @Column()
    password:string

    @Column()
    name:string

    @Column()
    position:UserRole

    @OneToMany(()=> ChangePoint, (changePoint) => changePoint.createdByUser)
    entries:[ChangePoint]

    @OneToMany(()=> ChangePoint, (changePoint) => changePoint.deletedByUser)
    deletes:[ChangePoint]

}
