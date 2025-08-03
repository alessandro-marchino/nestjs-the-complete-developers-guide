import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { User } from 'src/users/user.entity';
import { ApproveReportDto } from './dto/approve-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: CreateReportDto, user: User) {
    const report = this.repo.create(reportDto as Partial<Report>);
    report.user = user;
    return this.repo.save(report);
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOneBy({ id: parseInt(id) });
    if(!report) {
      throw new NotFoundException('report not found');
    }
    report.approved = approved;
    return this.repo.save(report);
  }

  createEstimate({ make, model, year, mileage, lng, lat}: GetEstimateDto) {
    const qb = this.repo.createQueryBuilder().where('1 = 1');
    if(make != undefined) {
      qb.andWhere('make = :make', { make });
    }
    if(model != undefined) {
      qb.andWhere('model = :model', { model });
    }
    if(year != undefined) {
      qb.andWhere('year - :year BETWEEN -3 AND 3', { year });
    }
    if(lng != undefined) {
      qb.andWhere('lng - :lng BETWEEN -5 AND 5', { lng });
    }
    if(lat != undefined) {
      qb.andWhere('lat - :lat BETWEEN -5 AND 5', { lat });
    }
    if(mileage != undefined) {
      qb.orderBy('ABS(mileage - :mileage)', 'DESC')
        .setParameters({ mileage });
    } else {
      qb.orderBy('mileage', 'DESC');
    }

    return qb
      .limit(3)
      .select('AVG(price)', 'price')
      .getRawOne();
  }
}
