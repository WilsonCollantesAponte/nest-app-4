import { Test, TestingModule } from '@nestjs/testing';
import { OneController } from './one.controller';
import { OneService } from './one.service';

describe('OneController', () => {
  let controller: OneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OneController],
      providers: [OneService],
    }).compile();

    controller = module.get<OneController>(OneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
