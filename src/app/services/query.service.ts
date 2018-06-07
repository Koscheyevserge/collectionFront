import { Task } from '../entities/task.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QueryService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/tasks/get');
  }

  getDetailed(id: number) {
    return this.http.get(`/api/tasks/get?id=${id}&detailed=true`);
  }
}
