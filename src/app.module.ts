import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ApplicationModule } from './application/application.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    ApplicationModule,
    PrismaModule,
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class AppModule {}
