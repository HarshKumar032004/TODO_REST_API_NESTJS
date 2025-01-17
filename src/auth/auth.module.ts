import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: 'Secret',
      signOptions: {
        expiresIn: 'In'
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})

export class AuthModule {}
