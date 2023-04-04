/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class Run {
  @ApiProperty({
    description: 'Id of your run',
    minimum: 1,
    default: 1,
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Time of your run',
    minimum: 10,
    default: 10,
    type: Number,
  })
  time: number;

  @ApiProperty({
    description: 'Description of your run',
    minimum: 0,
    default: "Running",
    type: String,
  })
  description: string;
}
