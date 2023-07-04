import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
