import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangePoint } from './change-point.entity';
import { Repository } from 'typeorm';
import { CreateChangeDto } from './dto/create-change.input';
import { UpdateChangeDto } from './dto/update-change.input';

@Injectable()
export class ChangePointService {
    constructor(
        @InjectRepository(ChangePoint)
        private changePointRepository: Repository<ChangePoint>
    ) { }

    async findAll(): Promise<ChangePoint[]> {
        return await this.changePointRepository.find()
    }

    async findById(id: number): Promise<ChangePoint | string> {
        try {
            // const isChangePointExists = await this.changePointRepository.existsBy({id:id})
            return await this.changePointRepository.findOneByOrFail({ id: id })
        } catch (error) {
            return `Error in finding the entry with id ${id}`
        }

    }

    async create(createChangeDto: CreateChangeDto): Promise<ChangePoint|string> {
        try {
            const newEntry = this.changePointRepository.create({ ...createChangeDto, change_point: new Date()})
            return await this.changePointRepository.save(newEntry)
        } catch (error) {
            return 'Error in creating an change point entry'
        }

    }

    async update(id: number, updateChangeDto: UpdateChangeDto): Promise<ChangePoint | string> {
        try {
            const updateChangePoint = await this.changePointRepository.update(id, updateChangeDto)
            return await this.changePointRepository.findOneByOrFail({ id: id })
        } catch (error) {
            return `Error in updating the change point entry with id ${id}`
        }
    }

    async softDeleteById(id: number): Promise<ChangePoint | string> {
        try {
            const deletedEntry = await this.changePointRepository.softDelete(id)
            return await this.changePointRepository.findOneOrFail({
                where:{
                    id:id
                },
                withDeleted:true
            })

        } catch (error) {
            return `Error in soft deleting the entry with id ${id}`
        }
    }

    async permanentDeleteById(id: number): Promise<ChangePoint | string> {
        try {
            const deletedEntry = await this.changePointRepository.findOneOrFail({
                where:{
                    id:id
                },
                withDeleted:true
            })
            await this.changePointRepository.delete(id)
            return deletedEntry

        } catch (error) {
            return `Error in deleting the entry with id ${id}`
        }
    }

    async restoreById(id:number): Promise<ChangePoint|string>{
        try {
            const restoreEntry = await this.changePointRepository.restore(id)
            return await this.changePointRepository.findOneOrFail({
                where:{
                    id:id
                }
            })
        } catch (error) {
            return `Error in restoring the entry with id ${id}`
        }
    }

}
