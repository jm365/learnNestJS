import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
