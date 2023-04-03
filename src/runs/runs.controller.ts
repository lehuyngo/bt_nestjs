import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}
  @Get()
  getAllRun() {
    return this.runsService.getAllRuns();
  }

  @Get(':id')
  getRun(@Param('id') id: string) {
    return this.runsService.getRun(id);
  }

  @Delete(':id')
  deleteRun(@Param('id') id: string) {
    return this.runsService.deleteRun(id);
  }
}
