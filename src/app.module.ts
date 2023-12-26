import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { LoggerMiddleware } from './utils/middlewares/logger.middleware';
import { QuotesController } from './quotes/quotes.controller';

@Module({
  imports: [QuotesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'quotes/random', method: RequestMethod.GET })
      .forRoutes(QuotesController);
  }
}
