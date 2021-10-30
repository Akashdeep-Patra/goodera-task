import { Module } from '@nestjs/common';
import { JobModule } from './job/job.module';
@Module({
  imports: [JobModule],
})
export class AppModule {}
