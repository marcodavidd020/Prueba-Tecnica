import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { HttpModule } from '@nestjs/axios';
import { HistoryModule } from '../history/history.module';
import { AxiosConfigService } from '../config/axios.config';

@Module({
  providers: [ProductsService, AxiosConfigService],
  controllers: [ProductsController],
  imports: [
    HttpModule.registerAsync({
      useClass: AxiosConfigService,
    }),
    HistoryModule,
  ],
})
export class ProductsModule {}
