import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class ApproveApplicationDto {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
