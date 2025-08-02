import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private ctor: ClassConstructor<T>) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToClass(this.ctor, data, { excludeExtraneousValues: true });
      })
    );
  }
}
