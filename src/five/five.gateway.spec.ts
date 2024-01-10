import { Test, TestingModule } from '@nestjs/testing';
import { FiveGateway } from './five.gateway';

describe('FiveGateway', () => {
  let gateway: FiveGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiveGateway],
    }).compile();

    gateway = module.get<FiveGateway>(FiveGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
