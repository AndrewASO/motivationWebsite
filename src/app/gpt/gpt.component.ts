import { Component } from '@angular/core';
import { GptService } from '../services/gpt.services';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GPTComponent {
  query: string = '';
  response: string = '';

  constructor(private gptService: GptService) {}

  sendQuery(): void {
    if (!this.query) {
      alert('Please enter a query.');
      return;
    }
    this.gptService.askGpt(this.query).subscribe({
      next: (data) => {
        this.response = data.response;
        console.log('GPT Response:', this.response);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to get response from GPT.');
      }
    });
  }
}
