import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class FourFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
