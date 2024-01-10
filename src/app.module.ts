import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneModule } from './one/one.module';
import { FiveGateway } from './five/five.gateway';
import { SixModule } from './six/six.module';
import { SevenModule } from './seven/seven.module';

@Module({
  imports: [OneModule, SixModule, SevenModule],
  controllers: [AppController],
  providers: [AppService, FiveGateway],
})
export class AppModule {}
