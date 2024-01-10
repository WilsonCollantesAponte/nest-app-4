import { Module } from '@nestjs/common';
import { SevenService } from './seven.service';
import { SevenController } from './seven.controller';

@Module({
  controllers: [SevenController],
  providers: [SevenService],
})
export class SevenModule {}
