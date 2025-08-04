import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Report } from './report.entity';

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(async () => {
    const repo: Partial<Repository<Report>> = {};
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: getRepositoryToken(Report), useValue: repo }
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
