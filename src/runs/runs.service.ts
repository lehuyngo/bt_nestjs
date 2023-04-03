import {
  Injectable,
  NotFoundException,
  PayloadTooLargeException,
} from '@nestjs/common';
import { Run } from './runs.model';

@Injectable()
export class RunsService {
  private runs: Run[] = [
    {
      id: '1',
      time: 100,
      description: 'run alone',
    },
    {
      id: '2',
      time: 100,
      description: 'run with friend',
    },
    {
      id: '3',
      time: 100,
      description: 'run with friends',
    },
  ];

  getAllRuns() {
    return { ...this.runs };
  }
  findRunByIndex(id: string) {
    return [this.runs.findIndex((value) => value.id == id)];
  }

  getRun(id: string) {
    const run = this.findRunByIndex(id);
    if (run == null) {
      throw new NotFoundException('Run not found');
    }

    return { ...run };
  }

  createRun(time: number, description: string) {
    const nextId = String(this.runs.length);
    this.runs.push({
      id: nextId,
      time,
      description,
    });
  }

  deleteRun(id: string) {
    const index = this.runs.findIndex((run) => run.id == id);

    if (index == -1) {
      throw new NotFoundException('Run not found');
    }

    this.runs.splice(index, 1);
    return { deleteId: id };
  }

  updateRun(id: string) {
    const currentRun = this.findRunByIndex(id);

    if (currentRun === null) {
      throw new NotFoundException('Run not found');
    }

    const updateRun = {
      ...currentRun,
      ...PayloadTooLargeException,
    };

    return updateRun;
  }
}
