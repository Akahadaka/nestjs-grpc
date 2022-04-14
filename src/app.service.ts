import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public sum(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
}
