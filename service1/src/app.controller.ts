import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private appService: AppService) {}

  @GrpcMethod('AppController', 'Sum')
  sum(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log('Adding ' + numberArray.data.toString());
    return { sum: this.appService.sum(numberArray.data) };
  }
}
