import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentDto } from './dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createPayment(dto: PaymentDto) {
    const checkApplication = await this.prisma.application.findUnique({
      where: {
        id: dto.ownerId,
      },
    });

    if (!checkApplication)
      throw new ForbiddenException('Application not found');

    const payment = await this.prisma.payment.create({
      data: {
        processed: true,
        ...dto,
      },
    });

    if (!payment) throw new ForbiddenException('Payment failed');

    return { message: 'Payment Success' };
  }
}
