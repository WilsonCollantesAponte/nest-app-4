import { SetMetadata } from '@nestjs/common';

export const Three = (...args: string[]) => SetMetadata('three', args);
