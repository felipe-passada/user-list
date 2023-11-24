import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [UserModule, AuthModule, MongooseModule.forRoot(process.env.MONGO_URL)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

