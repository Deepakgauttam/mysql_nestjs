import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'test_db',
    });
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const [results] = await this.pool.execute(sql, params);
    return results;
  }
}
