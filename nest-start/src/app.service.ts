import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { code: 0, msg: 'ok', data: { total: 100 } };
  }
}
