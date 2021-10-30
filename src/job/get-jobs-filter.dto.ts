import { IsOptional, IsString } from 'class-validator';

export class GetJobsFilterDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
