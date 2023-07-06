import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ItemsModule,TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
