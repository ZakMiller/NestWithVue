import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New

@Module({
  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '../..', 'client/dist'), // New
    }), // New
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
