import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto, EditApplicationDto } from './dto';
import { JwtGuard } from '../auth/guard';
import { GetUser } from 'src/auth/decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('applications')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('file'))
  createApplication(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateApplicationDto,
  ) {
    return this.applicationService.createApplication(file ,dto);
  }

  @Get('/applicationbyid/:id')
  getApplicationById(@Param('id', ParseIntPipe) applicationId: number) {
    return this.applicationService.getApplicationById(applicationId);
  }

  @Get('/applicationbymail/:email')
  getApplicationByEmail(@Param('email') applicationEmail: string) {
    return this.applicationService.getApplicationByEmail(applicationEmail);
  }

  @UseGuards(JwtGuard)
  @Get()
  getApplications() {
    return this.applicationService.getApplications();
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  editApplicationById(
    @Param('id', ParseIntPipe) applicationId: number,
    @Body() dto: EditApplicationDto,
  ) {
    return this.applicationService.editApplicationById(applicationId, dto);
  }

  @UseGuards(JwtGuard)
  @Patch('/approve/:id')
  approveApplicationById(
    @Param('id', ParseIntPipe) applicationId: number,
    @GetUser('id') userId: number,
  ) {
    return this.applicationService.approveApplicationById(
      applicationId,
      userId,
    );
  }

  @UseGuards(JwtGuard)
  @Patch('/revoke/:id')
  revokeApplicationAprovalById(
    @Param('id', ParseIntPipe) applicationId: number,
  ) {
    return this.applicationService.revokeApplicationApprovalById(applicationId);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteApplicationById(@Param('id', ParseIntPipe) applicationId: number) {
    return this.applicationService.deleteApplicationById(applicationId);
  }
}
