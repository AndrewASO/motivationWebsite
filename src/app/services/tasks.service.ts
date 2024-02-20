import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseURL = 'http://localhost:3000'; // Adjust based on your server URL

  constructor(private http: HttpClient) {}

  addTask(username: string, description: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/add`, { username, description });
  }

  deleteTask(username: string, taskDescription: string): Observable<any> {
    // Assuming your backend supports deleting by description
    return this.http.delete(`${this.baseURL}/tasks/delete`, { body: { username, taskDescription } });
  }

  completeTask(username: string, taskDescription: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/complete`, { username, taskDescription });
  }

  getTasks(username: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tasks?Username=${username}`);
  }

  resetTasks(username: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/reset`, { username });
  }
}
