import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseURL = `https://test--be-5b3b34eadcba.herokuapp.com`; // Adjust based on your server URL (Local Host : http://localhost:3000)

  constructor(private http: HttpClient) {}

  addTask(username: string, description: string, urgency: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/add`, { username, description, urgency });
  }  

  deleteTask(username: string, taskId: string): Observable<any> {
    // Use HTTP DELETE method, passing taskId in the request body
    return this.http.delete(`${this.baseURL}/tasks/delete`, { body: { username, taskId } });
  }
  
  toggleTaskCompletion(username: string, taskId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/toggle-completion`, { username, taskId });
  }

  getTasks(username: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tasks?Username=${username}`);
  }

  resetTasks(username: string): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks/reset`, { username });
  }

  updateTaskUrgency(username: string, taskId: string, newUrgency: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/tasks/update-urgency`, { username, taskId, newUrgency });
  }

  getCompletionPercentage(username: string, urgency: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tasks/completion-percentage`, { params: { username, urgency } });
  }
}
