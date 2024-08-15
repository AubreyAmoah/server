import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsInt,
  IsArray,
} from 'class-validator';

export class EditApplicationDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  dob?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  tel?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  nextOfKinFname?: string;

  @IsString()
  @IsOptional()
  nextOfKinLname?: string;

  @IsString()
  @IsOptional()
  relation?: string;

  @IsString()
  @IsOptional()
  nextOfKinTel?: string;

  @IsString()
  @IsOptional()
  nextOfKinEmail?: string;

  @IsArray()
  @IsOptional()
  languages?: string[];

  @IsString()
  @IsOptional()
  highestQualification?: string;

  @IsString()
  @IsOptional()
  institution?: string;

  @IsString()
  @IsOptional()
  yearCompleted?: string;

  @IsString()
  @IsOptional()
  proof?: string;

  @IsString()
  @IsOptional()
  admissionType?: string;

  @IsString()
  @IsOptional()
  admIssionLevel?: string;

  @IsString()
  @IsOptional()
  program?: string;

  @IsString()
  @IsOptional()
  paymentMethod?: string;
}
