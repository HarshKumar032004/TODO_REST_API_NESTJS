import { Module } from '@nestjs/common';
// import { ServiceModule } from './service/service.module';
import { DatabaseService } from './database.service';

@Module({
  // imports: [ServiceModule],
  providers: [DatabaseService],
  exports:[DatabaseService]
})
export class DatabaseModule {}
