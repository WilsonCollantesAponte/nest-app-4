import { Controller } from '@nestjs/common';
import { SevenService } from './seven.service';

@Controller('seven')
export class SevenController {
  constructor(private readonly sevenService: SevenService) {}
}
