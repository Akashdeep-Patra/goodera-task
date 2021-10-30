import { CallHandler } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { NestInterceptor } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map } from 'rxjs/operators';
export class TransformInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => classToPlain(data)));
  }
}
