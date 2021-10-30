import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { GetJobsFilterDto } from './get-jobs-filter.dto';
import { Job } from './job.entity';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  private logger = new Logger('JobController');

  constructor(private jobService: JobService) {}
  @Get()
  getJobs(@Query() filterDto: GetJobsFilterDto): Promise<Job[]> {
    this.logger.verbose(
      `Retriving jobs with filters: ${JSON.stringify(filterDto)} `,
    );
    return this.jobService.getJobsWithFilters(filterDto);
  }
  @Get('/:id')
  getTaskById(@Param('id') id: number): Promise<Job> {
    return this.jobService.getJobById(id);
  }
}
