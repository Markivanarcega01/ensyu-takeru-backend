import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePartNumberDto } from './dto/create-number.input';
import { UpdatePartNumberDto } from './dto/update-number.input';
import { PartNumber } from './part-number.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartNumberService {
    constructor(
        @InjectRepository(PartNumber)
        private partNumberRepository: Repository<PartNumber>
    ) { }

    async findAll(): Promise<PartNumber[]> {
        return await this.partNumberRepository.find()
    }

    async findById(id: number): Promise<PartNumber | string> {
        try {
            return await this.partNumberRepository.findOneByOrFail({ id: id })
        } catch (error) {
            return `Cannot find Part number with id ${id}`
        }

    }

    async create(partNumber: CreatePartNumberDto): Promise<PartNumber | string> {
        const ifPartNumberAlreadyExists = await this.partNumberRepository.existsBy({ part_number: partNumber.part_number })
        if (ifPartNumberAlreadyExists) {
            return 'Part number already exists'
        }
        try {
            const newPartNumber = this.partNumberRepository.create(partNumber)
            await this.partNumberRepository.save(newPartNumber)
            return 'Part number added'
        } catch (error) {
            return 'Error in creating new part number'
        }

    }

    async update(id: number, partNumber: UpdatePartNumberDto): Promise<PartNumber | string> {
        try {
            const updatePartNumber = await this.partNumberRepository.update(id, partNumber)
            //return await this.partNumberRepository.findOneByOrFail({ id: id })
            return 'Part number is updated'
        } catch (error) {
            return `Error in updating the Part number`
        }
    }

    async deleteById(id: number): Promise<PartNumber | string> {
        try {
            const deletedPartNumber = await this.partNumberRepository.findOneByOrFail({ id: id })
            await this.partNumberRepository.delete(id)

            return deletedPartNumber
        } catch (error) {
            return `Part number does not exists with ${id}`
        }
    }
}
