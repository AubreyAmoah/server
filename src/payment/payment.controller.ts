import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto';

@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  createPayment(@Body() dto: PaymentDto) {
    return this.paymentService.createPayment(dto);
  }
}
