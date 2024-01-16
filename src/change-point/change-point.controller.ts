import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ChangePointService } from './change-point.service';
import { CreateChangeDto } from './dto/create-change.input';
import { UpdateChangeDto } from './dto/update-change.input';

@Controller('change-point')
export class ChangePointController {
    constructor(private changePointService: ChangePointService) {}

    @Get()
    findAllChangePoints(){
        return this.changePointService.findAll()
    }

    @Get(':id')
    findChangePointById(@Param('id',ParseIntPipe) id:number){
        return this.changePointService.findById(id)
    }

    @Post()
    createChangePoint(@Body() createChangeDto:CreateChangeDto){
        return this.changePointService.create(createChangeDto)
    }

    @Patch(':id')
    updateChangePoint(@Param('id',ParseIntPipe) id:number, @Body() updateChangeDto:UpdateChangeDto){
        return this.changePointService.update(id,updateChangeDto)
    }

    @Delete(':id')
    softDeleteChangePoint(@Param('id',ParseIntPipe) id:number){
        return this.changePointService.softDeleteById(id)
    }

    @Delete('archives/:id')
    permanentDeleteChangePoint(@Param('id',ParseIntPipe) id:number){
        return this.changePointService.permanentDeleteById(id)
    }

    @Patch('archives/:id')
    restoreChangePoint(@Param('id',ParseIntPipe) id:number){
        return this.changePointService.restoreById(id)
    }

}
