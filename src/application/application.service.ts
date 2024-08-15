import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  ApproveApplicationDto,
  CreateApplicationDto,
  EditApplicationDto,
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}
  getApplications() {
    return this.prisma.application.findMany({});
  }

  async createApplication(dto: CreateApplicationDto) {
    const newApplication = await this.prisma.application.create({
      data: {
        firstName: dto.firstName.toLowerCase(),
        middleName: dto.middleName.toLowerCase(),
        lastName: dto.lastName.toLowerCase(),
        dob: dto.dob,
        gender: dto.gender.toLowerCase(),
        country: dto.country.toLowerCase(),
        tel: dto.tel,
        email: dto.email,
        nextOfKinFname: dto.nextOfKinFname.toLowerCase(),
        nextOfKinLname: dto.nextOfKinLname.toLowerCase(),
        relation: dto.relation.toLowerCase(),
        nextOfKinTel: dto.nextOfKinTel,
        nextOfKinEmail: dto.nextOfKinEmail,
        languages: dto.languages,
        highestQualification: dto.highestQualification.toLowerCase(),
        institution: dto.institution.toLowerCase(),
        yearCompleted: dto.yearCompleted,
        proof: dto.proof,
        admissionType: dto.admissionType.toLowerCase(),
        admissionLevel: dto.admissionLevel.toLowerCase(),
        program: dto.program.toLowerCase(),
        paymentMethod: dto.paymentMethod.toLowerCase(),
      },
    });

    if (!newApplication)
      throw new ForbiddenException('Failed to create Apllication');

    return { message: 'Aplication created sucessfully' };
  }

  getApplicationById(applicationId: number) {
    return this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
    });
  }

  getApplicationByEmail(applicationEmail: string) {
    return this.prisma.application.findMany({
      where: {
        email: applicationEmail,
      },
    });
  }

  async editApplicationById(applicationId: number, dto: EditApplicationDto) {
    const application = await this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
    });

    if (!application) throw new ForbiddenException('Application not found');

    const updateApplication = await this.prisma.application.update({
      where: {
        id: applicationId,
      },
      data: {
        ...dto,
      },
    });

    if (!updateApplication)
      throw new ForbiddenException('Application update failed');

    return { message: 'Update Succesful' };
  }

  async approveApplicationById(applicationId: number, userId: number) {
    const application = await this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
    });

    if (!application) throw new ForbiddenException('Application not found');

    const approveApplication = await this.prisma.application.update({
      where: {
        id: applicationId,
        payment: {
          some: {},
        },
      },
      data: {
        approved: true,
        approvedBy: userId,
      },
    });

    if (!approveApplication)
      throw new ForbiddenException('Application could not be approved');
  }

  async revokeApplicationApprovalById(applicationId: number) {
    const application = await this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
    });

    if (!application) throw new ForbiddenException('Application not found');

    const revokeApplication = await this.prisma.application.update({
      where: {
        id: applicationId,
      },
      data: {
        approved: false,
        approvedBy: null,
      },
    });

    if (!revokeApplication)
      throw new ForbiddenException('Revokation Failed!!');
  }

  async deleteApplicationById(applicationId: number) {
    const deleteApplication = await this.prisma.application.delete({
      where: {
        id: applicationId,
      },
    });

    if (!deleteApplication)
      throw new ForbiddenException('Application Deletion failed');
    return { message: 'Delete Succesful' };
  }
}
