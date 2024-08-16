import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PaymentDto {
  @IsString()
  @IsNotEmpty()
  paymentType: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsInt()
  @IsNotEmpty()
  ownerId: number;
}
