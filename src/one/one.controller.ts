import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OneService } from './one.service';
import { CreateOneDto } from './dto/create-one.dto';
import { UpdateOneDto } from './dto/update-one.dto';

@Controller('one')
export class OneController {
  constructor(private readonly oneService: OneService) {}

  @Post()
  create(@Body() createOneDto: CreateOneDto) {
    return this.oneService.create(createOneDto);
  }

  @Get()
  findAll() {
    return this.oneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOneDto: UpdateOneDto) {
    return this.oneService.update(+id, updateOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oneService.remove(+id);
  }
}
