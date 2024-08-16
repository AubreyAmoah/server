import { IsOptional, IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  tel: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nextOfKinFname: string;

  @IsString()
  @IsNotEmpty()
  nextOfKinLname: string;

  @IsString()
  @IsNotEmpty()
  relation: string;

  @IsString()
  @IsNotEmpty()
  nextOfKinTel: string;

  @IsString()
  @IsOptional()
  nextOfKinEmail?: string;

  @IsOptional()
  @IsArray()
  languages?: string[];

  @IsString()
  @IsNotEmpty()
  highestQualification: string;

  @IsString()
  @IsNotEmpty()
  institution: string;

  @IsString()
  @IsNotEmpty()
  yearCompleted: string;

  @IsString()
  @IsNotEmpty()
  admissionType: string;

  @IsString()
  @IsNotEmpty()
  admissionLevel: string;

  @IsString()
  @IsNotEmpty()
  program: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
