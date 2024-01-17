import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { PartNumberService } from './part-number.service';
import { CreatePartNumberDto } from './dto/create-number.input';
import { UpdatePartNumberDto } from './dto/update-number.input';

@Controller('part-number')
export class PartNumberController {
    constructor(private partNumberService:PartNumberService) {}

    @Get()
    findAllPartNumbers(){
        return this.partNumberService.findAll()
    }

    @Get(':id')
    findAllPartNumberById(@Param('id',ParseIntPipe) id:number){
        return this.partNumberService.findById(id)
    }

    @Post()
    createPartNumber(@Body() createPartNumberDto:CreatePartNumberDto){
        return this.partNumberService.create(createPartNumberDto)
    }

    @Patch(':id')
    updatePartNumber(@Param('id',ParseIntPipe) id:number, @Body() updatePartNumberDto:UpdatePartNumberDto){
        return this.partNumberService.update(id,updatePartNumberDto)
    }

    @Delete(':id')
    deletePartNumberById(@Param('id',ParseIntPipe) id:number){
        return this.partNumberService.deleteById(id)
    }

}
