import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(user: { name: string; number: string; email: string }): Promise<any> {
    const sql = 'INSERT INTO users (name, number, email) VALUES (?, ?, ?)';
    const params = [user.name, user.number, user.email];
    return this.databaseService.query(sql, params);
  }

  async findAll(): Promise<any> {
    const sql = 'SELECT * FROM users';
    return this.databaseService.query(sql);
  }
}
