import { Test, TestingModule } from '@nestjs/testing';
import { ChangePointService } from './change-point.service';

describe('ChangePointService', () => {
  let service: ChangePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangePointService],
    }).compile();

    service = module.get<ChangePointService>(ChangePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
