import { Test, TestingModule } from '@nestjs/testing';
import { SevenController } from './seven.controller';
import { SevenService } from './seven.service';

describe('SevenController', () => {
  let controller: SevenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SevenController],
      providers: [SevenService],
    }).compile();

    controller = module.get<SevenController>(SevenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
