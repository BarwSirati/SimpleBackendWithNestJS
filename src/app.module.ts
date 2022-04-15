import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:s74YS5SWP11nzqbA@cluster0.adc1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
