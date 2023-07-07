import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ItemsModule,TypeOrmModule.forRoot(), AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
