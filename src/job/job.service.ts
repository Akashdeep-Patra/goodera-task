import { Injectable, NotFoundException } from '@nestjs/common';
import { GetJobsFilterDto } from './get-jobs-filter.dto';
import { Job } from './job.entity';
import { jobsData } from './job.mock';
@Injectable()
export class JobService {
  private JOBS: Job[] = jobsData;
  async getAllJobs(): Promise<Job[]> {
    return this.JOBS;
  }
  async getJobById(id: number): Promise<Job> {
    //try to get task if not throw a 404 error
    const found = this.JOBS.find((job) => job.id.toString() === id.toString());
    if (!found) {
      throw new NotFoundException(
        `Oops looks like task with id ${id} does not exist`,
      );
    }
    return found;
  }

  async getJobsWithFilters(filterDto: GetJobsFilterDto): Promise<Job[]> {
    // console.log(
    //   this.JOBS.filter((job) => {
    //     if (!filterDto.title) {
    //       return true;
    //     }
    //     return job.title.toLowerCase().includes(filterDto.title.toLowerCase());
    //   }).filter((job) => {
    //     if (!filterDto.location) {
    //       return true;
    //     }
    //     console.log(job);
    //     return job.location
    //       .toLowerCase()
    //       .includes(filterDto.location.toLowerCase());
    //   }).length,
    // );

    return this.JOBS.filter((job) => {
      if (!filterDto.title) {
        return true;
      }
      return job.title.toLowerCase().includes(filterDto.title.toLowerCase());
    }).filter((job) => {
      if (!filterDto.location) {
        return true;
      }
      return job.location
        .toLowerCase()
        .includes(filterDto.location.toLowerCase());
    });
  }
}
