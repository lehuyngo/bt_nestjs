import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RunsService } from './runs.service';
import { Run } from './runs.model';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiBody,
} from '@nestjs/swagger';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}
  @Get()
  @ApiCreatedResponse({
    description: 'Get all your runs',
  })
  @ApiBadRequestResponse({
    description: 'Cannot get your runs',
  })
  getAllRun() {
    return this.runsService.getAllRuns();
  }

  @ApiCreatedResponse({
    description: 'Get your run',
  })
  @ApiBadRequestResponse({
    description: 'Cannot get your run',
  })
  @Get(':id')
  getRun(@Param('id') id: string) {
    return this.runsService.getRun(id);
  }

  @ApiCreatedResponse({
    description: 'Create your run',
  })
  @ApiBadRequestResponse({
    description: 'Cannot create your run',
  })
  @ApiBody({
    type: Run,
  })
  @Post()
  createRun(
    @Body('time') time: number,
    @Body('description') description: string,
  ) {
    return this.runsService.createRun(description, time);
  }

  @ApiCreatedResponse({
    description: 'Update all your run',
  })
  @ApiBadRequestResponse({
    description: 'Cannot Update your run',
  })
  @ApiBody({
    type: Run,
  })
  @Patch(':id')
  updateRun(@Param('id') id: string, @Body() dto: Run) {
    return this.runsService.updateRun(id, dto);
  }

  @ApiCreatedResponse({
    description: 'Delete all your run',
  })
  @ApiBadRequestResponse({
    description: 'Cannot Delete your run',
  })
  @Delete(':id')
  deleteRun(@Param('id') id: string) {
    return this.runsService.deleteRun(id);
  }
}
