import { Test, TestingModule } from '@nestjs/testing';
import { SevenService } from './seven.service';

describe('SevenService', () => {
  let service: SevenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SevenService],
    }).compile();

    service = module.get<SevenService>(SevenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
