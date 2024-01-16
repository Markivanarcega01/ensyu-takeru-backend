import { Test, TestingModule } from '@nestjs/testing';
import { ChangePointController } from './change-point.controller';

describe('ChangePointController', () => {
  let controller: ChangePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangePointController],
    }).compile();

    controller = module.get<ChangePointController>(ChangePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
